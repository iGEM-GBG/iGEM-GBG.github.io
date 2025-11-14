#!/bin/bash

# Update Contact Information Script
# This script updates contact information across all pages

echo "🔄 Updating contact information across all pages..."

# Run the contact update script
node update-contact.js

# Check if the script ran successfully
if [ $? -eq 0 ]; then
    echo "✅ Contact information updated successfully!"
    echo "📄 Updated: All HTML pages"
    echo "📧 Contact data: contact-data/contact-info.txt"
    echo "🌐 Visit: http://localhost:3001/contact-us.html"
else
    echo "❌ Error updating contact information"
    exit 1
fi
