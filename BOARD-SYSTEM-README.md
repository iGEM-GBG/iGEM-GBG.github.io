# Board Member Data Management System

This system allows you to easily manage board member information for the iGEM Association page without editing HTML directly.

## 📁 File Structure

```
clean/
├── board-data/              # Board member data files
│   ├── README.txt           # Instructions and template
│   ├── board-member-sarah-johnson.txt
│   ├── board-member-alex-chen.txt
│   └── board-member-*.txt
├── images/                  # Board member images
│   ├── board-member-president.jpg
│   ├── board-member-vice-president.jpg
│   └── board-member-*.jpg
├── generate-association.js  # Generation script
├── update-association.sh    # Update script
└── the-association.html     # Generated association page
```

## 🚀 How to Use

### 1. Add a New Board Member

1. **Copy the template** from `board-data/README.txt`
2. **Fill in the information** for the board member
3. **Save as** `board-data/board-member-NAME.txt` (replace NAME with their name, use hyphens for spaces)
4. **Add board member image** to `images/` folder
5. **Run update script**: `./update-association.sh`

### 2. Update Existing Board Member

1. **Edit** the existing `board-data/board-member-NAME.txt` file
2. **Update image** in `images/` folder if needed
3. **Run update script**: `./update-association.sh`

### 3. Remove a Board Member

1. **Delete** the `board-data/board-member-NAME.txt` file
2. **Run update script**: `./update-association.sh`

## 📝 Data Format

Each board member file should follow this format:

```
BOARD MEMBER NAME: Sarah Johnson
BOARD MEMBER TITLE: President
BOARD MEMBER IMAGE: board-member-president.jpg
BOARD MEMBER BIO: Sarah is a former iGEM team member who now leads the association...
BOARD MEMBER EMAIL: sarah.johnson@example.com
BOARD MEMBER LINKEDIN: https://linkedin.com/in/sarahjohnson
BOARD MEMBER YEAR JOINED: 2023
BOARD MEMBER PREVIOUS TEAM: 2022 Team Member
```

### Required Fields (must be filled):
- `BOARD MEMBER NAME`: Full name of the board member
- `BOARD MEMBER TITLE`: Their position/title in the association
- `BOARD MEMBER IMAGE`: Image filename (must be in images/ folder)

