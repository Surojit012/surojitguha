# Download Your NFT Images

Since marketplace sites block automated access, here's how to manually get your NFT images:

## Method 1: Direct Download from Browser

### 1. Popkins (Sui)
1. Visit: https://www.tradeport.xyz/sui/0x239330c441a39608053d5f3bd3b2550cd7b873b350ae69112b360ad47bcaaff?tab=items&tokenId=0x27ec16e8d7b2fb8c55a22a78ad376a2d93d450652c9e14c8ded652f31c952e3d&modalSlug=0xb908f3c6fea6865d32e2048c520cdfe3b5c5bbcebb658117c41bad70f52b7ccc%3A%3Apopkins_nft%3A%3APopkins
2. Right-click on the NFT image
3. Select "Save image as..."
4. Save as `public/assets/popkins.png`

### 2. Solana NFT (Magic Eden)
1. Visit: https://magiceden.io/item-details/EZfS8jZwbPSrwyEyoMHxZfHzrTHcpsWDQVr8tLgdFYKT
2. Right-click on the NFT image
3. Select "Save image as..."
4. Save as `public/assets/solana-nft.png`

### 3. Ethereum NFT (OpenSea)
1. Visit: https://opensea.io/item/ethereum/0x8fe1a377b83921fe1429adb1b8fbfecd45de9cd8/1175
2. Right-click on the NFT image
3. Select "Save image as..."
4. Save as `public/assets/ethereum-nft.png`

## Method 2: Browser Console Script

If the images are hard to save, you can use this browser console script:

1. Open your NFT page in browser
2. Press F12 to open Developer Tools
3. Go to Console tab
4. Paste this script:

```javascript
// Find and download the main NFT image
function downloadNFTImage(filename) {
    // Look for common NFT image selectors
    const selectors = [
        'img[alt*="NFT"]',
        'img[src*="ipfs"]',
        'img[src*="arweave"]',
        '.nft-image img',
        '.asset-image img',
        '[data-testid="asset-media"] img'
    ];
    
    let img = null;
    for (let selector of selectors) {
        img = document.querySelector(selector);
        if (img) break;
    }
    
    if (!img) {
        // Fallback: get the largest image on page
        const images = Array.from(document.querySelectorAll('img'));
        img = images.reduce((largest, current) => {
            return (current.naturalWidth * current.naturalHeight) > 
                   (largest.naturalWidth * largest.naturalHeight) ? current : largest;
        });
    }
    
    if (img) {
        const link = document.createElement('a');
        link.href = img.src;
        link.download = filename;
        link.click();
        console.log('Downloaded:', filename);
    } else {
        console.log('No image found');
    }
}

// Use like this:
// downloadNFTImage('popkins.png');
// downloadNFTImage('solana-nft.png');
// downloadNFTImage('ethereum-nft.png');
```

## Method 3: Quick Update

Once you have the images:

1. Replace the `.svg` files with `.png` files in `public/assets/`
2. Update the config if needed:

```bash
# In your terminal:
git add public/assets/
git commit -m "Add real NFT images"
git push origin main
```

Your NFTs will immediately appear on your live site!

## Image Requirements

- **Format**: PNG, JPG, or WebP
- **Size**: 400x400px minimum (square preferred)
- **Quality**: High resolution for best display
- **Names**: Exactly match the filenames in the config