// Mobile Menu Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNavigation = document.querySelector('.main-navigation');
    
    if (mobileMenuToggle && mainNavigation) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNavigation.classList.toggle('active');
            
            // Animate hamburger menu
            const hamburgerLines = mobileMenuToggle.querySelectorAll('.hamburger-line');
            hamburgerLines.forEach((line, index) => {
                if (mainNavigation.classList.contains('active')) {
                    if (index === 0) {
                        line.style.transform = 'rotate(45deg) translate(5px, 5px)';
                    } else if (index === 1) {
                        line.style.opacity = '0';
                    } else if (index === 2) {
                        line.style.transform = 'rotate(-45deg) translate(7px, -6px)';
                    }
                } else {
                    line.style.transform = 'none';
                    line.style.opacity = '1';
                }
            });
        });
        
        // Close menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNavigation.classList.remove('active');
                
                // Reset hamburger animation
                const hamburgerLines = mobileMenuToggle.querySelectorAll('.hamburger-line');
                hamburgerLines.forEach(line => {
                    line.style.transform = 'none';
                    line.style.opacity = '1';
                });
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mainNavigation.contains(event.target) && !mobileMenuToggle.contains(event.target)) {
                mainNavigation.classList.remove('active');
                
                // Reset hamburger animation
                const hamburgerLines = mobileMenuToggle.querySelectorAll('.hamburger-line');
                hamburgerLines.forEach(line => {
                    line.style.transform = 'none';
                    line.style.opacity = '1';
                });
            }
        });
    }
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to header
    const siteHeader = document.querySelector('.site-header');
    if (siteHeader) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 100) {
                siteHeader.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
                siteHeader.style.backdropFilter = 'blur(10px)';
            } else {
                siteHeader.style.backgroundColor = '#fff';
                siteHeader.style.backdropFilter = 'none';
            }
        });
    }
    
    // Sponsors Slideshow Enhancement
    const sponsorsSlideshow = document.getElementById('sponsors-slideshow');
    if (sponsorsSlideshow) {
        // Calculate animation duration based on number of sponsors
        const sponsorCards = sponsorsSlideshow.querySelectorAll('.sponsor-card');
        const uniqueSponsors = Math.floor(sponsorCards.length / 2); // Assuming duplicates
        
        if (uniqueSponsors > 0) {
            // Adjust animation duration: more sponsors = slower animation
            const duration = Math.max(20, uniqueSponsors * 10); // Minimum 20s, 10s per sponsor
            sponsorsSlideshow.style.animationDuration = `${duration}s`;
        }
        
        // Pause on hover (already handled by CSS, but adding for accessibility)
        sponsorsSlideshow.addEventListener('mouseenter', function() {
            this.style.animationPlayState = 'paused';
        });
        
        sponsorsSlideshow.addEventListener('mouseleave', function() {
            this.style.animationPlayState = 'running';
        });
    }
    
    // Handle smooth scrolling to anchor on page load
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        const targetElement = document.getElementById(hash);
        
        if (targetElement) {
            // Small delay to ensure page is fully loaded
            setTimeout(() => {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }, 100);
        }
    }
});
