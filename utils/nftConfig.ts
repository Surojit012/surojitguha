// NFT Configuration - Update this with your actual NFTs
export interface NFTConfig {
  id: string;
  name: string;
  collection: string;
  description: string;
  image: string;
  marketplaceUrl: string;
  contractAddress?: string;
  tokenId?: string;
  blockchain?: 'ethereum' | 'polygon' | 'solana' | 'sui' | 'other';
}

export const myNFTs: NFTConfig[] = [
  {
    id: '1',
    name: 'Your NFT #1',
    collection: 'Collection Name',
    description: 'Brief description of why this NFT is meaningful to you.',
    image: '/assets/nft-01.png', // Add your image to public/assets/
    marketplaceUrl: 'https://opensea.io/assets/ethereum/0x.../1',
    contractAddress: '0x...',
    tokenId: '1',
    blockchain: 'ethereum'
  },
  {
    id: '2',
    name: 'Your NFT #2',
    collection: 'Another Collection',
    description: 'Another meaningful piece in your collection.',
    image: '/assets/nft-02.png',
    marketplaceUrl: 'https://opensea.io/assets/ethereum/0x.../2',
    contractAddress: '0x...',
    tokenId: '2',
    blockchain: 'ethereum'
  },
  {
    id: '3',
    name: 'Your NFT #3',
    collection: 'Third Collection',
    description: 'A third piece that represents your taste.',
    image: '/assets/nft-03.png',
    marketplaceUrl: 'https://opensea.io/assets/ethereum/0x.../3',
    contractAddress: '0x...',
    tokenId: '3',
    blockchain: 'ethereum'
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