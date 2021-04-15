import React from 'react'
import styles from '../../styles/Home.module.css'

export default function Implementation(props) {
  return (
    <div className={styles.implementation}>
      <div className={styles.implementationDesc}>
        <h3>{props.content.desc.header}</h3>
        <div>{props.content.desc.text}</div>
      </div>
      <pre className={styles.implementationCode}>
        <code>{props.content.code}</code>
      </pre>
    </div>
  )
}
