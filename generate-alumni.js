#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const ALUMNI_DATA_DIR = './alumni-data';
const OUTPUT_FILE = './alumni-stories.html';
const IMAGES_DIR = './images';

// Function to parse alumni data from text file
function parseAlumniData(filename) {
    const content = fs.readFileSync(filename, 'utf8');
    const lines = content.split('\n');
    const alumniData = {};
    
    let i = 0;
    while (i < lines.length) {
        const line = lines[i];
        
        // Check if this line starts a new field (uppercase letters followed by colon)
        if (line.match(/^[A-Z][A-Z\s]+:/)) {
            const [key, ...valueParts] = line.split(':');
            const value = valueParts.join(':').trim();
            const cleanKey = key.trim().toLowerCase().replace(/\s+/g, '_');
            
            // Check if this is a multi-line field (like ALUMNI STORY)
            // Continue reading lines until we hit the next field or end of file
            let multiLineValue = value;
            i++;
            
            while (i < lines.length) {
                const nextLine = lines[i];
                // Stop if we hit a new field (starts with uppercase letters and colon)
                if (nextLine.match(/^[A-Z][A-Z\s]+:/)) {
                    break;
                }
                // Stop if we hit an empty line that's followed by a new field
                if (nextLine.trim() === '' && i + 1 < lines.length && lines[i + 1].match(/^[A-Z][A-Z\s]+:/)) {
                    break;
                }
                // Append the line to the value (preserve newlines)
                if (nextLine.trim() !== '' || multiLineValue !== '') {
                    if (multiLineValue !== '') {
                        multiLineValue += '\n' + nextLine;
                    } else {
                        multiLineValue = nextLine;
                    }
                }
                i++;
            }
            
            alumniData[cleanKey] = multiLineValue.trim();
        } else {
            i++;
        }
    }
    
    return alumniData;
}

// Function to generate alumni card HTML
function generateAlumniCard(alumniData) {
    // Required fields with fallbacks
    const name = alumniData.alumni_name || 'Unknown Alumni';
    
    // Optional fields - only include if they exist and have content
    const image = alumniData.alumni_image || 'alumni-placeholder.jpg';
    const year = alumniData.alumni_year;
    const position = alumniData.alumni_position;
    const story = alumniData.alumni_story;
    const imageOffset = alumniData.alumni_image_offset;
    const imageZoom = alumniData.alumni_image_zoom;
    
    // Determine image offset class and style
    let imageClass = 'alumni-img';
    let imageStyle = '';
    let styleProperties = [];
    
    if (imageOffset) {
        if (imageOffset === 'top' || imageOffset === 'center' || imageOffset === 'bottom') {
            imageClass += ` offset-${imageOffset}`;
        } else if (imageOffset.startsWith('custom:')) {
            const customValue = imageOffset.replace('custom:', '');
            imageClass += ' offset-custom';
            styleProperties.push(`object-position: center ${customValue}`);
        }
    }
    
    // Determine image zoom class and style
    if (imageZoom) {
        if (imageZoom === 'small' || imageZoom === 'medium' || imageZoom === 'large') {
            imageClass += ` zoom-${imageZoom}`;
        } else if (imageZoom.startsWith('custom:')) {
            const customValue = imageZoom.replace('custom:', '');
            imageClass += ' zoom-custom';
            styleProperties.push(`transform: scale(${customValue})`);
        }
    }
    
    // Combine all style properties
    if (styleProperties.length > 0) {
        imageStyle = ` style="${styleProperties.join('; ')};"`;
    }
    
    // Build the card content dynamically
    let cardContent = `
                        <div class="alumni-card">
                            <div class="alumni-image">
                                <img src="images/${image}" alt="${name}" class="${imageClass}"${imageStyle}>
                            </div>
                            <div class="alumni-content">
                                <h3 class="alumni-name">${name}</h3>`;
    
    // Add year and/or position if provided
    if (year || position) {
        cardContent += `
                                <div class="alumni-meta">`;
        
        if (year) {
            cardContent += `
                                    <span class="alumni-year">${year}</span>`;
        }
        
        if (position) {
            if (year) {
                cardContent += ` <span class="alumni-separator">•</span>`;
            }
            cardContent += `
                                    <span class="alumni-position">${position}</span>`;
        }
        
        cardContent += `
                                </div>`;
    }
    
    // Add story if provided
    if (story) {
        // First, convert literal \n escape sequences to actual newlines
        let processedStory = story.replace(/\\n/g, '\n');
        
        // Convert newlines to HTML line breaks
        // Double newlines become paragraph breaks, single newlines become <br>
        const storyHtml = processedStory
            .split(/\n\n+/)  // Split on double (or more) newlines for paragraphs
            .map(paragraph => {
                // Replace single newlines with <br> tags within each paragraph
                return paragraph.trim().replace(/\n/g, '<br>');
            })
            .filter(para => para !== '')  // Remove empty paragraphs
            .map(para => `<p>${para}</p>`)  // Wrap each paragraph in <p> tags
            .join('\n                                    ');  // Join with indentation
        
        cardContent += `
                                <div class="alumni-story">
                                    ${storyHtml}
                                </div>`;
    }
    
    cardContent += `
                            </div>
                        </div>`;
    
    return cardContent;
}

