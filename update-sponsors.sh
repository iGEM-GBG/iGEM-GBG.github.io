#!/bin/bash

# Update Sponsors Page Script
# This script regenerates the sponsors page with current sponsor data

echo "🔄 Updating Sponsors page with sponsor data..."

# Run the generation script
node generate-sponsors.js

# Check if the script ran successfully
if [ $? -eq 0 ]; then
    echo "✅ Sponsors page updated successfully!"
    echo "📄 Updated: our-sponsors.html"
    echo "🌐 Visit: http://localhost:3001/our-sponsors.html"
else
    echo "❌ Error updating sponsors page"
    exit 1
fi

