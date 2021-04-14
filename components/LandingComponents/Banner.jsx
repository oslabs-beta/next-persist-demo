import React from 'react'
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Banner() {
  return (
    <header className={styles.banner}>
      <div className={styles.bannerTextContainer}>
        <h1 className={styles.bannerH1Text}>next-persist</h1>
        <p className={styles.bannerPText}>Bridging the gap between client-side persistence and server-side rendering.</p>
        <button className={styles.bannerButton}>
          <Link href="/demo"><a>Demo</a></Link>
          </button>
      </div>
    </header>
  )
}
