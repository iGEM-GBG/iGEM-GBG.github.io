# Technical Documentation for AI Tools and Developers

## 🤖 AI Assistant Guidelines

This document provides specific guidance for AI tools working on this iGEM website project.

### Project Context
- **Original Problem**: Website built with Google Sites had obfuscated HTML/CSS making maintenance impossible
- **Solution**: Complete rebuild with clean, semantic HTML and readable CSS
- **Key Achievement**: Eliminated cryptic class names like `DXsoRd YTv4We oNsfjf` → `.site-header`
- **Maintenance Goal**: Enable non-technical users to update content easily

### Code Quality Standards
- **Semantic HTML**: Use proper HTML5 elements (`<header>`, `<main>`, `<section>`, `<nav>`)
- **Readable CSS**: Class names must be descriptive (`.hero-section`, `.team-card`, `.nav-link`)
- **No Obfuscation**: Never use minified or cryptic naming
- **Comments**: Document complex functionality
- **Accessibility**: Include proper ARIA labels and semantic markup

## 🏗️ Architecture Patterns

### HTML Structure Pattern
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta tags, title, CSS, fonts -->
</head>
<body>
    <header class="site-header">
        <!-- Navigation with logo and menu -->
    </header>
    <main class="main-content">
        <section class="page-header">
            <!-- Page title and subtitle -->
        </section>
        <section class="content-section">
            <!-- Main content -->
        </section>
    </main>
    <footer class="site-footer">
        <!-- Footer content -->
    </footer>
    <script src="script.js"></script>
</body>
</html>
```

### CSS Organization Pattern
```css
/* Reset and Base Styles */
/* Component Styles */
/* Layout Styles */
/* Responsive Design */
```

### JavaScript Pattern
```javascript
// Event listeners for DOMContentLoaded
// Mobile menu functionality
// Smooth scrolling
// Header scroll effects
```

## 📁 File Naming Conventions

### HTML Files
- `index.html` - Homepage
- `about-igem.html` - About page
- `the-association.html` - Association page
- `our-previous-teams.html` - Teams page (auto-generated)
- `our-sponsors.html` - Sponsors page
- `contact-us.html` - Contact page

### CSS Classes
- **Layout**: `.container`, `.main-content`, `.page-header`
- **Components**: `.site-header`, `.main-navigation`, `.team-card`
- **States**: `.active`, `.hover`, `.mobile-menu-toggle`
- **Utilities**: `.cta-button`, `.nav-link`, `.hero-title`

### Images
- **Descriptive names**: `igem-cga-logo.jpg`, `hero-background.jpg`
- **Team images**: `team-2025.jpg`, `team-2024-project.jpg`
- **Feature images**: `about-igem-feature.jpg`, `contribute-feature.jpg`

## 🔧 Team Management System

### Data Format
```text
TEAM YEAR: 2025
TEAM NAME: 2025 Team
PROJECT TITLE: Project Title
PROJECT DESCRIPTION: Detailed description...
TEAM IMAGE: team-2025.jpg
TEAM WIKI URL: https://2025.igem.wiki/chalmers-gothenburg/
TEAM MEMBERS: Member 1, Member 2, Member 3
PROJECT CATEGORY: Category
AWARDS: Award 1, Award 2
STATUS: completed
```

### Generation Process
1. **Parse data files** from `team-data/` directory
2. **Sort by year** (newest first)
3. **Generate HTML** with interactive cards
4. **Write to** `our-previous-teams.html`

### Key Functions
- `parseTeamData(filename)` - Parse team data from text file
- `generateTeamCard(teamData)` - Generate HTML for team card
- `generateTeamsPage(teamsData)` - Generate complete page

## 🎨 CSS Architecture

### Component Structure
```css
.component-name {
    /* Base styles */
}

.component-name:hover {
    /* Hover states */
}

.component-name.active {
    /* Active states */
}

