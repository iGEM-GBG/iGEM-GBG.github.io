#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const CONTACT_DATA_FILE = './contact-data/contact-info.txt';

// Function to parse contact data from text file
function parseContactData() {
    const content = fs.readFileSync(CONTACT_DATA_FILE, 'utf8');
    const lines = content.split('\n');
    const contactData = {};
    
    for (const line of lines) {
        if (line.includes(':')) {
            const [key, ...valueParts] = line.split(':');
            const value = valueParts.join(':').trim();
            const cleanKey = key.trim().toLowerCase().replace(/\s+/g, '_');
            contactData[cleanKey] = value;
        }
    }
    
    return contactData;
}

// Function to generate footer HTML with contact info
function generateFooterHTML(contactData) {
    const associationEmail = contactData.association_email || 'igem.cga@gmail.com';
    
    return `    <!-- Footer -->
    <footer class="site-footer">
        <div class="container">
            <div class="footer-content">
                <h3 class="footer-title">Contact us: ${associationEmail}</h3>
            </div>
        </div>
    </footer>`;
}

// Function to generate contact page HTML
function generateContactPageHTML(contactData) {
    const associationEmail = contactData.association_email || 'igem.cga@gmail.com';
    const currentTeamEmail = contactData.current_team_email || 'igemgothenburg@gmail.com';
    const legalEmail = contactData.legal_email || 'associationigem@gmail.com';
    
    const instagram = contactData.instagram || '#';
    const facebook = contactData.facebook || '#';
    const linkedin = contactData.linkedin || '#';
    
    const teamSignupForm = contactData.team_signup_form || '#';
    const associationMemberForm = contactData.association_member_form || '#';
    
    // Legal information
    const orgNumber = contactData.org_number || '802541-3876';
    const orgName = contactData.org_name || 'IGEM CHALMERS-GOTHENBURG ASSOCIATION';
    const address = contactData.address || 'c/o BIOLOGY AND BIOLOGICAL ENGINEERING, Kemivägen 10, 412 96 Gothenburg';
    const domain = contactData.domain || 'igem-cga.com';
    const legalForm = contactData.legal_form || 'Non-profit association';
    const legalDomicile = contactData.legal_domicile || 'Göteborg, Västra Götalands län';
    const associationFounded = contactData.association_founded || '2022-11-18';
    
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Us - iGEM Chalmers Gothenburg Association</title>
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
                            <a href="our-sponsors.html" class="nav-link">Our Sponsors</a>
                        </li>
                        <li class="nav-item">
                            <a href="contact-us.html" class="nav-link active">Contact Us</a>
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
                <h1 class="page-title">Contact Us</h1>
                <p class="page-subtitle">Get in touch with the iGEM Chalmers Gothenburg Association</p>
            </div>
        </section>

        <!-- Content Section -->
        <section class="content-section">
            <div class="container">
                <div class="content-wrapper">
                    <h2>Our Non-profit</h2>
                    <p>
                        For general inquiries about the association, board membership, or administrative matters:
                    </p>
                    <div class="contact-method">
                        <strong>Email:</strong> <a href="mailto:${associationEmail}">${associationEmail}</a>
                    </div>
                    
                    <h2>The Current Team</h2>
                    <p>
                        For questions about the current iGEM team, project details, or team-related matters:
                    </p>
                    <div class="contact-method">
                        <strong>Email:</strong> <a href="mailto:${currentTeamEmail}">${currentTeamEmail}</a>
                    </div>
                    
                    <h2>Follow Us on Social Media</h2>
                    <p>
                        Stay updated with our latest news and activities:
                    </p>
                    <div class="social-links">
                        <a href="${instagram}" target="_blank" class="social-link instagram">Instagram</a>
                        <a href="${facebook}" target="_blank" class="social-link facebook">Facebook</a>
                        <a href="${linkedin}" target="_blank" class="social-link linkedin">LinkedIn</a>
                    </div>
                    
                    <h2 id="join-us">Join Us</h2>
                    <p>
                        Interested in getting involved? We have opportunities for both team members and association members.
                    </p>
                    
                    <div class="cta-section">
                        <div class="cta-buttons">
                            <a href="${teamSignupForm}" target="_blank" class="cta-button primary">
                                Team Signup Form
                            </a>
                            <a href="${associationMemberForm}" target="_blank" class="cta-button secondary">
                                Association Member Form
                            </a>
                        </div>
                    </div>
                    
                    <h2>Legal Information</h2>
                    <div class="legal-info">
                        <button class="legal-toggle" onclick="toggleLegalInfo()">
                            <span class="legal-toggle-text">Show Legal Information</span>
                            <span class="legal-toggle-icon">▼</span>
                        </button>
                        <div class="legal-content" id="legalContent" style="display: none;">
                            <div class="legal-details">
                                <p><strong>Email:</strong> <a href="mailto:${legalEmail}">${legalEmail}</a></p>
                                <p><strong>Org-number:</strong> ${orgNumber}</p>
                                <p><strong>Org-name:</strong> ${orgName}</p>
                                <p><strong>Address:</strong> ${address}</p>
                                <p><strong>Domain:</strong> ${domain}</p>
                                <p><strong>Legal Form of Company:</strong> ${legalForm}</p>
                                <p><strong>Legal Domicile/Seat:</strong> ${legalDomicile}</p>
                                <p><strong>Association founded:</strong> ${associationFounded} (year-month-day)</p>
                            </div>
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
                <h3 class="footer-title">Contact us: ${associationEmail}</h3>
            </div>
        </div>
    </footer>

    <!-- JavaScript for mobile menu and legal info toggle -->
    <script src="script.js"></script>
    <script>
        function toggleLegalInfo() {
            const content = document.getElementById('legalContent');
            const toggleText = document.querySelector('.legal-toggle-text');
            const toggleIcon = document.querySelector('.legal-toggle-icon');
            
            if (content.style.display === 'none') {
                content.style.display = 'block';
                toggleText.textContent = 'Hide Legal Information';
                toggleIcon.textContent = '▲';
            } else {
                content.style.display = 'none';
                toggleText.textContent = 'Show Legal Information';
                toggleIcon.textContent = '▼';
            }
        }
    </script>
</body>
</html>`;
}

// Function to update all HTML files with new contact information
function updateAllPages(contactData) {
    const pages = [
        'index.html',
        'about-igem.html', 
        'the-association.html',
        'our-previous-teams.html',
        'our-sponsors.html'
    ];
    
    const footerHTML = generateFooterHTML(contactData);
    
    pages.forEach(page => {
        if (fs.existsSync(page)) {
            let content = fs.readFileSync(page, 'utf8');
            
            // Replace footer section
            const footerRegex = /    <!-- Footer -->[\s\S]*?    <\/footer>/;
            content = content.replace(footerRegex, footerHTML);
            
            fs.writeFileSync(page, content);
            console.log(`✅ Updated ${page}`);
        }
    });
    
    // Generate contact page
    const contactPageHTML = generateContactPageHTML(contactData);
    fs.writeFileSync('contact-us.html', contactPageHTML);
    console.log(`✅ Generated contact-us.html`);
}

// Main execution
function main() {
    try {
        console.log('🔄 Updating contact information across all pages...');
        
        // Parse contact data
        const contactData = parseContactData();
        console.log('✅ Parsed contact data');
        
        // Update all pages
        updateAllPages(contactData);
        
        console.log('🎉 Contact information updated across all pages!');
        
    } catch (error) {
        console.error('❌ Error updating contact information:', error.message);
        process.exit(1);
    }
}

// Run the script
if (require.main === module) {
    main();
}

module.exports = { parseContactData, generateFooterHTML, generateContactPageHTML, updateAllPages };
