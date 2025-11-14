# iGEM Chalmers Gothenburg Association Website

## 📋 Project Overview

This is a clean, maintainable website for the iGEM Chalmers Gothenburg Association, rebuilt from an obfuscated Google Sites export. The website features a modern, responsive design with easy-to-maintain code structure.

### 🎯 Key Features
- **Clean HTML Structure**: Semantic elements with readable class names
- **Responsive Design**: Mobile-first approach with modern CSS
- **Interactive Components**: Hover effects, mobile menu, team cards
- **Easy Maintenance**: No obfuscated code or cryptic class names
- **Team Management System**: Automated team data management
- **Image Organization**: Descriptive filenames and organized structure

## 🏗️ Architecture

### File Structure
```
clean/
├── index.html              # Homepage
├── about-igem.html         # About iGEM page
├── the-association.html    # Association information (auto-generated)
├── our-previous-teams.html # Teams page (auto-generated)
├── our-sponsors.html       # Sponsors page
├── contact-us.html         # Contact page
├── styles.css              # Main stylesheet
├── script.js               # JavaScript functionality
├── server.js               # Local development server
├── images/                 # All website images
│   ├── igem-cga-logo.jpg
│   ├── hero-background.jpg
│   ├── about-igem-feature.jpg
│   ├── team-*.jpg
│   └── board-member-*.jpg
├── team-data/              # Team management system
│   ├── README.txt
│   ├── team-*.txt
│   └── team-template.json
├── board-data/             # Board member management system
│   ├── README.txt
│   └── board-member-*.txt
├── contact-data/           # Contact information management
│   └── contact-info.txt
├── generate-teams.js        # Team page generator
├── generate-association.js # Association page generator
├── update-teams.sh         # Team update script
├── update-association.sh   # Association update script
├── update-contact.js       # Contact update script
├── update-contact.sh       # Contact update wrapper
├── TEAM-SYSTEM-README.md   # Team system documentation
├── BOARD-SYSTEM-README.md  # Board member system documentation
└── CONTACT-SYSTEM-README.md # Contact system documentation
```

### Technology Stack
- **HTML5**: Semantic markup with accessibility features
- **CSS3**: Modern CSS with Flexbox, Grid, and animations
- **JavaScript**: Vanilla JS for interactivity
- **Node.js**: Simple HTTP server for local development
- **File-based CMS**: Team data management system

## 🎨 Design System

### Color Palette
- **Primary Green**: `#1d422b` (Headers, buttons, links)
- **Light Green**: `#2a5a3a` (Hover states)
- **Background**: `#ffffff` (Main background)
- **Light Background**: `#f8f9fa` (Section backgrounds)
- **Text**: `#333333` (Main text)
- **White**: `#ffffff` (Text on dark backgrounds)

### Typography
- **Primary Font**: Roboto (Body text)
- **Secondary Font**: Lato (Headings)
- **Font Weights**: 400 (Regular), 500 (Medium), 700 (Bold)

### CSS Architecture
- **Mobile-first**: Responsive design starting from mobile
- **Component-based**: Reusable CSS components
- **Semantic naming**: Clear, descriptive class names
- **Organized sections**: Logical grouping of styles

## 🚀 Getting Started

### Prerequisites
- Node.js (version 12 or higher)
- Basic knowledge of HTML/CSS/JavaScript
- Text editor (VS Code recommended)

### Local Development Setup
1. **Clone/Navigate to project directory**
2. **Start the development server**:
   ```bash
   cd clean
   node server.js
   ```
3. **Visit the website**: http://localhost:3001/

### Production Deployment
1. **Upload files** to web server
2. **Configure web server** to serve static files
3. **Update image paths** if needed
4. **Test all functionality**

## 📝 Content Management

### Adding New Pages
1. **Copy existing page** as template
2. **Update navigation** in all HTML files
3. **Add page-specific content**
4. **Test responsive design**

### Updating Team Information
See `TEAM-SYSTEM-README.md` for detailed instructions on the team management system.

### Updating Board Member Information
See `BOARD-SYSTEM-README.md` for detailed instructions on the board member management system.

### Updating Contact Information
See `CONTACT-SYSTEM-README.md` for detailed instructions on the centralized contact management system.

### Image Management
- **Location**: All images in `images/` folder
- **Naming**: Use descriptive names (e.g., `hero-background.jpg`)
- **Formats**: JPG, PNG, WebP supported
- **Optimization**: Compress images for web use

## 🔧 Maintenance Tasks

### Regular Updates
- **Team data**: Update team information annually
- **Sponsor information**: Update sponsor logos and details
- **Contact information**: Verify email addresses and links
- **Image optimization**: Compress new images

### Technical Maintenance
- **Browser testing**: Test on major browsers
- **Mobile testing**: Verify responsive design
- **Performance**: Monitor page load times
- **Security**: Keep dependencies updated

## 🐛 Troubleshooting

### Common Issues

#### Images Not Loading
- **Check file paths**: Ensure images are in `images/` folder
- **Verify filenames**: Match exactly (case-sensitive)
- **Check file permissions**: Ensure files are readable

#### Team Page Not Updating
- **Run update script**: `./update-teams.sh`
- **Check data format**: Verify team data files follow template
- **Check file naming**: Must be `team-YYYY.txt`

#### Navigation Not Working
- **Check JavaScript**: Ensure `script.js` is loaded
- **Verify HTML structure**: Check navigation markup
- **Test mobile menu**: Verify hamburger menu functionality

#### Styling Issues
- **Clear browser cache**: Hard refresh (Ctrl+F5)
- **Check CSS syntax**: Validate CSS for errors
- **Verify class names**: Ensure HTML classes match CSS

### Debug Mode
```bash
# Enable debug logging
node generate-teams.js 2>&1 | tee debug.log

# Check server logs
node server.js
```

## 📚 Documentation Files

- **`README.md`**: This file - project overview and setup
- **`TEAM-SYSTEM-README.md`**: Team management system documentation
- **`team-data/README.txt`**: Quick team data instructions
- **`styles.css`**: CSS with comments explaining sections
- **`script.js`**: JavaScript with comments explaining functionality

## 🤝 Contributing

### For Developers
1. **Follow naming conventions**: Use semantic class names
2. **Add comments**: Document complex functionality
3. **Test changes**: Verify on multiple devices
4. **Update documentation**: Keep docs current

### For Content Managers
1. **Use team system**: Don't edit HTML directly
2. **Follow image guidelines**: Use descriptive names
3. **Test updates**: Verify changes work correctly
4. **Backup data**: Keep copies of important files

## 🔮 Future Enhancements

### Potential Improvements
- **CMS Integration**: Database-driven content management
- **Blog System**: News and updates section
- **Member Portal**: Login system for members
- **Event Calendar**: Upcoming events and deadlines
- **Search Functionality**: Site-wide search
- **Analytics**: Visitor tracking and insights

### Technical Debt
- **Image Optimization**: Implement automatic compression
- **CSS Framework**: Consider using CSS framework
- **Build Process**: Add automated build pipeline
- **Testing**: Implement automated testing

## 📞 Support

### Getting Help
- **Documentation**: Check all README files first
- **Team System**: See `TEAM-SYSTEM-README.md`
- **Code Comments**: Check JavaScript and CSS comments
- **Debug Logs**: Use debug mode for troubleshooting

### Contact Information
- **Website**: iGEM Chalmers Gothenburg Association
- **Email**: igem.cga@gmail.com
- **Repository**: [Add repository URL if available]

---

**Last Updated**: [Current Date]
**Version**: 1.0
**Maintainer**: [Your Name/Team]