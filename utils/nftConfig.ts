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
    name: 'Fwogs',
    collection: 'Fwogs',
    description: 'A stylized PFP series rooted in internet culture and identity.',
    image: '/assets/solana-nft.png',
    marketplaceUrl: 'https://opensea.io/item/ethereum/0x8fe1a377b83921fe1429adb1b8fbfecd45de9cd8/1175', // Swapped: This was Pythenians link
    contractAddress: '0x8fe1a377b83921fe1429adb1b8fbfecd45de9cd8',
    tokenId: '1175',
    blockchain: 'ethereum'
  },
  {
    id: '2',
    name: 'Pythenians',
    collection: 'Pythenians',
    description: 'Network-native artifacts from the Pyth community.',
    image: '/assets/ethereum-nft.png',
    marketplaceUrl: 'https://magiceden.io/item-details/EZfS8jZwbPSrwyEyoMHxZfHzrTHcpsWDQVr8tLgdFYKT', // Swapped: This was Fwogs link
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