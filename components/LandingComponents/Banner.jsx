import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/Home.module.css';

export default function Banner() {
  return (
    <header className={styles.banner}>
      <Image
          // className={styles.logo} 
          src='/assets/NEXT-PERSIST-A-trim-trim.png'
          alt='next-persist-logo'
          height={200}
          width={800}
        />
      <div className={styles.bannerTextContainer}>
        <div className={styles.bannerH1Text}>A Node module made with love.</div>
        <div className={styles.bannerPText}>Bridging the gap between client-side persistence and server-side rendering.</div>
          <Link href="/demo">
            <button className={styles.bannerButton}>Demo</button>
          </Link>
      </div>
    </header>
  )
}
