import React from 'react'
import styles from '../../styles/Home.module.css';

export default function Header() {
  return (
    <div className={styles.headerContainer}>
    <div className={styles.headerNav}>
      <div className={styles.logo}>
        most.js
      </div>
      <nav className={styles.navigation}>
        <a className={styles.links}>Docs</a>
        <a className={styles.links}>Tutorial</a>
        <a className={styles.links}>Blog</a>
        <a className={styles.links}>Github</a>
      </nav>
    </div>
  </div>
  )
}
