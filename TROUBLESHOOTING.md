# Troubleshooting Guide

## 🚨 Common Issues and Solutions

### Server Issues

#### Server Won't Start
**Symptoms**: `node server.js` fails or shows errors

**Solutions**:
```bash
# Check if port is already in use
lsof -i :3001

# Kill existing process
pkill -f "node server.js"

# Check Node.js version
node --version  # Should be 12+

# Check file permissions
ls -la server.js
chmod +x server.js
```

#### Port Already in Use
**Error**: `EADDRINUSE: address already in use :::3001`

**Solutions**:
```bash
# Find process using port
lsof -i :3001

# Kill the process
kill -9 [PID]

# Or use different port
# Edit server.js and change PORT = 3002
```

#### Server Starts But Website Won't Load
**Symptoms**: Server running but browser shows "This site can't be reached"

**Solutions**:
```bash
# Check if server is actually running
curl http://localhost:3001/

# Check firewall settings
# Try different browser
# Clear browser cache
```

### Team Management Issues

#### "No team data files found"
**Error**: `❌ No team data files found in ./team-data`

**Solutions**:
```bash
# Check if team-data directory exists
ls -la team-data/

# Check file naming
ls -la team-data/team-*.txt

# Files must be named: team-YYYY.txt
# Example: team-2025.txt, team-2024.txt
```

#### Team Page Not Updating
**Symptoms**: Changes to team data don't appear on website

**Solutions**:
```bash
# Run generation script manually
node generate-teams.js

# Check for errors
node generate-teams.js 2>&1 | tee debug.log

# Verify data format
cat team-data/team-2025.txt

# Check file permissions
chmod 644 team-data/team-*.txt
```

#### Invalid Data Format
**Error**: Team data not parsing correctly

**Solutions**:
```bash
# Check data format - must have colons
grep ":" team-data/team-2025.txt

# Required format:
# TEAM YEAR: 2025
# TEAM NAME: 2025 Team
# PROJECT TITLE: Project Title
# etc.

# Check for typos in field names
```

### Image Issues

#### Images Not Loading
**Symptoms**: Broken image icons or missing images

**Solutions**:
```bash
# Check if image file exists
ls -la images/filename.jpg

# Check file permissions
chmod 644 images/filename.jpg

# Verify HTML path
grep -r "filename.jpg" *.html

# Check case sensitivity
# filename.jpg ≠ Filename.jpg
```

#### Wrong Images Showing
**Symptoms**: Correct filename but wrong image

**Solutions**:
```bash
# Check if multiple files with similar names
ls -la images/team-2025*

# Verify correct file is being referenced
# Update team data file with correct filename
```

### CSS/Styling Issues

#### Styles Not Applying
**Symptoms**: Website looks unstyled or broken

**Solutions**:
```bash
# Hard refresh browser
# Ctrl+F5 (Windows) or Cmd+Shift+R (Mac)

# Check CSS syntax
# Use browser dev tools to validate

# Verify CSS file is loading
curl http://localhost:3001/styles.css

# Check for CSS errors in browser console
```

#### Mobile Menu Not Working
**Symptoms**: Hamburger menu doesn't open on mobile

**Solutions**:
```bash
# Check JavaScript is loading
curl http://localhost:3001/script.js

# Check browser console for errors
# Verify HTML structure matches JavaScript selectors

# Test on actual mobile device, not just browser resize
```

#### Layout Broken on Mobile
**Symptoms**: Website doesn't look good on mobile devices

**Solutions**:
```bash
# Check viewport meta tag
grep "viewport" *.html

# Test responsive design
# Use browser dev tools mobile view
# Check CSS media queries
```

### Navigation Issues

#### Links Not Working
**Symptoms**: Clicking navigation links doesn't work

**Solutions**:
```bash
# Check if target files exist
ls -la about-igem.html
ls -la contact-us.html

# Verify link URLs
grep -r "href=" *.html

# Check for typos in filenames
```

