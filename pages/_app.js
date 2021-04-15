import { Provider } from 'react-redux';

import '../styles/globals.css';
import store from '../redux/store/index';
import PersistWrapper from 'next-persist/src/NextPersistWrapper';
import LogoWrapper from '../components/LogoWrapper.jsx'

const config = {
  method: 'localStorage',
  allowList: {
    demo: ['counter', 'initialTime', 'lightStatus', 'userIcon', 'username'],
  },
};

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistWrapper wrapperConfig={config}>
        <LogoWrapper>
          <Component {...pageProps} />
        </LogoWrapper>
      </PersistWrapper>
    </Provider>
  );
}
