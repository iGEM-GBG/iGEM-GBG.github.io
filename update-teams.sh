#!/bin/bash

# Simple script to update the teams page
echo "🔄 Updating teams page..."

# Run the generation script
node generate-teams.js

# Check if successful
if [ $? -eq 0 ]; then
    echo "✅ Teams page updated successfully!"
    echo "🌐 Visit http://localhost:3001/our-previous-teams.html to see changes"
else
    echo "❌ Failed to update teams page"
    exit 1
fi
