import React from 'react';

import Header from '../components/LandingComponents/Header.jsx';
import Body from '../components/LandingComponents/Body.jsx';
import Footer from '../components/LandingComponents/Footer.jsx';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}
