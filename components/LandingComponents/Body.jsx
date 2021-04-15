import React from 'react'
import Banner from './Banner.jsx'
import Content from './Content.jsx'
import styles from '../../styles/Home.module.css';

export default function Body() {
  return (
    <div className={styles.bodyContainer}>
    <div className={styles.body}>
      <Banner />
      <Content />
    </div>
  </div>
  )
}
