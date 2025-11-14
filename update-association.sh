#!/bin/bash

# Update Association Page Script
# This script regenerates the association page with current board member data

echo "🔄 Updating Association page with board member data..."

# Run the generation script
node generate-association.js

# Check if the script ran successfully
if [ $? -eq 0 ]; then
    echo "✅ Association page updated successfully!"
    echo "📄 Updated: the-association.html"
    echo "🌐 Visit: http://localhost:3001/the-association.html"
else
    echo "❌ Error updating association page"
    exit 1
fi