### Optional Fields (can be omitted):
- `BOARD MEMBER BIO`: Brief description of their role and background (won't show if not provided)
- `BOARD MEMBER EMAIL`: Contact email address
- `BOARD MEMBER LINKEDIN`: LinkedIn profile URL
- `BOARD MEMBER YEAR JOINED`: Year they joined the association
- `BOARD MEMBER PREVIOUS TEAM`: Previous iGEM team they were part of
- `BOARD MEMBER IMAGE OFFSET`: Image positioning to fix cropping issues
- `BOARD MEMBER IMAGE ZOOM`: Image size adjustment to make people similar sizes

**Note**: Optional fields will only appear in the board member cards if they are provided. If you don't want to show a bio, contact information, or previous team details, simply omit those lines from your board member data file.

## 🖼️ Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 400x500px or similar portrait aspect ratio
- **Location**: Must be in `images/` folder
- **Naming**: Use descriptive names like `board-member-president.jpg`

## 📐 Image Offset Options

If board member photos are cropped incorrectly (missing forehead, etc.), you can adjust the positioning using the `BOARD MEMBER IMAGE OFFSET` field:

### Predefined Offsets:
- `top` - Shows the top portion of the image (default)
- `center` - Centers the image vertically
- `bottom` - Shows the bottom portion of the image

### Custom Offset:
- `custom:20%` - Custom vertical position (replace 20% with desired percentage)
- `custom:10px` - Custom vertical position in pixels
- `custom:-10%` - Negative percentage (positions above normal top)
- `custom:-20px` - Negative pixel value (positions above normal top)

### Examples:
```
# Show more of the top (good for photos where forehead is cut off)
BOARD MEMBER IMAGE OFFSET: top

# Center the image vertically
BOARD MEMBER IMAGE OFFSET: center

# Show more of the bottom
BOARD MEMBER IMAGE OFFSET: bottom

# Custom positioning (20% from top)
BOARD MEMBER IMAGE OFFSET: custom:20%

# Custom positioning (50 pixels from top)
BOARD MEMBER IMAGE OFFSET: custom:50px

# Negative positioning (above normal top - good for very cropped photos)
BOARD MEMBER IMAGE OFFSET: custom:-10%

# Negative positioning in pixels
BOARD MEMBER IMAGE OFFSET: custom:-20px
```

## 🔍 Image Zoom Options

If board member photos have different sizes (some people appear larger/smaller than others), you can adjust the zoom using the `BOARD MEMBER IMAGE ZOOM` field:

### Predefined Zoom Levels:
- `small` - Makes the image 80% of original size (0.8x scale)
- `medium` - Normal size (1.0x scale) - default
- `large` - Makes the image 120% of original size (1.2x scale)

### Custom Zoom:
- `custom:0.7` - Custom scale factor (70% of original size)
- `custom:1.5` - Custom scale factor (150% of original size)
- `custom:0.9` - Custom scale factor (90% of original size)

### Examples:
```
# Make person appear smaller (good for photos where person looks too large)
BOARD MEMBER IMAGE ZOOM: small

# Make person appear larger (good for photos where person looks too small)
BOARD MEMBER IMAGE ZOOM: large

# Custom sizing (90% of original size)
BOARD MEMBER IMAGE ZOOM: custom:0.9

# Custom sizing (110% of original size)
BOARD MEMBER IMAGE ZOOM: custom:1.1
```

### Combining Offset and Zoom:
You can use both offset and zoom together for fine-tuning:

```
BOARD MEMBER IMAGE OFFSET: custom:10%
BOARD MEMBER IMAGE ZOOM: custom:0.9
```

## 🔧 Scripts

### `generate-association.js`
Main script that reads board member data files and generates the HTML page.

**Usage:**
```bash
node generate-association.js
```

### `update-association.sh`
Simple wrapper script for easy updates.

**Usage:**
```bash
./update-association.sh
```

## 📊 Board Member Sorting

Board members are automatically sorted by title priority:
1. **President**
2. **Vice President**
3. **Treasurer**
4. **Secretary**
5. **Directors** (all director positions)
6. **Other titles** (alphabetically)

Within the same title priority, members are sorted alphabetically by name.

## 🎨 Display Features

### Board Member Cards Include:
- **Photo**: Professional headshot with hover effects
- **Name**: Prominently displayed
- **Title**: Position in the association
- **Bio**: Brief description of their role
- **Details**: Previous team and join year (if provided)
- **Contact**: Email and LinkedIn links (if provided)

### Responsive Design:
- **Desktop**: Multi-column grid layout
- **Tablet**: Two-column layout
- **Mobile**: Single-column layout

## 🔍 Troubleshooting

### Board Member Not Showing
- Check that the file is named correctly (`board-member-NAME.txt`)
- Verify all required fields are filled
- Ensure the image file exists in `images/` folder
- Run the generation script manually: `node generate-association.js`

### Images Not Loading
- Check that image files are in `images/` folder
- Verify filenames match exactly (case-sensitive)
- Check file permissions: `chmod 644 images/board-member-*.jpg`

### Sorting Issues
- Board members are sorted by title priority, then alphabetically
- Check that titles are spelled consistently
- Director positions are grouped together

## 📚 Examples

### Full Board Member Data:
```
BOARD MEMBER NAME: Sarah Johnson
BOARD MEMBER TITLE: President
BOARD MEMBER IMAGE: board-member-president.jpg
BOARD MEMBER IMAGE OFFSET: center
BOARD MEMBER IMAGE ZOOM: medium
BOARD MEMBER BIO: Sarah is a former iGEM team member who now leads the association...
BOARD MEMBER EMAIL: sarah.johnson@example.com
BOARD MEMBER LINKEDIN: https://linkedin.com/in/sarahjohnson
BOARD MEMBER YEAR JOINED: 2023
BOARD MEMBER PREVIOUS TEAM: 2022 Team Member
```

### Minimal Board Member Data:
```
BOARD MEMBER NAME: Alex Chen
BOARD MEMBER TITLE: Treasurer
BOARD MEMBER IMAGE: board-member-treasurer.jpg
```

### Board Member Without Bio:
```
BOARD MEMBER NAME: Maria Rodriguez
BOARD MEMBER TITLE: Secretary
BOARD MEMBER IMAGE: board-member-secretary.jpg
BOARD MEMBER EMAIL: maria.rodriguez@example.com
BOARD MEMBER YEAR JOINED: 2023
BOARD MEMBER PREVIOUS TEAM: 2021 Team Member
```

## 🎯 Best Practices

1. **Use consistent naming** for files and images
2. **Keep bios concise** but informative (2-3 sentences)
3. **Use professional photos** with good lighting
4. **Update information regularly** as board members change
5. **Test changes locally** before deploying

---

**Remember**: This system is designed to be simple and maintainable. Always use the data files and generation script rather than editing the HTML directly.
