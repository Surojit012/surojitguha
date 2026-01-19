import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Disc, ExternalLink } from 'lucide-react';

interface NFT {
  id: string;
  name: string;
  description: string;
  image: string;
  collection: string;
  tokenId: string;
  contractAddress: string;
  marketplace_url?: string;
}

// Example function to fetch NFTs from OpenSea API
const fetchNFTs = async (walletAddress: string): Promise<NFT[]> => {
  try {
    // Replace with your actual wallet address
    const response = await fetch(
      `https://api.opensea.io/api/v1/assets?owner=${walletAddress}&limit=6`
    );
    const data = await response.json();
    
    return data.assets?.map((asset: any) => ({
      id: `${asset.asset_contract.address}-${asset.token_id}`,
      name: asset.name || `#${asset.token_id}`,
      description: asset.description || asset.collection.description,
      image: asset.image_url || asset.image_preview_url,
      collection: asset.collection.name,
      tokenId: asset.token_id,
      contractAddress: asset.asset_contract.address,
      marketplace_url: asset.permalink
    })) || [];
  } catch (error) {
    console.error('Error fetching NFTs:', error);
    return [];
  }
};

const NFTCard: React.FC<{ nft: NFT; index: number }> = ({ nft, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-10%" }}
    transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
  >
    <div className="group">
      <a
        href={nft.marketplace_url}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-square overflow-hidden mb-4 border border-white/5 group-hover:border-white/20 transition-colors duration-500 bg-white/[0.02]">
          <motion.div
            initial={{ scale: 1 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.7 }}
          >
            <div className="w-full h-full">
              <img
                src={nft.image}
                alt={nft.name}
                loading="lazy"
                className="w-full h-full object-cover"
                onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
                  // Fallback for broken images
                  (e.target as HTMLImageElement).src = '/assets/nft-placeholder.png';
                }}
              />
            </div>
          </motion.div>
          
          <div className="absolute inset-0 bg-background/0 group-hover:bg-transparent transition-colors duration-500" />
          
          {/* Hover overlay with external link */}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink size={14} className="text-white/80" />
          </div>
        </div>

        <div className="space-y-1">
          <h3 className="text-sm font-medium text-primary/90 group-hover:text-white transition-colors duration-500">
            {nft.collection}
          </h3>
          <p className="text-xs text-secondary/80 group-hover:text-secondary transition-colors duration-500">
            {nft.name}
          </p>
          <p className="text-[11px] font-mono text-secondary/60 group-hover:text-secondary/80 transition-colors duration-500 leading-snug line-clamp-2">
            {nft.description}
          </p>
        </div>
      </a>
    </div>
  </motion.div>
);

export const DynamicNFTs: React.FC<{ walletAddress: string }> = ({ walletAddress }) => {
  const [nfts, setNfts] = useState<NFT[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadNFTs = async () => {
      setLoading(true);
      const fetchedNFTs = await fetchNFTs(walletAddress);
      setNfts(fetchedNFTs.slice(0, 6)); // Show only first 6
      setLoading(false);
    };

    if (walletAddress) {
      loadNFTs();
    }
  }, [walletAddress]);

  if (loading) {
    return (
      <section className="py-24 border-t border-white/5">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4 text-secondary/50">
            <Disc size={14} />
            <span className="text-xs font-mono tracking-widest uppercase">
              04 / Signals Held
            </span>
          </div>
          <p className="text-secondary font-light">Loading NFTs...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
        whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="mb-16 max-w-xl">
          <div className="flex items-center gap-3 mb-4 text-secondary/50">
            <Disc size={14} />
            <span className="text-xs font-mono tracking-widest uppercase">
              04 / Signals Held
            </span>
          </div>
          <p className="text-secondary font-light leading-relaxed">
            A curated selection from my NFT collection.<br/>
            Collected for alignment, not speculation.
          </p>
        </div>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
        {nfts.map((nft, i) => (
          <NFTCard key={nft.id} nft={nft} index={i} />
        ))}
      </div>
    </section>
  );
};