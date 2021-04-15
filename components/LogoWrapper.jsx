import React from 'react'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function LogoWrapper(props) {
  return (
    <div className={styles.logoContainer}>
      <Image 
        className={styles.logoWrapper}
        src='/assets/NEXT-PERSIST-A.png'
        alt='logo'
        height={400}
        width={400}
      />
      <div className={styles.childrenContainer}>
        {props.children}
      </div>
    </div>
  )
}
