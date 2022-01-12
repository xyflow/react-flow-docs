import React from 'react';
import styles from './ProCard.module.css';

export default function ProCard({ title }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>{title}</div>
    </div>
  );
}
