#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const TEAM_DATA_DIR = './team-data';
const OUTPUT_FILE = './our-previous-teams.html';
const IMAGES_DIR = './images';

// Function to normalize URLs - add https:// if protocol is missing
function normalizeUrl(url) {
    if (!url || url.trim() === '') {
        return url;
    }
    const trimmedUrl = url.trim();
    // Check if URL already has a protocol
    if (trimmedUrl.startsWith('http://') || trimmedUrl.startsWith('https://')) {
        return trimmedUrl;
    }
    // Add https:// if protocol is missing
    return 'https://' + trimmedUrl;
}

// Function to parse team data from text file
function parseTeamData(filename) {
    const content = fs.readFileSync(filename, 'utf8');
    const lines = content.split('\n');
    const teamData = {};
    
    for (const line of lines) {
        if (line.includes(':')) {
            const [key, ...valueParts] = line.split(':');
            const value = valueParts.join(':').trim();
            const cleanKey = key.trim().toLowerCase().replace(/\s+/g, '_');
            teamData[cleanKey] = value;
        }
    }
    
    return teamData;
}

// Function to generate team card HTML
function generateTeamCard(teamData) {
    // Required fields with fallbacks
    const year = teamData.team_year || 'Unknown';
    const name = teamData.team_name || `${year} Team`;
    const title = teamData.project_title || 'Project Title';
    const description = teamData.project_description || 'Project description not available.';
    const image = teamData.team_image || 'team-placeholder.jpg';
    const wikiUrl = normalizeUrl(teamData.team_wiki_url || '#');
    
    // Optional fields - only include if they exist and have content
    const members = teamData.team_members;
    const category = teamData.project_category;
    const awards = teamData.awards;
    const videoUrl = teamData.video_url ? normalizeUrl(teamData.video_url) : null;
    
    // Build the content section with always-visible description
    let contentSection = `
                                <h3><a href="${wikiUrl}" target="_blank" class="team-title-link">iGEM ${year}</a></h3>`;
    
    if (description) {
        contentSection += `
                                <p class="team-description-text">${description}</p>`;
    }
    
    if (category || awards || members) {
        contentSection += `
                                <div class="team-details">`;
        
        if (category) {
            contentSection += `
                                    <p class="team-category"><strong>Category:</strong> ${category}</p>`;
        }
        
        if (awards) {
            contentSection += `
                                    <p class="team-awards"><strong>Awards:</strong> ${awards}</p>`;
        }
        
        if (members) {
            contentSection += `
                                    <p class="team-members"><strong>Team Members:</strong> ${members}</p>`;
        }
        
        contentSection += `
                                </div>`;
    }
    
    // Build button section - always show wiki button, conditionally show video button
    contentSection += `
                                <div class="team-buttons">`;
    contentSection += `
                                    <a href="${wikiUrl}" target="_blank" class="team-link">Visit Team Wiki</a>`;
    
    if (videoUrl) {
        contentSection += `
                                    <a href="${videoUrl}" target="_blank" class="team-link">Watch Intro Vid</a>`;
    }
    
    contentSection += `
                                </div>`;
    
    return `
                        <div class="team-card">
                            <div class="team-image">
                                <img src="images/${image}" alt="${year} Team Project" class="team-img">
                            </div>
                            <div class="team-content">
                                ${contentSection}
                            </div>
                        </div>`;
}

// Function to generate the complete teams page
function generateTeamsPage(teamsData) {
    // Sort teams by year (newest first)
    teamsData.sort((a, b) => parseInt(b.team_year) - parseInt(a.team_year));
    
    const teamCards = teamsData.map(generateTeamCard).join('\n');
    
    const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Our Previous Teams - iGEM Chalmers Gothenburg Association</title>
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
                            <a href="our-previous-teams.html" class="nav-link active">Our Previous Teams</a>
                        </li>
                        <li class="nav-item">
                            <a href="alumni-stories.html" class="nav-link">Alumni Stories</a>
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
                <h1 class="page-title">Our Previous Teams</h1>
                <p class="page-subtitle">Past iGEM projects from Chalmers University</p>
            </div>
        </section>

        <!-- Content Section -->
        <section class="content-section">
            <div class="container">
                <div class="content-wrapper">
                    <h2>Team History</h2>
                    <p>
                        Since our founding in 2023, we have supported multiple iGEM teams from Chalmers University 
                        of Technology. Each team brings unique perspectives and innovative solutions to global challenges 
                        in synthetic biology.
                    </p>
                    
                    <h2>Past Projects</h2>
                    <div class="team-grid">
${teamCards}
                    </div>
                    
                    <h2>Join the Next Team</h2>
                    <p>
                        Are you interested in synthetic biology and want to make a difference? We're always looking 
                        for motivated students to join our iGEM teams. No prior experience in synthetic biology is 
                        required - we welcome students from all disciplines!
                    </p>
                    
                    <div class="cta-section">
                        <div class="cta-buttons">
                            <a href="contact-us.html#join-us" class="cta-button primary">
                                Apply for Next Year's Team
                            </a>
                            <a href="about-igem.html" class="cta-button secondary">
                                Learn More About iGEM
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
        console.log('🔄 Generating teams page from data files...');
        
        // Read all team data files
        const files = fs.readdirSync(TEAM_DATA_DIR)
            .filter(file => file.endsWith('.txt') && file.startsWith('team-'))
            .sort();
        
        if (files.length === 0) {
            console.log('❌ No team data files found in', TEAM_DATA_DIR);
            console.log('📝 Please create team data files using the template in README.txt');
            return;
        }
        
        console.log(`📁 Found ${files.length} team data files:`, files.join(', '));
        
        // Parse all team data
        const teamsData = files.map(file => {
            const filepath = path.join(TEAM_DATA_DIR, file);
            const data = parseTeamData(filepath);
            
            // Validate required fields
            const requiredFields = ['team_year', 'team_name', 'project_title', 'project_description', 'team_image', 'team_wiki_url'];
            const missingFields = requiredFields.filter(field => !data[field] || data[field].trim() === '');
            
            if (missingFields.length > 0) {
                console.log(`⚠️  ${file} missing required fields: ${missingFields.join(', ')}`);
            } else {
                console.log(`✅ Parsed ${file}: ${data.team_name}`);
            }
            
            return data;
        });
        
        // Generate the teams page
        const htmlContent = generateTeamsPage(teamsData);
        
        // Write the output file
        fs.writeFileSync(OUTPUT_FILE, htmlContent);
        
        console.log(`✅ Successfully generated ${OUTPUT_FILE}`);
        console.log(`📊 Generated page with ${teamsData.length} teams`);
        console.log('🎉 Teams page updated!');
        
    } catch (error) {
        console.error('❌ Error generating teams page:', error.message);
        process.exit(1);
    }
}

// Run the script
if (require.main === module) {
    main();
}

module.exports = { parseTeamData, generateTeamCard, generateTeamsPage };
