import React from 'react'
import Image from 'next/image'
import styles from '../../styles/Home.module.css';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
      <div className={styles.headerNav}>
        <div className={styles.logo}>
          <a href='https://www.npmjs.com/package/next-persist'>next-persist</a>
        </div>
      <div className={styles.navigation}>
        <a className={styles.navLinks} href='https://github.com/oslabs-beta/next-persist'>Github</a>
        <a className={styles.navLinks} href='https://medium.com/@grisha617/next-persist-bridging-the-gap-between-server-side-rendering-and-client-state-persisted-data-cb89d639f241'>Blog</a>
        <a className={styles.navLinks} href='https://www.npmjs.com/package/next-persist'>npm</a>
      </div>
    </div>
  </div>
  )
}
