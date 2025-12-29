'use client';

import { motion } from 'framer-motion';
import styles from './BloomPanel.module.css';

interface BloomPanelProps {
  type: 'poem' | 'detail' | 'symbol' | 'metadata';
  content: string | { label: string; meaning: string } | { title: string; year: string; medium: string; dimensions: string };
  index: number;
  detailImageUrl?: string;
}

export default function BloomPanel({ type, content, index, detailImageUrl }: BloomPanelProps) {
  const positions = [
    { x: -320, y: -180, rotate: -8 },
    { x: 320, y: -160, rotate: 6 },
    { x: -340, y: 120, rotate: 4 },
    { x: 340, y: 140, rotate: -5 },
    { x: -280, y: 340, rotate: -6 },
    { x: 300, y: 360, rotate: 7 },
  ];

  const position = positions[index % positions.length];

  return (
    <motion.div
      className={`${styles.panel} ${styles[type]}`}
      initial={{
        opacity: 0,
        scale: 0.3,
        x: 0,
        y: 0,
        rotate: 0,
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: position.x,
        y: position.y,
        rotate: position.rotate,
      }}
      exit={{
        opacity: 0,
        scale: 0.3,
        x: 0,
        y: 0,
        rotate: 0,
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {type === 'poem' && typeof content === 'string' && (
        <div className={styles.poemContent}>
          <div className={styles.ornamentTop} />
          <p className={styles.poemText}>{content}</p>
          <div className={styles.ornamentBottom} />
        </div>
      )}

      {type === 'detail' && detailImageUrl && (
        <div className={styles.detailContent}>
          <div className={styles.detailPlaceholder}>
            <span className={styles.detailLabel}>Detail View</span>
          </div>
        </div>
      )}

      {type === 'symbol' && typeof content === 'object' && 'label' in content && (
        <div className={styles.symbolContent}>
          <div className={styles.symbolIcon} />
          <h4 className={styles.symbolLabel}>{content.label}</h4>
          <p className={styles.symbolMeaning}>{content.meaning}</p>
        </div>
      )}

      {type === 'metadata' && typeof content === 'object' && 'title' in content && (
        <div className={styles.metadataContent}>
          <h4 className={styles.metadataTitle}>{content.title}</h4>
          <div className={styles.metadataDetails}>
            <p><span className={styles.label}>Year:</span> {content.year}</p>
            <p><span className={styles.label}>Medium:</span> {content.medium}</p>
            <p><span className={styles.label}>Size:</span> {content.dimensions}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
}
