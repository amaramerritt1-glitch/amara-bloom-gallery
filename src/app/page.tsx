'use client';

import { motion } from 'framer-motion';
import ArtworkCard from '@/components/ArtworkCard';
import { artworks } from '@/data/artworks';
import styles from './page.module.css';

export default function GalleryPage() {
  return (
    <main className={styles.main}>
      <motion.header
        className={styles.header}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      >
        <h1 className={styles.title}>Amara Merritt Arts</h1>
        <p className={styles.subtitle}>The Bloom Archive</p>
          A sacred library of illuminated transmissions
        </p>
      </motion.header>

      <div className={styles.grid}>
        {artworks.map((artwork, index) => (
          <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
        ))}
      </div>

      <motion.footer
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <p className={styles.footerText}>
          Select an artwork to witness its bloom
        </p>
      </motion.footer>
    </main>
  );
}
