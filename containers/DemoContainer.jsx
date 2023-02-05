import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { Counter, LightSwitch, Timer, UserInfo } from '../components';
import styles from '../styles/Demo.module.css';

export default function DemoContainer() {
  const {
    counter,
    lightStatus,
    username,
    userIcon,
  } = useSelector((state) => state.demo);

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <div className={styles.demoContainer}>
      <Link href="/userinfo">
        <UserInfo username={username} userIcon={userIcon} />
      </Link>
      <Link href="/counter">
        <Counter counter={counter} />
      </Link>
      <Link href="/timer">
        <Timer />
      </Link>
      <Link href="/lightswitch">
        <LightSwitch lightStatus={lightStatus} />
      </Link>
    </div>
  );
}
