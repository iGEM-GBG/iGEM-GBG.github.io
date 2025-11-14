# Frequently Asked Questions (FAQ)

## 🤔 General Questions

### Q: What is this website for?
**A**: This is the official website for the iGEM Chalmers Gothenburg Association, showcasing the team's synthetic biology projects, members, and activities.

### Q: Why was the website rebuilt?
**A**: The original website was built with Google Sites and had obfuscated HTML/CSS code that was impossible to maintain. We rebuilt it with clean, readable code that anyone can understand and modify.

### Q: What's the difference between localhost:3000 and localhost:3001?
**A**: 
- **localhost:3000**: Original obfuscated website (for reference only)
- **localhost:3001**: Clean, maintainable website (this is what you should use)

### Q: Can I edit the website without knowing code?
**A**: Yes! You can update team information, add new teams, and modify content using the team management system without touching any code.

## 🛠️ Technical Questions

### Q: How do I start the development server?
**A**: 
```bash
cd clean
node server.js
```
Then visit http://localhost:3001/

### Q: What if I don't have Node.js installed?
**A**: Download and install Node.js from https://nodejs.org/ (version 12 or higher recommended).

### Q: Can I use this website without a server?
**A**: Yes, you can open the HTML files directly in a browser, but some features (like the team page generation) require Node.js.

### Q: How do I deploy this to a real web server?
**A**: Upload all files to your web server and configure it to serve static files. The website doesn't require a database or special server configuration.

## 👥 Content Management Questions

### Q: Can I skip the bio/description for board members?
**A**: Yes! The board member bio is now optional. You can create board member cards with just:
- **BOARD MEMBER NAME**: Full name
- **BOARD MEMBER TITLE**: Position in association  
- **BOARD MEMBER IMAGE**: Photo filename

If you don't include a bio, the card will show just the name and title without any description.

### Q: How do I add a new board member?
**A**: 
1. Copy `board-data/README.txt` to `board-data/board-member-NAME.txt`
2. Fill in the board member information
3. Add a board member image to the `images/` folder
4. Run `./update-association.sh`

### Q: What format should board member data be in?
**A**: Use the template format with colons separating fields. Some fields are required, others are optional:

**Required fields (must be filled):**
```
BOARD MEMBER NAME: Sarah Johnson
BOARD MEMBER TITLE: President
BOARD MEMBER IMAGE: board-member-president.jpg
BOARD MEMBER BIO: Brief description of their role and background...
```

**Optional fields (can be omitted):**
```
BOARD MEMBER EMAIL: sarah.johnson@example.com
BOARD MEMBER LINKEDIN: https://linkedin.com/in/sarahjohnson
BOARD MEMBER YEAR JOINED: 2023
BOARD MEMBER PREVIOUS TEAM: 2022 Team Member
```

If you don't want to show contact information or previous team details, simply omit those lines from your board member data file.

### Q: How do I update contact information across all pages?
**A**: 
1. Edit `contact-data/contact-info.txt`
2. Change any contact details (emails, social media, legal info)
3. Run `./update-contact.sh`
4. All pages will automatically use the new contact information

### Q: How do I add the legal information section?
**A**: The legal information section is automatically included on the contact page. It includes:
- Organization number and name
- Legal address and domicile
- Association founding date
- Legal form and domain information

The section is collapsible - visitors can click to show/hide the legal details.

### Q: How do I add a new team?
**A**: 
1. Copy `team-data/README.txt` to `team-data/team-YYYY.txt`
2. Fill in the team information
3. Add a team image to the `images/` folder
4. Run `./update-teams.sh`

### Q: What format should team data be in?
**A**: Use the template format with colons separating fields. Some fields are required, others are optional:

**Required fields (must be filled):**
```
TEAM YEAR: 2025
TEAM NAME: 2025 Team
PROJECT TITLE: Project Title
PROJECT DESCRIPTION: Detailed description...
TEAM IMAGE: team-2025.jpg
TEAM WIKI URL: https://2025.igem.wiki/chalmers-gothenburg/
```

**Optional fields (can be omitted):**
```
TEAM MEMBERS: Member 1, Member 2, Member 3
PROJECT CATEGORY: Category
AWARDS: Award 1, Award 2
```

If you don't want to show team members or awards, simply omit those lines from your team data file.

### Q: Can I skip some fields if I don't have that information?
**A**: Yes! The following fields are optional and can be omitted:
- **TEAM MEMBERS**: If you don't want to list team members
- **PROJECT CATEGORY**: If the category isn't clear or relevant
- **AWARDS**: If the team didn't win any awards

Just don't include those lines in your team data file, and they won't appear on the website.

### Q: Why isn't my team showing up on the website?
**A**: Check that:
- The file is named correctly (`team-YYYY.txt`)
- The data format follows the template
- You ran the update script (`./update-teams.sh`)
- The team image exists in the `images/` folder

