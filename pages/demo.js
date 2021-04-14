import React from 'react';
import Link from 'next/link';

import DemoContainer from '../containers/DemoContainer';
import styles from '../styles/Demo.module.css';

export default function demo() {
  return (
    <div className={styles.container}>
      <p className={styles.demoTitle}>
        Click on any component to modify it's value.
      </p>
      <p className={styles.demoInfo}>
        Refresh or navigate away from the page and your state will be retained!
      </p>
      <DemoContainer />
      <Link href="/">
        <a className={styles.backButton}>Back to Home</a>
      </Link>
    </div>
  );
}
