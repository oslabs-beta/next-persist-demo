import React from 'react'
import styles from '../../styles/Home.module.css'

export default function Implementation(props) {
  return (
    <div className={styles.implementation}>
      <div className={styles.implementationDesc}>{props.content.desc}</div>
      <div className={styles.implementationCode}>{props.image}</div>
    </div>
  )
}
