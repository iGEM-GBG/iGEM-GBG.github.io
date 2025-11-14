#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const BOARD_DATA_DIR = './board-data';
const OUTPUT_FILE = './the-association.html';
const IMAGES_DIR = './images';

// Function to parse board member data from text file
function parseBoardMemberData(filename) {
    const content = fs.readFileSync(filename, 'utf8');
    const lines = content.split('\n');
    const boardData = {};
    
    for (const line of lines) {
        if (line.includes(':')) {
            const [key, ...valueParts] = line.split(':');
            const value = valueParts.join(':').trim();
            const cleanKey = key.trim().toLowerCase().replace(/\s+/g, '_');
            boardData[cleanKey] = value;
        }
    }
    
    return boardData;
}

// Function to generate board member card HTML
function generateBoardMemberCard(boardData) {
    // Required fields with fallbacks
    const name = boardData.board_member_name || 'Unknown Member';
    const title = boardData.board_member_title || 'Board Member';
    const image = boardData.board_member_image || 'board-member-placeholder.jpg';
    
    // Optional fields - only include if they exist and have content
    const bio = boardData.board_member_bio;
    const email = boardData.board_member_email;
    const linkedin = boardData.board_member_linkedin;
    const yearJoined = boardData.board_member_year_joined;
    const previousTeam = boardData.board_member_previous_team;
    const imageOffset = boardData.board_member_image_offset;
    const imageZoom = boardData.board_member_image_zoom;
    
    // Determine image offset class and style
    let imageClass = 'board-member-img';
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
                            <div class="board-member-card">
                                <div class="board-member-image">
                                    <img src="images/${image}" alt="${name}" class="${imageClass}"${imageStyle}>
                                </div>
                                <div class="board-member-content">
                                    <h3 class="board-member-name">${name}</h3>
                                    <p class="board-member-title">${title}</p>`;
    
    // Add bio if provided
    if (bio) {
        cardContent += `
                                    <p class="board-member-bio">${bio}</p>`;
    }
    
    // Add optional information if available
    if (yearJoined || previousTeam) {
        cardContent += `
                                    <div class="board-member-details">`;
        
        if (previousTeam) {
            cardContent += `
                                        <p class="board-member-team"><strong>Competed in:</strong> ${previousTeam}</p>`;
        }
        
        if (yearJoined) {
            cardContent += `
                                        <p class="board-member-year"><strong>Joined the board in:</strong> ${yearJoined}</p>`;
        }
        
        cardContent += `
                                    </div>`;
    }
    
    // Add contact information if available
    if (email || linkedin) {
        cardContent += `
                                    <div class="board-member-contact">`;
        
        if (email) {
            cardContent += `
                                        <a href="mailto:${email}" class="board-member-email">${email}</a>`;
        }
        
        if (linkedin) {
            cardContent += `
                                        <a href="${linkedin}" target="_blank" class="board-member-linkedin">LinkedIn</a>`;
        }
        
        cardContent += `
                                    </div>`;
    }
    
    cardContent += `
                                </div>
                            </div>`;
    
    return cardContent;
}

// Function to generate the complete association page
function generateAssociationPage(boardData) {
    // Sort board members by title priority (Chairman, Treasurer, Board Members, Board Advisor)
    const titlePriority = {
        'Chairman': 1,
        'Treasurer': 2,
        'Board Member': 3,
        'Board Advisor': 4
    };
    
    boardData.sort((a, b) => {
        const aTitle = a.board_member_title || '';
        const bTitle = b.board_member_title || '';
        
        // Extract base title for comparison
        const aBaseTitle = aTitle.includes('Board Member') ? 'Board Member' : aTitle;
        const bBaseTitle = bTitle.includes('Board Member') ? 'Board Member' : bTitle;
        
        const aPriority = titlePriority[aBaseTitle] || 6;
        const bPriority = titlePriority[bBaseTitle] || 6;
        
        if (aPriority !== bPriority) {
            return aPriority - bPriority;
        }
        
        // If same priority, sort by name
        return (a.board_member_name || '').localeCompare(b.board_member_name || '');
    });
    
    const boardCards = boardData.map(generateBoardMemberCard).join('\n');
    
    const htmlTemplate = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>The Association - iGEM Chalmers Gothenburg Association</title>
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
                            <a href="the-association.html" class="nav-link active">The Association</a>
                        </li>
                        <li class="nav-item">
                            <a href="our-previous-teams.html" class="nav-link">Our Previous Teams</a>
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
                <h1 class="page-title">The Association</h1>
                <p class="page-subtitle">About iGEM Chalmers Gothenburg Association</p>
            </div>
        </section>

        <!-- Content Section -->
        <section class="content-section">
            <div class="container">
                <div class="content-wrapper">
                    <h2>About Us</h2>
                    <p>
                        The iGEM association was established in the autumn of 2022 with the aim of supporting 
                        future iGEM teams at Chalmers University of Technology and the University of Gothenburg. 
                        Since its inception, the board has actively explored various ways to facilitate this support. 
                        The association focuses on laying a strong financial foundation by seeking sponsorship 
                        opportunities to aid dedicated young scientists entering iGEM. Additionally, it provides 
                        a platform for alumni of previous teams to share their experiences, offering guidance 
                        and mentorship to new iGEM members.
                    </p>
                    
                    <h2>What We Do</h2>
                    <ul>
                        <li><strong>Team Support:</strong> Provide resources and guidance for the annual iGEM team</li>
                        <li><strong>Knowledge Transfer:</strong> Ensure knowledge and experience is passed between teams</li>
                        <li><strong>Community Building:</strong> Create a network of synthetic biology enthusiasts</li>
                        <li><strong>Outreach:</strong> Promote synthetic biology education and awareness</li>
                        <li><strong>Fundraising:</strong> Support team projects through fundraising activities</li>
                    </ul>
                    
                    <h2>Our Goals</h2>
                    <p>
                        We aim to establish a strong foundation for synthetic biology research and education 
                        at Chalmers University of Technology, while contributing to the global iGEM community 
                        and advancing the field of synthetic biology.
                    </p>
                    
                    <h2>Members of the Board 2025</h2>
                    <p>
                        Our board consists of dedicated individuals who have previously participated in iGEM 
                        competitions and are committed to supporting future teams.
                    </p>
                    
                    <div class="board-members-grid">
${boardCards}
                    </div>
                    
                    <h2>Get Involved</h2>
                    <p>
                        Whether you're a student, researcher, or simply interested in synthetic biology, 
                        there are many ways to get involved with our association.
                    </p>
                    
                    <div class="cta-section">
                        <div class="cta-buttons">
                            <a href="contact-us.html" class="cta-button primary">
                                Become a Member
                            </a>
                            <a href="our-previous-teams.html" class="cta-button secondary">
                                Learn About Our Teams
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
        console.log('🔄 Generating association page from board member data files...');
        
        // Read all board member data files
        const files = fs.readdirSync(BOARD_DATA_DIR)
            .filter(file => file.endsWith('.txt') && file.startsWith('board-member-'))
            .sort();
        
        if (files.length === 0) {
            console.log('❌ No board member data files found in', BOARD_DATA_DIR);
            console.log('📝 Please create board member data files using the template in README.txt');
            return;
        }
        
        console.log(`📁 Found ${files.length} board member data files:`, files.join(', '));
        
        // Parse all board member data
        const boardData = files.map(file => {
            const filepath = path.join(BOARD_DATA_DIR, file);
            const data = parseBoardMemberData(filepath);
            
            // Validate required fields
            const requiredFields = ['board_member_name', 'board_member_title', 'board_member_image'];
            const missingFields = requiredFields.filter(field => !data[field] || data[field].trim() === '');
            
            if (missingFields.length > 0) {
                console.log(`⚠️  ${file} missing required fields: ${missingFields.join(', ')}`);
            } else {
                console.log(`✅ Parsed ${file}: ${data.board_member_name}`);
            }
            
            return data;
        });
        
        // Generate the association page
        const htmlContent = generateAssociationPage(boardData);
        
        // Write the output file
        fs.writeFileSync(OUTPUT_FILE, htmlContent);
        
        console.log(`✅ Successfully generated ${OUTPUT_FILE}`);
        console.log(`📊 Generated page with ${boardData.length} board members`);
        console.log('🎉 Association page updated!');
        
    } catch (error) {
        console.error('❌ Error generating association page:', error.message);
        process.exit(1);
    }
}

// Run the script
if (require.main === module) {
    main();
}

module.exports = { parseBoardMemberData, generateBoardMemberCard, generateAssociationPage };
