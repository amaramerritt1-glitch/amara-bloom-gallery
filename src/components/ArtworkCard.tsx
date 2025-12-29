'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import type { Artwork } from '@/data/artworks';
import styles from './ArtworkCard.module.css';

interface ArtworkCardProps {
  artwork: Artwork;
  index: number;
}

export default function ArtworkCard({ artwork, index }: ArtworkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={styles.card}
    >
      <Link href={`/art/${artwork.id}`} className={styles.link}>
        <motion.div
          className={styles.imageContainer}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className={styles.imagePlaceholder}>
            <div className={styles.ornament} />
            <span className={styles.placeholderText}>{artwork.title}</span>
          </div>
          <div className={styles.overlay} />
        </motion.div>
        
        <div className={styles.info}>
          <h3 className={styles.title}>{artwork.title}</h3>
          <p className={styles.year}>{artwork.year}</p>
        </div>
      </Link>
    </motion.div>
  );
}
