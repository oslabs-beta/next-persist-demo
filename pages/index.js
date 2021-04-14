import React from 'react';
import Link from 'next/link';
// import Head from 'next/head';
import Header from '../components/LandingComponents/Header.jsx'
import Blurb from '../components/LandingComponents/Blurb.jsx'
import Banner from '../components/LandingComponents/Banner.jsx'
import Content from '../components/LandingComponents/Content.jsx'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.bodyContainer}>
        <div className={styles.body}>
          <Banner />
          <Content />
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
       */}
    </div>
  );
}
