# Sponsor Data Management System

This system allows you to easily manage sponsor information for the iGEM website without editing HTML directly. All sponsors are displayed in a continuous slideshow to ensure equal treatment.

## 📁 File Structure

```
clean/
├── sponsor-data/           # Sponsor data files
│   ├── README.txt         # Instructions and template
│   ├── sponsor-company-name.txt
│   └── sponsor-*.txt
├── images/                # Sponsor logos/images
│   ├── sponsor-company.jpg
│   └── sponsor-*.jpg
├── generate-sponsors.js   # Generation script
├── update-sponsors.sh     # Update script
└── our-sponsors.html      # Generated sponsors page
```

## 🚀 How to Use

### 1. Add a New Sponsor

1. **Copy the template** from `sponsor-data/README.txt`
2. **Fill in the information** for the sponsor
3. **Save as** `sponsor-data/sponsor-NAME.txt` (replace NAME with sponsor name, use hyphens for spaces)
4. **Add sponsor logo/image** to `images/` folder
5. **Run update script**: `./update-sponsors.sh`

### 2. Update Existing Sponsor

1. **Edit** the existing `sponsor-data/sponsor-NAME.txt` file
2. **Update image** in `images/` folder if needed
3. **Run update script**: `./update-sponsors.sh`

### 3. Remove a Sponsor

1. **Delete** the `sponsor-data/sponsor-NAME.txt` file
2. **Run update script**: `./update-sponsors.sh`

## 📝 Data Format

Each sponsor file should follow this format:

```
SPONSOR NAME: Company Name
SPONSOR IMAGE: sponsor-company.jpg
SPONSOR DESCRIPTION: Brief description of how they support our teams.
```

### Required Fields (must be filled):
- `SPONSOR NAME`: Full name of the sponsor
- `SPONSOR IMAGE`: Image filename (must be in images/ folder)

### Optional Fields (can be omitted):
- `SPONSOR DESCRIPTION`: Brief description of the sponsor and how they support our teams (won't show if not provided)

**Note**: Optional fields will only appear in the sponsor cards if they are provided. If you don't want to show a description, simply omit that line from your sponsor data file.

## 🖼️ Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 400x200px or similar landscape aspect ratio for logos
- **Location**: Must be in `images/` folder
- **Naming**: Use descriptive names like `sponsor-company-name.jpg`

## 🔧 Scripts

### `generate-sponsors.js`
Main script that reads sponsor data files and generates the HTML page with slideshow.

**Usage:**
```bash
node generate-sponsors.js
```

### `update-sponsors.sh`
Simple wrapper script for easy updates.

**Usage:**
```bash
./update-sponsors.sh
```

## 🎨 Display Features

### Continuous Slideshow:
- **Equal Treatment**: All sponsors rotate continuously in a slideshow
- **No Ranking**: The continuous loop ensures no sponsor appears more important than others
- **Auto-Scroll**: Sponsors automatically scroll horizontally
- **Pause on Hover**: Users can pause the slideshow to read sponsor details
- **Seamless Loop**: Infinite scrolling with smooth transitions
- **Gradient Overlays**: Visual indication of continuous scrolling

### Sponsor Cards Include:
- **Logo**: Sponsor logo/image with proper sizing
- **Name**: Sponsor name prominently displayed
- **Description**: Brief description of their support (if provided)

### Responsive Design:
- **Desktop**: Multiple sponsors visible at once
- **Tablet**: Fewer sponsors visible, smooth scrolling
- **Mobile**: Optimized for smaller screens

## 🔍 Troubleshooting

### Sponsor Not Showing
- Check that the file is named correctly (`sponsor-NAME.txt`)
- Verify all required fields are filled
- Ensure the image file exists in `images/` folder
- Run the generation script manually: `node generate-sponsors.js`

### Images Not Loading
- Check that image files are in `images/` folder
- Verify filenames match exactly (case-sensitive)
- Check file permissions: `chmod 644 images/sponsor-*.jpg`

### Slideshow Not Working
- Check that JavaScript is enabled
- Verify the slideshow container exists in generated HTML
- Check browser console for errors
- Ensure at least 2 sponsors are in the data files

## 📚 Examples

### Full Sponsor Data:
```
SPONSOR NAME: Chalmers University of Technology
SPONSOR IMAGE: sponsor-chalmers.jpg
SPONSOR DESCRIPTION: Our home institution providing academic support and resources.
```

### Minimal Sponsor Data:
```
SPONSOR NAME: Industry Partner
SPONSOR IMAGE: sponsor-industry.jpg
```

### Sponsor Without Description:
```
SPONSOR NAME: Research Foundation
SPONSOR IMAGE: sponsor-foundation.jpg
```

## 🎯 Benefits

### For Content Managers:
- **Easy Updates**: No HTML knowledge required
- **Consistent Format**: Standardized data structure
- **Version Control**: Track changes to sponsor data
- **Bulk Updates**: Update multiple sponsors at once
- **Equal Treatment**: Slideshow ensures no ranking

### For Website Visitors:
- **Professional Look**: Clean, organized sponsor display
- **Equal Visibility**: All sponsors get equal time in the slideshow
- **Easy to View**: Continuous scrolling shows all sponsors
- **Interactive**: Pause on hover to read details

### For Developers:
- **Maintainable Code**: Centralized sponsor management
- **Extensible System**: Easy to add new sponsors
- **Consistent Architecture**: Follows same patterns as other systems
- **Well Documented**: Clear instructions and examples

## 🎯 Best Practices

1. **Use consistent naming** for files and images
2. **Keep descriptions concise** but informative (1-2 sentences)
3. **Use high-quality logos** with good contrast
4. **Update information regularly** as sponsors change
5. **Test changes locally** before deploying

## 💡 Equal Treatment Philosophy

The slideshow system is designed specifically to treat all sponsors equally:
- **No Ranking**: Continuous loop means no sponsor is "first" or "last"
- **Equal Visibility**: All sponsors rotate through the display
- **Randomized Order**: File order doesn't affect visual importance
- **Consistent Display**: All sponsors appear in the same format

---

**Remember**: This system is designed to be simple and maintainable. Always use the data files and generation script rather than editing the HTML directly. The slideshow ensures all sponsors are treated equally.

