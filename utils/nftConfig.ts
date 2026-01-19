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
    name: 'Popkins',
    collection: 'Popkins',
    description: 'Playful on-chain characters from the Sui ecosystem.',
    image: '/assets/popkins.png',
    marketplaceUrl: 'https://www.tradeport.xyz/sui/0x239330c441a39608053d5f3bd3b2550cd7b873b350ae69112b360ad47bcaaff?tab=items&tokenId=0x27ec16e8d7b2fb8c55a22a78ad376a2d93d450652c9e14c8ded652f31c952e3d&modalSlug=0xb908f3c6fea6865d32e2048c520cdfe3b5c5bbcebb658117c41bad70f52b7ccc%3A%3Apopkins_nft%3A%3APopkins',
    contractAddress: '0x239330c441a39608053d5f3bd3b2550cd7b873b350ae69112b360ad47bcaaff',
    tokenId: '0x27ec16e8d7b2fb8c55a22a78ad376a2d93d450652c9e14c8ded652f31c952e3d',
    blockchain: 'sui'
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