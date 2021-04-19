import { Provider } from 'react-redux';
import Head from 'next/head';
import PersistWrapper from 'next-persist/src/NextPersistWrapper';
import { getCookieProps } from 'next-persist';

import '../styles/globals.css';
import store from '../redux/store/index';
import LogoWrapper from '../components/LogoWrapper.jsx';

const config = {
  method: 'cookies',
  allowList: {
    demo: ['counter', 'initialTime', 'lightStatus', 'userIcon', 'username'],
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistWrapper wrapperConfig={config}>
        <Head>
          <title>next-persist - A node module by most.js</title>
        </Head>
        <LogoWrapper>
          <Component {...pageProps} />
        </LogoWrapper>
      </PersistWrapper>
    </Provider>
  );
}

MyApp.getInitialProps = async ({ ctx }) => {
  const cookieState = getCookieProps(ctx);
  return {
    pageProps: cookieState,
  };
};
