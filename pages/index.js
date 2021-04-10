import React from 'react';
import Head from 'next/head';

import styles from '../styles/Home.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>next-persist</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>This is our Landing Page</h1>
      <Link href="/demo">
        <a>Demo</a>
      </Link>
    </div>
  );
}