@media (max-width: 768px) {
    .component-name {
        /* Mobile styles */
    }
}
```

### Color Variables
```css
:root {
    --primary-color: #1d422b;
    --primary-hover: #2a5a3a;
    --background-color: #ffffff;
    --light-background: #f8f9fa;
    --text-color: #333333;
}
```

### Responsive Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🚀 Development Workflow

### Adding New Features
1. **Plan the feature** - What problem does it solve?
2. **Design the HTML** - Use semantic elements
3. **Style with CSS** - Follow naming conventions
4. **Add JavaScript** - If interactivity needed
5. **Test responsiveness** - Mobile-first approach
6. **Update documentation** - Document the changes

### Modifying Existing Features
1. **Understand current implementation** - Read existing code
2. **Make minimal changes** - Preserve existing functionality
3. **Test thoroughly** - Verify no regressions
4. **Update comments** - Keep documentation current

### Debugging Process
1. **Check browser console** - Look for JavaScript errors
2. **Validate HTML/CSS** - Use browser dev tools
3. **Test on multiple devices** - Verify responsive design
4. **Check file paths** - Ensure all resources load
5. **Use debug mode** - Enable logging if available

## 🔍 Common Issues and Solutions

### Images Not Loading
```bash
# Check if file exists
ls -la images/filename.jpg

# Check file permissions
chmod 644 images/filename.jpg

# Verify HTML path
<img src="images/filename.jpg" alt="Description">
```

### Team Page Not Updating
```bash
# Check data files
ls -la team-data/

# Run generation script
node generate-teams.js

# Check for errors
node generate-teams.js 2>&1 | tee debug.log
```

### CSS Not Applying
```css
/* Check for syntax errors */
/* Verify class names match HTML */
/* Clear browser cache */
/* Check CSS specificity */
```

### JavaScript Not Working
```javascript
// Check for console errors
console.log('Debug message');

// Verify DOM ready
document.addEventListener('DOMContentLoaded', function() {
    // Your code here
});

// Check element selection
const element = document.querySelector('.class-name');
console.log(element); // Should not be null
```

## 📋 Code Review Checklist

### HTML
- [ ] Semantic HTML5 elements used
- [ ] Proper heading hierarchy (h1, h2, h3)
- [ ] Alt text for images
- [ ] ARIA labels where needed
- [ ] Valid HTML structure

### CSS
- [ ] Readable class names
- [ ] Mobile-first responsive design
- [ ] No hardcoded values (use variables)
- [ ] Consistent spacing and typography
- [ ] Cross-browser compatibility

### JavaScript
- [ ] No console errors
- [ ] Event delegation used appropriately
- [ ] Mobile-friendly interactions
- [ ] Graceful degradation
- [ ] Comments for complex logic

### Team Data
- [ ] Follows template format
- [ ] All required fields present
- [ ] Image files exist
- [ ] URLs are valid
- [ ] Data is accurate

## 🎯 Best Practices

### For AI Tools
1. **Always use semantic HTML** - Never use `<div>` for everything
2. **Follow naming conventions** - Be consistent with existing patterns
3. **Test responsiveness** - Mobile-first approach
4. **Document changes** - Add comments explaining complex logic
5. **Preserve existing functionality** - Don't break working features

### For Developers
1. **Read existing code** - Understand current patterns before making changes
2. **Use version control** - Track all changes
3. **Test thoroughly** - Verify on multiple devices and browsers
4. **Keep documentation updated** - Update README files when making changes
5. **Follow the team system** - Use the data management system for team updates

## 🔮 Future Considerations

### Scalability
- **Database integration** - For larger content management needs
- **API endpoints** - For dynamic content loading
- **Caching strategy** - For better performance
- **CDN integration** - For image delivery

### Maintenance
- **Automated testing** - Unit tests for critical functionality
- **Build process** - Automated CSS/JS minification
- **Deployment pipeline** - Automated deployment process
- **Monitoring** - Error tracking and performance monitoring

---

**Note for AI Tools**: This project prioritizes maintainability over complexity. Always choose the simpler, more readable solution over the clever one. The goal is to enable non-technical users to maintain the website easily.
