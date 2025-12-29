'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { artworks } from '@/data/artworks';
import BloomPanel from '@/components/BloomPanel';
import styles from './page.module.css';

interface PageProps {
  params: {
    id: string;
  };
}

export default function ArtworkBloomPage({ params }: PageProps) {
  const router = useRouter();
  const artwork = artworks.find((art) => art.id === params.id);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        router.push('/');
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [router]);

  if (!artwork) {
    return (
      <div className={styles.notFound}>
        <h1>Artwork not found</h1>
        <button onClick={() => router.push('/')} className={styles.backButton}>
          Return to Gallery
        </button>
      </div>
    );
  }

  // Build panels array
  const panels: Array<{
    type: 'poem' | 'detail' | 'symbol' | 'metadata';
    content: any;
    detailImageUrl?: string;
  }> = [];

  // Add metadata panel
  panels.push({
    type: 'metadata',
    content: {
      title: artwork.title,
      year: artwork.year,
      medium: artwork.medium,
      dimensions: artwork.dimensions,
    },
  });

  // Add poem panels
  artwork.poemFragments.forEach((poem) => {
    panels.push({ type: 'poem', content: poem });
  });

  // Add detail panels
  artwork.detailUrls.forEach((url) => {
    panels.push({ type: 'detail', content: '', detailImageUrl: url });
  });

  // Add symbol panels
  artwork.symbols.forEach((symbol) => {
    panels.push({ type: 'symbol', content: symbol });
  });

  return (
    <div className={styles.container}>
      {/* Background overlay */}
      <motion.div
        className={styles.backdrop}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4 }}
        onClick={() => router.push('/')}
      />

      {/* Main content */}
      <div className={styles.content}>
        {/* Close button */}
        <motion.button
          className={styles.closeButton}
          onClick={() => router.push('/')}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          aria-label="Close and return to gallery (or press ESC)"
        >
          <span className={styles.closeIcon}>✕</span>
          <span className={styles.closeHint}>ESC</span>
        </motion.button>

        {/* Central artwork */}
        <motion.div
          className={styles.centralArtwork}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.artworkFrame}>
            <div className={styles.artworkPlaceholder}>
              <div className={styles.artworkOrnament} />
              <span className={styles.artworkTitle}>{artwork.title}</span>
            </div>
          </div>
        </motion.div>

        {/* Blooming panels */}
        <AnimatePresence>
          {panels.map((panel, index) => (
            <BloomPanel
              key={`${panel.type}-${index}`}
              type={panel.type}
              content={panel.content}
              index={index}
              detailImageUrl={panel.detailImageUrl}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Instructions */}
      <motion.div
        className={styles.instructions}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        <p>Navigate with arrow keys • Press ESC to return</p>
      </motion.div>
    </div>
  );
}
