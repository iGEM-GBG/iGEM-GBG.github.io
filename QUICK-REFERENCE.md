# Quick Reference Guide

## 👥 For Different User Types

### 🎯 Content Manager (Non-Technical)
**Goal**: Update website content without touching code

**What you can do**:
- ✅ Update team information using the team system
- ✅ Add new team data files
- ✅ Update contact information
- ✅ Add new images

**What you need**:
- Text editor (Notepad, TextEdit, VS Code)
- Basic file management skills
- Access to team data folder

**Quick Start**:
1. Copy `team-data/README.txt` → `team-data/team-YYYY.txt`
2. Fill in team information
3. Add team image to `images/` folder
4. Run `./update-teams.sh`
5. Visit website to see changes

**Common Tasks**:
```bash
# Add new team
cp team-data/README.txt team-data/team-2026.txt
# Edit team-2026.txt with actual data
cp /path/to/photo.jpg images/team-2026.jpg
./update-teams.sh

# Update existing team
# Edit team-data/team-2025.txt
./update-teams.sh
```

### 👨‍💻 Web Developer
**Goal**: Modify website design and functionality

**What you can do**:
- ✅ Modify HTML structure
- ✅ Update CSS styling
- ✅ Add JavaScript functionality
- ✅ Create new pages
- ✅ Modify the team generation system

**What you need**:
- Code editor (VS Code recommended)
- Basic HTML/CSS/JavaScript knowledge
- Node.js for local development

**Quick Start**:
1. `cd clean`
2. `node server.js`
3. Visit http://localhost:3001/
4. Edit files and refresh browser

**File Structure**:
```
clean/
├── *.html              # Page files
├── styles.css          # All styling
├── script.js           # JavaScript
├── images/             # All images
├── team-data/          # Team management
└── generate-teams.js   # Team page generator
```

**Common Tasks**:
```bash
# Start development server
node server.js

# Update team page
node generate-teams.js

# Test specific page
curl http://localhost:3001/page-name.html
```

### 🤖 AI Assistant
**Goal**: Help maintain and improve the website

**Key Principles**:
- Always use semantic HTML
- Follow existing naming conventions
- Test changes thoroughly
- Document complex functionality
- Preserve existing functionality

**Important Files**:
- `AI-DEVELOPER-GUIDE.md` - Detailed technical guide
- `TEAM-SYSTEM-README.md` - Team management system
- `styles.css` - CSS with comments
- `script.js` - JavaScript with comments

**Code Standards**:
```html
<!-- Good: Semantic HTML -->
<header class="site-header">
<nav class="main-navigation">
<section class="content-section">

<!-- Bad: Generic divs -->
<div class="DXsoRd YTv4We oNsfjf">
```

```css
/* Good: Readable class names */
.site-header { }
.main-navigation { }
.team-card { }

/* Bad: Obfuscated names */
.DXsoRd { }
.YTv4We { }
.oNsfjf { }
```

## 🚀 Common Tasks

### Adding a New Page
1. **Copy existing page** as template
2. **Update navigation** in all HTML files
3. **Add page-specific content**
4. **Test responsive design**

### Updating Team Information
1. **Edit team data file** in `team-data/`
2. **Add/update team image** in `images/`
3. **Run update script**: `./update-teams.sh`
4. **Verify changes** on website

### Changing Website Colors
1. **Edit `styles.css`**
2. **Find color variables** (search for `#1d422b`)
3. **Update color values**
4. **Test on all pages**

### Adding New Images
1. **Optimize image** for web use
2. **Use descriptive filename**
3. **Place in `images/` folder**
4. **Update HTML** to reference image

## 🔧 Troubleshooting

### Website Not Loading
```bash
# Check if server is running
ps aux | grep node

# Start server
cd clean
node server.js

# Check port availability
lsof -i :3001
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

### Images Not Showing
```bash
# Check file exists
ls -la images/filename.jpg

# Check file permissions
chmod 644 images/filename.jpg

# Verify HTML path
grep -r "filename.jpg" *.html
```

### CSS Not Applying
1. **Hard refresh** browser (Ctrl+F5)
2. **Check CSS syntax** for errors
3. **Verify class names** match HTML
4. **Check CSS specificity**

## 📞 Getting Help

### Documentation Files
- **`README.md`** - Project overview and setup
- **`AI-DEVELOPER-GUIDE.md`** - Technical guide for AI tools
- **`TEAM-SYSTEM-README.md`** - Team management system
- **`team-data/README.txt`** - Quick team data instructions

### Debug Commands
```bash
# Check server status
curl http://localhost:3001/

# Test specific page
curl http://localhost:3001/page-name.html

# Check team generation
node generate-teams.js

# View server logs
node server.js
```

### Contact Information
- **Email**: igem.cga@gmail.com
- **Website**: iGEM Chalmers Gothenburg Association

---

**Remember**: This website was rebuilt specifically to be maintainable. The original had obfuscated code that was impossible to modify. Always choose the simple, readable solution over the complex one.
