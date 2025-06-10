#!/bin/bash

# FutureOS - Deploy Experts Section Updates
echo "🚀 Deploying updated experts section to production..."

# Navigate to the correct directory
cd "$(dirname "$0")"

# Add all changes
echo "📝 Adding changes to git..."
git add .

# Commit the changes
echo "💾 Committing changes..."
git commit -m "✨ Update experts section with accurate industry professionals

- Updated expert information to match brochure specifications
- Improved expert descriptions and credentials
- Enhanced visual representation with initials
- Refined experience badges for better clarity
- Ensured experts section appears above registration form"

# Push to GitHub
echo "🌐 Pushing to GitHub..."
git push origin main

echo ""
echo "✅ Deployment complete!"
echo "🌍 Changes will be live at www.futureos.live in 1-3 minutes"
echo "🔄 GitHub Pages is building your site..."
echo ""
echo "📋 What was updated:"
echo "   • Udaya Kumar Ambati - IIIT Nuzvidu Professor"
echo "   • Balaji Vuppuluri - American Express Sr. Manager"  
echo "   • Pruthvi Kaveti - Senior Product Manager"
echo "   • Jose Anitt - CTO, Gaian Solutions"
echo "   • Satish Karri - Sr. PM, Tredence Inc"
echo ""
echo "📞 For any issues: Check GitHub Actions or contact support"