#### Active Page Not Highlighted
**Symptoms**: Current page not highlighted in navigation

**Solutions**:
```bash
# Check for "active" class in HTML
grep -r "active" *.html

# Verify each page has correct active class
# Example: <a href="about-igem.html" class="nav-link active">
```

## 🔍 Debug Commands

### General Debugging
```bash
# Check server status
curl -I http://localhost:3001/

# Test specific page
curl http://localhost:3001/about-igem.html

# Check file permissions
ls -la *.html *.css *.js

# Verify all files exist
find . -name "*.html" -o -name "*.css" -o -name "*.js"
```

### Team System Debugging
```bash
# Check team data files
ls -la team-data/

# Validate data format
head -5 team-data/team-2025.txt

# Test generation script
node generate-teams.js

# Check generated HTML
grep -A 5 -B 5 "team-card" our-previous-teams.html
```

### Image Debugging
```bash
# List all images
ls -la images/

# Check image file sizes
du -h images/*

# Verify image references
grep -r "images/" *.html

# Test image loading
curl -I http://localhost:3001/images/igem-cga-logo.jpg
```

## 🛠️ Advanced Troubleshooting

### Performance Issues
```bash
# Check file sizes
du -sh *

# Optimize images
# Use tools like ImageOptim or TinyPNG

# Check for large files
find . -size +1M -type f
```

### Browser Compatibility
```bash
# Test on different browsers
# Chrome, Firefox, Safari, Edge

# Check CSS compatibility
# Use caniuse.com for CSS features

# Test JavaScript features
# Check browser console for errors
```

### Security Issues
```bash
# Check file permissions
find . -type f -perm 777

# Secure file permissions
chmod 644 *.html *.css *.js
chmod 755 images/

# Check for sensitive data
grep -r "password\|secret\|key" .
```

## 📋 Pre-Deployment Checklist

### Before Going Live
- [ ] All pages load correctly
- [ ] Images display properly
- [ ] Navigation works on all pages
- [ ] Mobile menu functions
- [ ] Team page updates correctly
- [ ] Contact forms work (if applicable)
- [ ] All links are valid
- [ ] Website is responsive
- [ ] No console errors
- [ ] Images are optimized
- [ ] File permissions are correct

### Testing Checklist
- [ ] Test on desktop browsers
- [ ] Test on mobile devices
- [ ] Test team data updates
- [ ] Test image uploads
- [ ] Test navigation
- [ ] Test contact forms
- [ ] Test all external links

## 🆘 Emergency Procedures

### Website Completely Broken
1. **Check server status**: `ps aux | grep node`
2. **Restart server**: `pkill -f "node server.js" && node server.js`
3. **Check file permissions**: `ls -la`
4. **Restore from backup** if available

### Team Page Completely Broken
1. **Check team data files**: `ls -la team-data/`
2. **Run generation script**: `node generate-teams.js`
3. **Check for errors**: Look at console output
4. **Restore from backup** if available

### Images All Missing
1. **Check images directory**: `ls -la images/`
2. **Check file permissions**: `chmod 644 images/*`
3. **Verify HTML references**: `grep -r "images/" *.html`
4. **Restore images from backup** if available

## 📞 Getting Additional Help

### When to Ask for Help
- Server won't start after trying all solutions
- Team page generation fails with errors
- Website works locally but not on server
- Security concerns or suspicious activity
- Need to add complex new features

### Information to Provide
- **Error messages** (exact text)
- **Steps taken** before the problem
- **Browser and version** being used
- **Operating system** (Windows, Mac, Linux)
- **Node.js version**: `node --version`
- **Screenshots** if applicable

### Contact Information
- **Email**: igem.cga@gmail.com
- **Include**: Error messages, steps taken, system info

---

**Remember**: Most issues can be resolved by checking file permissions, verifying file paths, and ensuring the server is running properly. Always start with the basic checks before moving to more complex solutions.
