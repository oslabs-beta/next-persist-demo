import React from 'react'
import styles from '../../styles/Home.module.css';

export default function Blurb(props) {
  return (
    <div className={styles.blurb}>
      <h2 className={styles.blurbHeader}>{props.content.header}</h2>
      <p>{props.content.paragraph}</p>
    </div>
  )
}
