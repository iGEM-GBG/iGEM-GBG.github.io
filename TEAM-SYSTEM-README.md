# Team Data Management System

This system allows you to easily manage team information for the iGEM website without editing HTML directly.

## 📁 File Structure

```
clean/
├── team-data/           # Team data files
│   ├── README.txt       # Instructions and template
│   ├── team-2025.txt    # 2025 team data
│   ├── team-2024.txt    # 2024 team data
│   └── team-2023.txt    # 2023 team data
├── images/              # Team images
│   ├── team-2025.jpg
│   ├── team-2024-project.jpg
│   └── team-2023-project.jpg
├── generate-teams.js    # Generation script
├── update-teams.sh      # Update script
└── our-previous-teams.html  # Generated teams page
```

## 🚀 How to Use

### 1. Add a New Team

1. **Copy the template** from `team-data/README.txt`
2. **Fill in the information** for your team
3. **Save as** `team-data/team-YYYY.txt` (replace YYYY with the year)
4. **Add team image** to `images/` folder
5. **Run update script**: `./update-teams.sh`

### 2. Update Existing Team

1. **Edit** the existing `team-data/team-YYYY.txt` file
2. **Update image** in `images/` folder if needed
3. **Run update script**: `./update-teams.sh`

### 3. Remove a Team

1. **Delete** the `team-data/team-YYYY.txt` file
2. **Run update script**: `./update-teams.sh`

## 📝 Data Format

Each team file should follow this format:

```
TEAM YEAR: 2025
TEAM NAME: 2025 Team
PROJECT TITLE: Sustainable Protein Production
PROJECT DESCRIPTION: Detailed description of the project...
TEAM IMAGE: team-2025.jpg
TEAM WIKI URL: https://2025.igem.wiki/chalmers-gothenburg/
TEAM MEMBERS: Alice Johnson, Bob Smith, Carol Davis
PROJECT CATEGORY: Food & Nutrition
AWARDS: Gold Medal, Best Food & Nutrition Project
```

### Required Fields (must be filled):
- `TEAM YEAR`: The year of the competition
- `TEAM NAME`: Display name for the team
- `PROJECT TITLE`: Short title for the project
- `PROJECT DESCRIPTION`: Detailed description (2-3 sentences)
- `TEAM IMAGE`: Image filename (must be in images/ folder)
- `TEAM WIKI URL`: Link to team's iGEM wiki page

### Optional Fields (can be omitted):
- `TEAM MEMBERS`: List of team members (won't show if not provided)
- `PROJECT CATEGORY`: Project category (e.g., Environment, Food & Nutrition)
- `AWARDS`: Awards received (won't show if not provided)

**Note**: Optional fields will only appear in the team cards if they are provided. If you don't want to show team members or awards, simply omit those lines from your team data file.

## 🖼️ Image Requirements

- **Format**: JPG, PNG, or WebP
- **Size**: Recommended 400x300px or similar aspect ratio
- **Location**: Must be in `images/` folder
- **Naming**: Use descriptive names like `team-2025.jpg`

## 🔧 Scripts

### `generate-teams.js`
Main script that reads team data files and generates the HTML page.

**Usage:**
```bash
node generate-teams.js
```

### `update-teams.sh`
Simple wrapper script for easy updates.

**Usage:**
```bash
./update-teams.sh
```

## 🎯 Features

- **Automatic Sorting**: Teams are sorted by year (newest first)
- **Interactive Cards**: Hover effects with detailed descriptions
- **Responsive Design**: Works on all devices
- **Team Links**: Direct links to iGEM wiki pages
- **Easy Maintenance**: No HTML editing required

## 📋 Example Workflow

1. **Prepare team data**:
   ```bash
   cp team-data/README.txt team-data/team-2026.txt
   # Edit team-2026.txt with actual data
   ```

2. **Add team image**:
   ```bash
   cp /path/to/team-photo.jpg images/team-2026.jpg
   ```

3. **Update website**:
   ```bash
   ./update-teams.sh
   ```

4. **View changes**:
   Visit http://localhost:3001/our-previous-teams.html

## 🐛 Troubleshooting

### Common Issues:

1. **"No team data files found"**
   - Make sure files are named `team-YYYY.txt`
   - Check files are in `team-data/` folder

2. **"Image not found"**
   - Verify image file exists in `images/` folder
   - Check filename matches `TEAM IMAGE` field exactly

3. **"Invalid data format"**
   - Ensure each field starts with `FIELD NAME:`
   - Check for typos in field names

### Debug Mode:
```bash
node generate-teams.js 2>&1 | tee debug.log
```

## 🎉 Benefits

- ✅ **Easy Updates**: No HTML knowledge required
- ✅ **Consistent Format**: Standardized data structure
- ✅ **Version Control**: Track changes to team data
- ✅ **Bulk Updates**: Update multiple teams at once
- ✅ **Error Prevention**: Validation and error checking
- ✅ **Maintainable**: Clear separation of data and presentation

---

**Need help?** Check the `team-data/README.txt` file for detailed instructions and examples.
