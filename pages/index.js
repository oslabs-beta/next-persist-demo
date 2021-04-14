import React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <div className={styles.headerNav}>
          <div className={styles.logo}>
            next-persist
          </div>
          <nav className={styles.navigation}>
            <a className={styles.links}>Docs</a>
            <a className={styles.links}>Tutorial</a>
            <a className={styles.links}>Blog</a>
            <a className={styles.links}>Github</a>
          </nav>
        </div>
      </div>
      <div className={styles.bodyContainer}>
        <div className={styles.body}>
          <header className={styles.banner}>
            <div className={styles.bannerTextContainer}>
              <h1 className={styles.bannerH1Text}>next-persist</h1>
              <p className={styles.bannerPText}>Bridging the gap between client-side persistence and server-side rendering.</p>
              <button className={styles.bannerButton}>Get Started</button>
            </div>
          </header>
          <div className={styles.content}>
            <div className={styles.principles}>
              <div className={styles.blurb}>

              </div>
              <div className={styles.blurb}>

              </div>
              <div className={styles.blurb}>

              </div>
            </div>
            <div className={styles.implementation}>

            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerContainer}>

      </div>
      {/* <Head className={styles.headContainer}>
        <title>next-persist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div class='body' className={styles.bodyContainer}>

      </div>
      <div class='footer' className={styles.footerContainer}>

      </div>
      <h1>This is our Landing Page</h1>
      <Link href="/demo">
        <a>Demo</a>
      </Link> */}
    </div>
  );
}
