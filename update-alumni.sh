#!/bin/bash

# Update Alumni Stories Page Script
# This script regenerates the alumni stories page with current alumni data

echo "🔄 Updating Alumni Stories page with alumni data..."

# Run the generation script
node generate-alumni.js

# Check if the script ran successfully
if [ $? -eq 0 ]; then
    echo "✅ Alumni stories page updated successfully!"
    echo "📄 Updated: alumni-stories.html"
    echo "🌐 Visit: http://localhost:3001/alumni-stories.html"
else
    echo "❌ Error updating alumni stories page"
    exit 1
fi