### Q: Can I edit the team page HTML directly?
**A**: No, the team page is auto-generated. Always edit the team data files and run the update script.

## 🎨 Design Questions

### Q: How do I change the website colors?
**A**: Edit `styles.css` and look for color values like `#1d422b`. Update these values to change the color scheme.

### Q: How do I add a new page?
**A**: 
1. Copy an existing HTML file as a template
2. Update the navigation in all HTML files
3. Add your content
4. Test the new page

### Q: How do I make the website responsive?
**A**: The website is already responsive! It uses mobile-first CSS with media queries. Test on different screen sizes to see how it adapts.

### Q: Can I use a different font?
**A**: Yes, edit `styles.css` and change the font-family declarations. Make sure to include the font files or use web fonts.

## 🖼️ Image Questions

### Q: What image formats are supported?
**A**: JPG, PNG, and WebP are all supported. JPG is recommended for photos, PNG for graphics with transparency.

### Q: How do I optimize images for the web?
**A**: Use tools like ImageOptim, TinyPNG, or online compressors to reduce file sizes while maintaining quality.

### Q: Why are my images not loading?
**A**: Check that:
- Images are in the `images/` folder
- Filenames match exactly (case-sensitive)
- File permissions are correct (`chmod 644 images/*`)

### Q: What size should images be?
**A**: 
- **Team images**: 400x300 pixels recommended
- **Hero images**: 1200x600 pixels recommended
- **Logo**: 200x100 pixels recommended
- **Sponsor logos**: 300x150 pixels recommended

## 🔧 Maintenance Questions

### Q: How often should I update the website?
**A**: Update team information annually, sponsor information as needed, and contact information when it changes.

### Q: How do I backup the website?
**A**: Copy the entire `clean/` folder to a backup location. The website is just files, so a simple copy is sufficient.

### Q: What if I break something?
**A**: 
1. Check the troubleshooting guide
2. Restore from backup if available
3. Ask for help with specific error messages

### Q: How do I test changes before going live?
**A**: Use the local development server (`node server.js`) to test changes locally before deploying to the live server.

## 🚀 Deployment Questions

### Q: Can I host this on GitHub Pages?
**A**: Yes, but you'll need to run the team generation script locally and commit the generated HTML files.

### Q: What web servers support this website?
**A**: Any web server that can serve static files: Apache, Nginx, IIS, or even simple file hosting services.

### Q: Do I need a database?
**A**: No, this is a static website. All content is stored in HTML files and text files.

### Q: How do I set up HTTPS?
**A**: Configure SSL certificates on your web server. This is a server configuration issue, not a website code issue.

## 🐛 Problem-Solving Questions

### Q: The website looks broken on mobile
**A**: 
1. Hard refresh the browser (Ctrl+F5)
2. Check if CSS is loading properly
3. Test on actual mobile device, not just browser resize
4. Check browser console for errors

### Q: Links aren't working
**A**: 
1. Check if target files exist
2. Verify link URLs are correct
3. Check for typos in filenames
4. Ensure server is running

### Q: Team page is empty
**A**: 
1. Check if team data files exist in `team-data/`
2. Verify data format follows template
3. Run the generation script manually
4. Check for errors in console output

### Q: Images are missing
**A**: 
1. Check if image files exist in `images/` folder
2. Verify HTML references match filenames exactly
3. Check file permissions
4. Ensure images are optimized for web

## 📚 Learning Questions

### Q: I want to learn web development. Where do I start?
**A**: Start with HTML basics, then CSS, then JavaScript. This website is a great example of clean, semantic code.

### Q: How can I contribute to this project?
**A**: 
1. Read the documentation thoroughly
2. Test changes locally first
3. Follow the coding standards
4. Update documentation when making changes

### Q: What's the best way to understand this codebase?
**A**: 
1. Start with `README.md` for overview
2. Read `AI-DEVELOPER-GUIDE.md` for technical details
3. Look at the HTML structure
4. Examine the CSS organization
5. Study the JavaScript functionality

### Q: Can I use this code for my own project?
**A**: Yes, this code is designed to be clean and reusable. Feel free to adapt it for your own projects.

## 🆘 Emergency Questions

### Q: The website is completely broken!
**A**: 
1. Check if server is running
2. Restore from backup
3. Check file permissions
4. Contact support with error details

### Q: I accidentally deleted important files
**A**: 
1. Check if you have a backup
2. Restore from version control if available
3. Recreate files using documentation as guide
4. Contact support for help

### Q: The website was hacked!
**A**: 
1. Take the website offline immediately
2. Restore from clean backup
3. Check file permissions
4. Update passwords and security settings
5. Contact your hosting provider

---

**Still have questions?** Check the troubleshooting guide or contact igem.cga@gmail.com with specific details about your issue.
