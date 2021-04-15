import React from 'react';
import Link from 'next/link';
import Head from 'next/head';
import Header from '../components/LandingComponents/Header.jsx'
import Body from '../components/LandingComponents/Body.jsx'
import Footer from '../components/LandingComponents/Footer.jsx'
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>next-persist - A node module by most.js</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
