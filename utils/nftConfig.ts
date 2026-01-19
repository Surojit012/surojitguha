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
    collection: 'Popkins NFT',
    description: 'Playful on-chain characters from the Sui ecosystem.',
    image: '/assets/popkins.png', // Add your real Popkins image here
    marketplaceUrl: 'https://www.tradeport.xyz/sui/0x239330c441a39608053d5f3bd3b2550cd7b873b350ae69112b360ad47bcaaff?tab=items&tokenId=0x27ec16e8d7b2fb8c55a22a78ad376a2d93d450652c9e14c8ded652f31c952e3d&modalSlug=0xb908f3c6fea6865d32e2048c520cdfe3b5c5bbcebb658117c41bad70f52b7ccc%3A%3Apopkins_nft%3A%3APopkins',
    contractAddress: '0x239330c441a39608053d5f3bd3b2550cd7b873b350ae69112b360ad47bcaaff',
    tokenId: '0x27ec16e8d7b2fb8c55a22a78ad376a2d93d450652c9e14c8ded652f31c952e3d',
    blockchain: 'sui'
  },
  {
    id: '2',
    name: 'Solana NFT',
    collection: 'Magic Eden Collection',
    description: 'A meaningful piece from the Solana ecosystem.',
    image: '/assets/solana-nft.png', // Add your real Solana NFT image here
    marketplaceUrl: 'https://magiceden.io/item-details/EZfS8jZwbPSrwyEyoMHxZfHzrTHcpsWDQVr8tLgdFYKT',
    contractAddress: 'EZfS8jZwbPSrwyEyoMHxZfHzrTHcpsWDQVr8tLgdFYKT',
    tokenId: 'EZfS8jZwbPSrwyEyoMHxZfHzrTHcpsWDQVr8tLgdFYKT',
    blockchain: 'solana'
  },
  {
    id: '3',
    name: 'Ethereum NFT #1175',
    collection: 'Ethereum Collection',
    description: 'A piece from the original NFT ecosystem.',
    image: '/assets/ethereum-nft.png', // Add your real Ethereum NFT image here
    marketplaceUrl: 'https://opensea.io/item/ethereum/0x8fe1a377b83921fe1429adb1b8fbfecd45de9cd8/1175',
    contractAddress: '0x8fe1a377b83921fe1429adb1b8fbfecd45de9cd8',
    tokenId: '1175',
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