# NFT Section Setup Guide

Your portfolio now has a dedicated NFT section called "Signals Held" that showcases your digital art collection.

## 🖼️ Adding Your NFT Images

### Step 1: Add Images
1. Save your NFT images to the `public/assets/` folder
2. Name them descriptively: `nft-01.png`, `nft-02.jpg`, etc.
3. Recommended size: 400x400px or larger (square aspect ratio)
4. Supported formats: PNG, JPG, GIF, WebP

### Step 2: Update NFT Configuration
Edit `utils/nftConfig.ts` with your actual NFT details:

```typescript
export const myNFTs: NFTConfig[] = [
  {
    id: '1',
    name: 'Bored Ape #1234',
    collection: 'Bored Ape Yacht Club',
    description: 'My first blue-chip NFT purchase.',
    image: '/assets/bayc-1234.png',
    marketplaceUrl: 'https://opensea.io/assets/ethereum/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d/1234',
    contractAddress: '0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d',
    tokenId: '1234',
    blockchain: 'ethereum'
  },
  // Add more NFTs...
];
```

## 🔗 Blockchain Support

The component supports multiple blockchains:
- `ethereum` - Shows ETH badge
- `polygon` - Shows MATIC badge  
- `solana` - Shows SOL badge
- `sui` - Shows SUI badge
- `other` - Generic badge

## 🎨 Features

- **Hover Effects**: Images scale and show blockchain badges
- **External Links**: Click to view on marketplace
- **Responsive Grid**: 1 column mobile, 3 columns desktop
- **Fallback Images**: Placeholder shown if image fails to load
- **Smooth Animations**: Staggered entrance animations

## 🚀 Quick Setup

1. **Replace placeholder data** in `utils/nftConfig.ts`
2. **Add your images** to `public/assets/`
3. **Update marketplace URLs** (OpenSea, Foundation, etc.)
4. **Deploy** - your NFTs will be live!

## 💡 Pro Tips

- Use high-quality images for best visual impact
- Keep descriptions concise but meaningful
- Link to the actual marketplace listing for authenticity
- Consider showing only your most significant pieces (3-6 NFTs work well)

## 🔄 Dynamic Loading (Advanced)

If you want to automatically load NFTs from your wallet, you can use the `DynamicNFTs.tsx` component instead. This requires:
- OpenSea API integration
- Your wallet address
- API rate limiting considerations

The current setup is static and more reliable for portfolio use.