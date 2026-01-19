#!/usr/bin/env node

/**
 * Quick script to help replace placeholder NFT images with real ones
 * 
 * Usage:
 * 1. Download your NFT images from the marketplaces
 * 2. Place them in public/assets/ with these exact names:
 *    - popkins.png (or .jpg)
 *    - solana-nft.png (or .jpg) 
 *    - ethereum-nft.png (or .jpg)
 * 3. Run: node replace-with-real-images.js
 */

const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'public', 'assets');
const configFile = path.join(__dirname, 'utils', 'nftConfig.ts');

// Check if real images exist and update config
function updateImagePaths() {
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.gif'];
    const nftImages = ['popkins', 'solana-nft', 'ethereum-nft'];
    
    let configContent = fs.readFileSync(configFile, 'utf8');
    let updated = false;
    
    nftImages.forEach(imageName => {
        // Check if real image exists
        let realImageExists = false;
        let realImagePath = '';
        
        for (const ext of imageExtensions) {
            const imagePath = path.join(assetsDir, imageName + ext);
            if (fs.existsSync(imagePath)) {
                realImageExists = true;
                realImagePath = `/assets/${imageName}${ext}`;
                break;
            }
        }
        
        if (realImageExists) {
            // Replace .svg with real image path in config
            const svgPath = `/assets/${imageName}.svg`;
            if (configContent.includes(svgPath)) {
                configContent = configContent.replace(svgPath, realImagePath);
                updated = true;
                console.log(`✅ Updated ${imageName} to use real image: ${realImagePath}`);
            }
        } else {
            console.log(`⚠️  No real image found for ${imageName}. Add ${imageName}.png to public/assets/`);
        }
    });
    
    if (updated) {
        fs.writeFileSync(configFile, configContent);
        console.log('\n🎉 Config updated! Your real NFT images will now display.');
        console.log('Run: npm run build && git add . && git commit -m "Add real NFT images" && git push');
    } else {
        console.log('\n📝 No updates needed. Make sure to add your NFT images to public/assets/');
    }
}

// Create instructions file
function createInstructions() {
    const instructions = `
# Quick NFT Image Replacement

## Step 1: Get Your Images
Visit each marketplace and save the NFT images:

1. **Popkins**: https://www.tradeport.xyz/sui/0x239330c441a39608053d5f3bd3b2550cd7b873b350ae69112b360ad47bcaaff?tab=items&tokenId=0x27ec16e8d7b2fb8c55a22a78ad376a2d93d450652c9e14c8ded652f31c952e3d&modalSlug=0xb908f3c6fea6865d32e2048c520cdfe3b5c5bbcebb658117c41bad70f52b7ccc%3A%3Apopkins_nft%3A%3APopkins
   → Save as: public/assets/popkins.png

2. **Solana NFT**: https://magiceden.io/item-details/EZfS8jZwbPSrwyEyoMHxZfHzrTHcpsWDQVr8tLgdFYKT
   → Save as: public/assets/solana-nft.png

3. **Ethereum NFT**: https://opensea.io/item/ethereum/0x8fe1a377b83921fe1429adb1b8fbfecd45de9cd8/1175
   → Save as: public/assets/ethereum-nft.png

## Step 2: Run This Script
\`\`\`bash
node replace-with-real-images.js
\`\`\`

## Step 3: Deploy
\`\`\`bash
npm run build
git add .
git commit -m "Add real NFT images"
git push origin main
\`\`\`

Your real NFTs will be live! 🎉
`;
    
    fs.writeFileSync('QUICK_NFT_SETUP.md', instructions);
    console.log('📄 Created QUICK_NFT_SETUP.md with instructions');
}

// Main execution
console.log('🖼️  NFT Image Replacement Tool\n');
createInstructions();
updateImagePaths();