import React, {useState, useEffect } from 'react';
import Link from 'next/link';
import { useSelector } from 'react-redux';

import { Counter, LightSwitch, Timer, UserInfo } from '../components';

export default function DemoContainer() {

  
  const {
    counter,
    lightStatus,
    initialTime,
    currentTime,
    username,
    userIcon,
  } = useSelector((state) => state);
  
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }

  return (
    <div>
      <h2>This is the Demo Container</h2>
      <Link href="/counter">
        <a>
          <Counter counter={counter} />
        </a>
      </Link>
      <Link href="/lightswitch">
        <a>
          <LightSwitch lightStatus={lightStatus} />
        </a>
      </Link>
      <Link href="/timer">
        <a>
          <Timer />
        </a>
      </Link>
      <Link href="/userinfo">
        <a>
          <UserInfo username={username} userIcon={userIcon} />
        </a>
      </Link>
    </div>
  );
}
