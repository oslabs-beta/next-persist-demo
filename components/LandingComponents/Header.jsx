import React from 'react'
import Link from 'next/link'
import styles from '../../styles/Home.module.css';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerNav}>
        <div className={styles.logo}>
          <Link href='https://mostjs.org'>most.js</Link>
        </div>
      <div className={styles.navigation}>
        <Link className={styles.navLinks} href='https://github.com/oslabs-beta/next-persist'>Github</Link>
        <Link className={styles.navLinks} href='https://medium.com/@grisha617/next-persist-bridging-the-gap-between-server-side-rendering-and-client-state-persisted-data-cb89d639f241'>Blog</Link>
        <Link className={styles.navLinks} href='https://www.npmjs.com/package/next-persist'>npm</Link>
      </div>
    </div>
  </div>
  )
}
