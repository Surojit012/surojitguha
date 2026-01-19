# 🚀 Quick NFT Image Setup

## Get Your Real NFT Images (2 minutes)

### Step 1: Download Images from Your Marketplaces

**Right-click → Save image as** on each marketplace:

1. **Popkins (Sui)**: 
   - Visit: https://www.tradeport.xyz/sui/0x239330c441a39608053d5f3bd3b2550cd7b873b350ae69112b360ad47bcaaff?tab=items&tokenId=0x27ec16e8d7b2fb8c55a22a78ad376a2d93d450652c9e14c8ded652f31c952e3d&modalSlug=0xb908f3c6fea6865d32e2048c520cdfe3b5c5bbcebb658117c41bad70f52b7ccc%3A%3Apopkins_nft%3A%3APopkins
   - Save as: `public/assets/popkins.png`

2. **Solana NFT (Magic Eden)**:
   - Visit: https://magiceden.io/item-details/EZfS8jZwbPSrwyEyoMHxZfHzrTHcpsWDQVr8tLgdFYKT
   - Save as: `public/assets/solana-nft.png`

3. **Ethereum NFT (OpenSea)**:
   - Visit: https://opensea.io/item/ethereum/0x8fe1a377b83921fe1429adb1b8fbfecd45de9cd8/1175
   - Save as: `public/assets/ethereum-nft.png`

### Step 2: Update Config (30 seconds)

Replace the `.svg` extensions with `.png` in `utils/nftConfig.ts`:

```typescript
// Change these lines:
image: '/assets/popkins.svg',     → image: '/assets/popkins.png',
image: '/assets/solana-nft.svg', → image: '/assets/solana-nft.png', 
image: '/assets/ethereum-nft.svg', → image: '/assets/ethereum-nft.png',
```

### Step 3: Deploy (30 seconds)

```bash
git add .
git commit -m "Add real NFT images"
git push origin main
```

## 🎉 Done!

Your real NFTs will now display on your portfolio instead of placeholders!

## Alternative: Use the Auto-Update Script

If you prefer automation:

```bash
# After adding your images to public/assets/
node replace-with-real-images.js
```

This script will automatically update the config file for you.