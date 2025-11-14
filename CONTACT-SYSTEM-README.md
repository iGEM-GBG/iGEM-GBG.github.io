# Contact Information Management System

This system allows you to centrally manage all contact information across the website. Update one file to change contact details on all pages.

## 📁 File Structure

```
clean/
├── contact-data/            # Contact information data
│   └── contact-info.txt     # Central contact data file
├── update-contact.js        # Contact update script
├── update-contact.sh        # Contact update wrapper script
├── contact-us.html          # Generated contact page
└── All other HTML pages     # Updated with contact info
```

## 🚀 How to Use

### 1. Update Contact Information

1. **Edit** `contact-data/contact-info.txt`
2. **Change** any contact details (emails, social media, legal info)
3. **Run update script**: `./update-contact.sh`
4. **All pages** will automatically use the new contact information

### 2. Add New Contact Methods

1. **Add new fields** to `contact-data/contact-info.txt`
2. **Update** `update-contact.js` to handle new fields
3. **Run update script**: `./update-contact.sh`

## 📝 Data Format

The `contact-data/contact-info.txt` file contains all contact information:

```
ASSOCIATION EMAIL: igem.cga@gmail.com
CURRENT TEAM EMAIL: igemgothenburg@gmail.com
LEGAL EMAIL: associationigem@gmail.com

SOCIAL MEDIA LINKS:
INSTAGRAM: https://instagram.com/igemgothenburg
FACEBOOK: https://facebook.com/igemgothenburg
LINKEDIN: https://linkedin.com/company/igem-gothenburg

FORMS:
TEAM SIGNUP FORM: https://forms.gle/team-signup-form
ASSOCIATION MEMBER FORM: https://forms.gle/association-member-form

LEGAL INFORMATION:
ORG NUMBER: 802541-3876
ORG NAME: IGEM CHALMERS-GOTHENBURG ASSOCIATION
ADDRESS: c/o BIOLOGY AND BIOLOGICAL ENGINEERING, Kemivägen 10, 412 96 Gothenburg
DOMAIN: igem-cga.com
LEGAL FORM: Non-profit association
LEGAL DOMICILE: Göteborg, Västra Götalands län
ASSOCIATION FOUNDED: 2022-11-18
```

## 🎯 What Gets Updated

### All Pages (Footer):
- **Association Email**: Appears in footer of every page

### Contact Page Only:
- **Association Email**: For general inquiries
- **Current Team Email**: For team-related questions
- **Social Media Links**: Instagram, Facebook, LinkedIn buttons
- **Forms**: Team signup and association member forms
- **Legal Information**: Collapsible section with all legal details

## 🔧 Scripts

### `update-contact.js`
Main script that reads contact data and updates all HTML pages.

**Usage:**
```bash
node update-contact.js
```

### `update-contact.sh`
Simple wrapper script for easy updates.

**Usage:**
```bash
./update-contact.sh
```

## 📊 Contact Page Features

### Contact Methods:
- **Association Email**: For general inquiries
- **Current Team Email**: For team-related questions
- **Social Media**: Styled buttons for Instagram, Facebook, LinkedIn

### Legal Information:
- **Collapsible Section**: Click to show/hide legal details
- **Complete Legal Info**: Org number, address, legal form, etc.
- **Professional Layout**: Clean, organized presentation

### Forms:
- **Team Signup Form**: Link to team application
- **Association Member Form**: Link to association membership

## 🎨 Design Features

### Contact Methods:
- **Highlighted Boxes**: Each contact method in its own styled box
- **Clickable Emails**: Direct mailto links
- **Hover Effects**: Visual feedback on interactive elements

### Social Media Links:
- **Brand Colors**: Instagram (pink), Facebook (blue), LinkedIn (blue)
- **Hover Effects**: Buttons lift up on hover
- **Responsive**: Stack vertically on mobile

### Legal Information:
- **Collapsible Design**: Clean toggle button
- **Professional Layout**: Organized legal details
- **Easy Access**: One click to show/hide

## 🔍 Troubleshooting

### Contact Info Not Updating
- Check that `contact-data/contact-info.txt` exists
- Verify the file format follows the template
- Run the update script manually: `node update-contact.js`

### Legal Section Not Working
- Check that JavaScript is enabled
- Verify the toggle function is included in the page
- Check browser console for errors

### Social Media Links Not Working
- Verify URLs are complete and valid
- Check that links open in new tabs
- Test each social media platform

## 📚 Examples

### Changing Association Email:
1. Edit `contact-data/contact-info.txt`
2. Change `ASSOCIATION EMAIL: new-email@example.com`
3. Run `./update-contact.sh`
4. All pages now show the new email

### Adding New Social Media:
1. Add `TWITTER: https://twitter.com/igemgothenburg` to contact-info.txt
2. Update `update-contact.js` to handle Twitter
3. Run `./update-contact.sh`
4. Twitter link appears on contact page

### Updating Legal Information:
1. Edit legal fields in `contact-data/contact-info.txt`
2. Run `./update-contact.sh`
3. Legal section updates automatically

## 🎯 Benefits

### For Content Managers:
- **Single Source**: Update contact info in one place
- **Automatic Updates**: All pages update simultaneously
- **No HTML Knowledge**: Simple text file editing
- **Consistent Information**: No risk of outdated contact details

### For Website Visitors:
- **Professional Look**: Clean, organized contact page
- **Easy Access**: Clear contact methods and social media
- **Complete Information**: All legal details available
- **Mobile Friendly**: Works on all devices

### For Developers:
- **Maintainable Code**: Centralized contact management
- **Extensible System**: Easy to add new contact methods
- **Consistent Architecture**: Follows same patterns as other systems
- **Well Documented**: Clear instructions and examples

## 🚀 Future Enhancements

### Potential Additions:
- **Phone Numbers**: Add contact phone numbers
- **Office Hours**: Include business hours
- **Location Map**: Add office location with map
- **Contact Form**: Built-in contact form
- **Newsletter Signup**: Email subscription form

---

**Remember**: Always use the contact data file and update script rather than editing HTML directly. This ensures all pages stay synchronized with the latest contact information.
