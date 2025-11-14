#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const SPONSOR_DATA_DIR = './sponsor-data';
const OUTPUT_FILE = './our-sponsors.html';
const IMAGES_DIR = './images';

// Function to parse sponsor data from text file
function parseSponsorData(filename) {
    const content = fs.readFileSync(filename, 'utf8');
    const lines = content.split('\n');
    const sponsorData = {};
    
    for (const line of lines) {
        if (line.includes(':')) {
            const [key, ...valueParts] = line.split(':');
            const value = valueParts.join(':').trim();
            const cleanKey = key.trim().toLowerCase().replace(/\s+/g, '_');
            sponsorData[cleanKey] = value;
        }
    }
    
    return sponsorData;
}

// Function to generate sponsor card HTML
function generateSponsorCard(sponsorData) {
    // Required fields with fallbacks
    const name = sponsorData.sponsor_name || 'Unknown Sponsor';
    const image = sponsorData.sponsor_image || 'sponsor-placeholder.jpg';
    
    // Optional fields - only include if they exist and have content
    const description = sponsorData.sponsor_description;
    
    // Build the card content dynamically
    let cardContent = `
                            <div class="sponsor-card">
                                <div class="sponsor-image">
                                    <img src="images/${image}" alt="${name}" class="sponsor-img">
                                </div>
                                <div class="sponsor-content">`;
    
    if (name) {
        cardContent += `
                                    <h3>${name}</h3>`;
    }
    
    if (description) {
        cardContent += `
                                    <p>${description}</p>`;
    }
    
    cardContent += `
                                </div>
                            </div>`;
    
    return cardContent;
}

// Function to generate the complete sponsors page
function generateSponsorsPage(sponsorsData) {
    // Generate sponsor cards (order from files, slideshow ensures equal treatment)
    const sponsorCards = sponsorsData.map(generateSponsorCard).join('\n');
    
    // Duplicate for seamless slideshow loop
    const duplicatedCards = sponsorCards + '\n' + sponsorCards;
    
    const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Sponsors - iGEM Chalmers Gothenburg Association</title>
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
                            <a href="alumni-stories.html" class="nav-link">Alumni Stories</a>
                        </li>
                        <li class="nav-item">
                            <a href="our-sponsors.html" class="nav-link active">Our Sponsors</a>
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
                <h1 class="page-title">Our Sponsors</h1>
                <p class="page-subtitle">Supporting our iGEM teams</p>
            </div>
        </section>

        <!-- Content Section -->
        <section class="content-section">
            <div class="container">
                <div class="content-wrapper">
                    <h2>Thank You to Our Sponsors</h2>
                    <p>
                        We are grateful for the support of our sponsors who make it possible for our iGEM teams 
                        to participate in the competition and develop innovative synthetic biology solutions.
                    </p>
                    
                    <h2>Current Sponsors</h2>
                    <p style="margin-bottom: 1rem; color: #666; font-style: italic;">
                        All our sponsors are equally valued and contribute to making our iGEM participation possible.
                    </p>
                    <div class="sponsors-slideshow-container">
                        <div class="sponsors-slideshow" id="sponsors-slideshow">
${duplicatedCards}
                        </div>
                    </div>
                    
                    <h2>Become a Sponsor</h2>
                    <p>
                        Supporting our iGEM teams is a great way to invest in the future of synthetic biology 
                        and support young researchers. We offer various sponsorship opportunities for 
                        organizations interested in supporting our mission.
                    </p>
                    
                    <div class="sponsorship-benefits">
                        <h3>Sponsorship Benefits</h3>
                        <ul>
                            <li>Recognition on our website and materials</li>
                            <li>Access to our talented student researchers</li>
                            <li>Networking opportunities with the synthetic biology community</li>
                            <li>Support for cutting-edge research projects</li>
                            <li>Contribution to education and innovation</li>
                        </ul>
                    </div>
                    
                    <div class="cta-section">
                        <div class="cta-buttons">
                            <a href="contact-us.html" class="cta-button primary">
                                Become a Sponsor
                            </a>
                            <a href="our-previous-teams.html" class="cta-button secondary">
                                See Our Work
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <h3 class="footer-title">Contact us: igem.cga@gmail.com</h3>
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
        console.log('🔄 Generating sponsors page from data files...');
        
        // Read all sponsor data files
        const files = fs.readdirSync(SPONSOR_DATA_DIR)
            .filter(file => file.endsWith('.txt') && file.startsWith('sponsor-') && !file.includes('README'))
            .sort();
        
        if (files.length === 0) {
            console.log('❌ No sponsor data files found in', SPONSOR_DATA_DIR);
            console.log('📝 Please create sponsor data files using the template in README.txt');
            return;
        }
        
        console.log(`📁 Found ${files.length} sponsor data files:`, files.join(', '));
        
        // Parse all sponsor data and filter out invalid entries
        const sponsorsData = files
            .map(file => {
                const filepath = path.join(SPONSOR_DATA_DIR, file);
                const data = parseSponsorData(filepath);
                
                // Validate required fields
                const requiredFields = ['sponsor_name', 'sponsor_image'];
                const missingFields = requiredFields.filter(field => !data[field] || data[field].trim() === '');
                
                if (missingFields.length > 0) {
                    console.log(`⚠️  ${file} missing required fields: ${missingFields.join(', ')} - SKIPPING`);
                    return null; // Mark as invalid
                } else {
                    console.log(`✅ Parsed ${file}: ${data.sponsor_name}`);
                    return data;
                }
            })
            .filter(data => data !== null); // Remove invalid sponsors
        
        // Generate the sponsors page (only includes valid sponsors from existing files)
        const htmlContent = generateSponsorsPage(sponsorsData);
        
        // Ensure we completely overwrite the file by deleting it first if it exists
        if (fs.existsSync(OUTPUT_FILE)) {
            fs.unlinkSync(OUTPUT_FILE);
        }
        
        // Write the output file with only current sponsors
        fs.writeFileSync(OUTPUT_FILE, htmlContent, 'utf8');
        
        console.log(`✅ Successfully generated ${OUTPUT_FILE}`);
        console.log(`📊 Generated page with ${sponsorsData.length} sponsors`);
        console.log('🎉 Sponsors page updated!');
        
    } catch (error) {
        console.error('❌ Error generating sponsors page:', error.message);
        process.exit(1);
    }
}

// Run the script
if (require.main === module) {
    main();
}

module.exports = { parseSponsorData, generateSponsorCard, generateSponsorsPage };

