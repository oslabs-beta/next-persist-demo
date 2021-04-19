import React from 'react';
import Blurb from './Blurb.jsx';
import Implementation from './Implementation.jsx';
import ImplementationRev from './ImplementationRev.jsx';
import Team from './Team.jsx';
import Link from 'next/link';
import styles from '../../styles/Home.module.css';

export default function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.blurbContainer}>
        <Blurb content={content.blurbOne} />
        <Blurb content={content.blurbTwo} />
        <Blurb content={content.blurbThree} />
      </div>
      <div className={styles.impContainer}>
        <Implementation content={implementation.impOne} />
        <Implementation content={implementation.impTwo} />
        <Implementation content={implementation.impThree} />
        <div className={styles.learnMoreBtnContainer}>
          <Link href="https://github.com/oslabs-beta/next-persist">
            <button className={styles.learnMoreButton}>Learn More</button>
          </Link>
        </div>
      </div>
      <div className={styles.teamContainer}>
        <div className={styles.teamHeader}>
          <h1 className={styles.teamHeaderText}>The team behind most.js</h1>
        </div>
        <div className={styles.teamInfo}>
          <Team team={team.brian} />
          <Team team={team.christopher} />
          <Team team={team.greg} />
          <Team team={team.matt} />
        </div>
      </div>
    </div>
  );
}

const implementation = {
  impOne: {
    desc: {
      header: 'Importing PersistWrapper',
      text: (
        <p>
          Simply import{' '}
          {
            <code>
              <text className={styles.codeText}>PersistWrapper</text>
            </code>
          }{' '}
          and wrap it around Next.js's Component prop, then wrap Redux's
          Provider component around{' '}
          {
            <code>
              <text className={styles.codeText}>PersistWrapper</text>
            </code>
          }
          . Set up a configuration object and pass it down to PersistWrapper as
          the prop{' '}
          {
            <code>
              <text className={styles.codeText}>wrapperConfig</text>
            </code>
          }
        </p>
      ),
    },
    code: `// _app.js
import { Provider } from "react-redux";
import store from "../client/store";
import PersistWrapper from 'next-persist/src/NextPersistWrapper';

const npConfig = {
  method: 'localStorage'
  allowList: {
    reducerOne: ['stateItemOne', 'stateItemTwo'],
  },
};

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistWrapper wrapperConfig={npConfig}>
        <Component {...pageProps} />
      </PersistWrapper>
    </Provider>
  );
};

export default MyApp;
`,
  },

  impTwo: {
    desc: {
      header: 'Retrieving persisted state from the client',
      text: (
        <p>
          In your reducer files, import your storage-retrieval method of choice.
          Pass your initial state through the next-persist method and set its
          evaluated result as the default state parameter in your reducer.
        </p>
      ),
    },
    code: `// Reducer.js
import { getLocalStore } from 'next-persist'

const initialState = { stateProperty : 'stateValue' };

const persistedState = getLocalStore('state', initialState);

const reducer = (state = persistedState, action) => {
  switch (action.type) {
  default:
    return state;
  }
};
`,
  },

  impThree: {
    desc: {
      header: 'Server-side rendering with next-persist',
      text: (
        <p>
          If you want to utilize Next.js's server-side rendering feature, import{' '}
          {
            <code>
              <text className={styles.codeText}>getCookieProps</text>
            </code>
          }{' '}
          in the component responsible for data-fetching. Call{' '}
          {
            <code>
              <text className={styles.codeText}>getCookieProps</text>
            </code>
          }{' '}
          within Next.js's data-fetching method and return its evaluated result
          as the value of the{' '}
          {
            <code>
              <text className={styles.codeText}>pageProps</text>
            </code>
          }{' '}
          property on the context object.
        </p>
      ),
    },
    code: `// _app.js
import { getCookieProps } from 'next-persist'

const MyApp = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <PersistWrapper wrapperConfig={config}>
        <Component {...pageProps} />
      </PersistWrapper>
    </Provider>
  );
};

MyApp.getInitialProps = async ({ ctx }) => {
  const cookieState = getCookieProps(ctx);
  return {
    pageProps : cookieState,
  };
};

export default MyApp;
`,
  },
};

const content = {
  blurbOne: {
    header: 'State persistence with Next.js',
    paragraph:
      'next-persist helps you integrate persistent client-side state with static site generation and server-side rendering with Next.js, allowing the flexibility of building dynamic, isomorphic web applications.',
  },

  blurbTwo: {
    header: 'Lightweight solution',
    paragraph:
      'next-persist offers developers a solution for dynamic client-side data persistence without having to worry about the architecture and costs of additional database management systems.',
  },

  blurbThree: {
    header: 'Declarative and semantic',
    paragraph:
      'After importing next-persist, simply set up a configuration object and incorporate two functions. We do the rest, delivering you the benefits of SSG and SSR with state persistence.',
  },
};

const team = {
  christopher: {
    name: 'Christopher Bosserman',
    src: '/assets/christopher.png',
    alt: 'Headshot of Christopher',
    github: 'https://github.com/christopherpbosserman',
    linkedin: 'https://www.linkedin.com/in/christopherpbosserman/',
  },

  brian: {
    name: 'Brian Chu',
    src: '/assets/brian.jpeg',
    alt: 'Headshot of Brian',
    github: 'https://github.com/darthchu',
    linkedin: 'https://www.linkedin.com/in/brianwilliamchu/',
  },

  greg: {
    name: 'Greg Levine-Rozenvayn',
    src: '/assets/greg.png',
    alt: 'Headshot of Greg',
    github: 'https://github.com/grishaLR',
    linkedin: 'https://www.linkedin.com/in/gregory-levine-rozenvayn/',
  },

  matt: {
    name: 'Matthew Salvador',
    src: '/assets/matt.png',
    alt: 'Headshot of Matt',
    github: 'https://github.com/mjsalvador',
    linkedin: 'https://www.linkedin.com/in/matthewsalvador/',
  },
};
