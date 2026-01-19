// NFT Configuration - Update this with your actual NFTs
export interface NFTConfig {
  id: string;
  name: string;
  collection: string;
  description: string;
  interpretation: string;
  image: string;
  marketplaceUrl: string;
  contractAddress?: string;
  tokenId?: string;
  blockchain?: 'ethereum' | 'polygon' | 'solana' | 'sui' | 'other';
}

export const myNFTs: NFTConfig[] = [
  {
    id: '1',
    name: 'Popkins',
    collection: 'Popkins',
    description: 'Playful on-chain characters from the Sui ecosystem.',
    interpretation: 'Curiosity-first identity.',
    image: '/assets/popkins.png',
    marketplaceUrl: '', // Removed marketplace links
    contractAddress: '0x239330c441a39608053d5f3bd3b2550cd7b873b350ae69112b360ad47bcaaff',
    tokenId: '0x27ec16e8d7b2fb8c55a22a78ad376a2d93d450652c9e14c8ded652f31c952e3d',
    blockchain: 'sui'
  },
  {
    id: '2',
    name: 'Fwogs',
    collection: 'Fwogs',
    description: 'Internet-native PFPs rooted in culture and remix.',
    interpretation: 'Memetic, informal, human.',
    image: '/assets/solana-nft.png',
    marketplaceUrl: '', // Removed marketplace links
    contractAddress: '0x8fe1a377b83921fe1429adb1b8fbfecd45de9cd8',
    tokenId: '1175',
    blockchain: 'ethereum'
  },
  {
    id: '3',
    name: 'Pythenians',
    collection: 'Pythenians',
    description: 'Network-native artifacts from the Pyth community.',
    interpretation: 'Aligned with data infrastructure.',
    image: '/assets/ethereum-nft.png',
    marketplaceUrl: '', // Removed marketplace links
    contractAddress: 'EZfS8jZwbPSrwyEyoMHxZfHzrTHcpsWDQVr8tLgdFYKT',
    tokenId: 'EZfS8jZwbPSrwyEyoMHxZfHzrTHcpsWDQVr8tLgdFYKT',
    blockchain: 'solana'
  }
];

// Helper function to get blockchain icon/color
export const getBlockchainInfo = (blockchain: string) => {
  const blockchainMap = {
    ethereum: { color: '#627EEA', symbol: 'ETH' },
    polygon: { color: '#8247E5', symbol: 'MATIC' },
    solana: { color: '#00FFA3', symbol: 'SOL' },
    sui: { color: '#4DA2FF', symbol: 'SUI' },
    other: { color: '#666', symbol: '?' }
  };
  
  return blockchainMap[blockchain as keyof typeof blockchainMap] || blockchainMap.other;
};