// Simple seeded random number generator for deterministic shuffling
function seededRandom(seed) {
    let value = seed;
    return function() {
        value = (value * 9301 + 49297) % 233280;
        return value / 233280;
    };
}

// Deterministic shuffle function - same seed produces same order
function deterministicShuffle(array, seed = 12345) {
    const rng = seededRandom(seed);
    const shuffled = [...array];
    
    // Fisher-Yates shuffle with seeded random
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(rng() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    return shuffled;
}

// Function to generate the complete alumni stories page
function generateAlumniPage(alumniData) {
    // Shuffle alumni in a deterministic way (same order every time)
    // Using a fixed seed ensures consistent ordering across page regenerations
    const shuffledAlumni = deterministicShuffle(alumniData, 12345);
    
    const alumniCards = shuffledAlumni.map(generateAlumniCard).join('\n');
    
    const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Alumni Stories - iGEM Chalmers Gothenburg Association</title>
    <link rel="icon" href="images/favicon.jpg" type="image/jpeg">
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Header with Navigation -->
    <header class="site-header">
        <div class="container">
            <div class="header-content">
                <!-- Logo -->
                <div class="logo">
                    <a href="index.html">
                        <img src="images/igem-cga-logo.jpg" alt="iGEM-cga Logo" class="logo-img">
                        <span class="logo-text">iGEM-cga</span>
                    </a>
                </div>
                
                <!-- Mobile Menu Toggle -->
                <button class="mobile-menu-toggle" aria-label="Toggle navigation menu">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
                
                <!-- Navigation Menu -->
                <nav class="main-navigation">
                    <ul class="nav-list">
                        <li class="nav-item">
                            <a href="index.html" class="nav-link">Home</a>
                        </li>
                        <li class="nav-item">
                            <a href="about-igem.html" class="nav-link">About iGEM</a>
                        </li>
                        <li class="nav-item">
                            <a href="the-association.html" class="nav-link">The Association</a>
                        </li>
                        <li class="nav-item">
                            <a href="our-previous-teams.html" class="nav-link">Our Previous Teams</a>
                        </li>
                        <li class="nav-item">
                            <a href="alumni-stories.html" class="nav-link active">Alumni Stories</a>
                        </li>
                        <li class="nav-item">
                            <a href="our-sponsors.html" class="nav-link">Our Sponsors</a>
                        </li>
                        <li class="nav-item">
                            <a href="contact-us.html" class="nav-link">Contact Us</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main class="main-content">
        <!-- Page Header -->
        <section class="page-header">
            <div class="container">
                <h1 class="page-title">Alumni Stories</h1>
                <p class="page-subtitle">Hear from our alumni about their iGEM experience</p>
            </div>
        </section>

        <!-- Content Section -->
        <section class="content-section">
            <div class="container">
                <div class="content-wrapper">
                    <h2>Our Alumni</h2>
                    <p>
                        Our alumni share their experiences and how participating in iGEM has impacted their careers 
                        and personal growth. Read their stories below.
                    </p>
                    
                    <div class="alumni-list">
${alumniCards}
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <h3 class="footer-title">Contact us: associationigem@gmail.com</h3>
            </div>
        </div>
    </footer>

    <!-- JavaScript for mobile menu -->
    <script src="script.js"></script>
</body>
</html>`;

    return htmlTemplate;
}

// Main execution
function main() {
    try {
        console.log('🔄 Generating alumni stories page from data files...');
        
        // Read all alumni data files
        const files = fs.readdirSync(ALUMNI_DATA_DIR)
            .filter(file => file.endsWith('.txt') && file.startsWith('alumni-') && !file.includes('README'))
            .sort();
        
        if (files.length === 0) {
            console.log('❌ No alumni data files found in', ALUMNI_DATA_DIR);
            console.log('📝 Please create alumni data files using the template in README.txt');
            return;
        }
        
        console.log(`📁 Found ${files.length} alumni data files:`, files.join(', '));
        
        // Parse all alumni data
        const alumniData = files.map(file => {
            const filepath = path.join(ALUMNI_DATA_DIR, file);
            const data = parseAlumniData(filepath);
            
            // Validate required fields
            const requiredFields = ['alumni_name'];
            const missingFields = requiredFields.filter(field => !data[field] || data[field].trim() === '');
            
            if (missingFields.length > 0) {
                console.log(`⚠️  ${file} missing required fields: ${missingFields.join(', ')}`);
            } else {
                console.log(`✅ Parsed ${file}: ${data.alumni_name}`);
            }
            
            return data;
        });
        
        // Generate the alumni stories page
        const htmlContent = generateAlumniPage(alumniData);
        
        // Write the output file
        fs.writeFileSync(OUTPUT_FILE, htmlContent);
        
        console.log(`✅ Successfully generated ${OUTPUT_FILE}`);
        console.log(`📊 Generated page with ${alumniData.length} alumni stories`);
        console.log('🎉 Alumni stories page updated!');
        
    } catch (error) {
        console.error('❌ Error generating alumni stories page:', error.message);
        process.exit(1);
    }
}

// Run the script
if (require.main === module) {
    main();
}

module.exports = { parseAlumniData, generateAlumniCard, generateAlumniPage };

