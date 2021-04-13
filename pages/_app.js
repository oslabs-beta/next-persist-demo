import { Provider } from 'react-redux';

import '../styles/globals.css';
import store from '../redux/store/index';
import PersistWrapper from 'next-persist/src/NextPersistWrapper';

const config = {
  method: 'localStorage',
  key: 'demoState',
  allowList: ['counter', 'initialTime', 'lightStatus', 'userIcon', 'username'],
  combinedReducers: false,
};

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistWrapper wrapperConfig={config}>
        <Component {...pageProps} />
      </PersistWrapper>
    </Provider>
  );
}
