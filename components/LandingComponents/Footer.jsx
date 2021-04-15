import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.footerNav}>
        <div className={styles.footerLogo}>
        <Image
          // className={styles.logo} 
          src='/assets/NEXT-PERSIST-A-trim-trim.png'
          alt='next-persist-logo'
          height={50}
          width={200}
        />
        <p>A node module by most.js</p>
        </div>
        <div className={styles.footerLinks}>
          <Link href='https://github.com/oslabs-beta/next-persist'>
            <Image
              className={styles.footerAvatar} 
              src='/assets/github-logo.png'
              alt='next-persist-logo'
              height={50}
              width={50}
            />
          </Link>
        </div>
      </div>
    </div>
  )
}
