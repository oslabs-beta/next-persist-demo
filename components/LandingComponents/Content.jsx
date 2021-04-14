import React from 'react'
import Blurb from './Blurb.jsx'
import Implementation from './Implementation.jsx'
import Team from './Team.jsx'
import styles from '../../styles/Home.module.css'

export default function Content() {
  return (
    <div className={styles.content}>
      <div className={styles.blurbContainer}>
        <Blurb content={content.blurbOne}/>
        <Blurb content={content.blurbTwo}/>
        <Blurb content={content.blurbThree}/>
      </div>
      <div className={styles.impContainer}>
        <Implementation content={implementation.impOne}/>
        <Implementation content={implementation.impTwo}/>
        <Implementation content={implementation.impThree}/>
      </div>
      <div className={styles.teamContainer}>
        {/* <Team /> */}
      </div>
    </div>
  )
}

const implementation = {
  impOne: {
    desc: `Simply import PersistWrapper and wrap Next.js's Component prop with it. If your application uses Redux as a state management system, wrap the Provider component over PersistWrapper. Set up a configuration object and pass it down to PersistWrapper as a proper 'wrapperConfig'`
  },

  impTwo: {
    desc: `Import your state-setting method of choice (setStorage or setCookie) and pass your updated state through it. For your React application, call the method in your event handler. If you're utilizing Redux, call the method in your reducer file.`
  },

  impThree: {
    desc: `Use your state-retrieval method of choice (getStorage or getCookie) to obtain client-side persisted state and pass it down as a prop for your components to use. If you're working in a Redux environment, PersistWrapper will make the persisted state available to all the pages in your appllication.`
  }
};

const content = {
  blurbOne: {
    header: 'State persistence with Next.js',
    paragraph: 'next-persist helps you integrate persistent client-side state with static site generation and server-side rendering with Next.js, allowing the flexibility between building dynamic, isomorphic web applications.',
  },

  blurbTwo: {
    header: 'Flexible',
    paragraph: 'Built with a Next.js environment in mind, next-persist is also compatible with React and Redux applications.',
  },

  blurbThree: {
    header: 'Declarative and semantic',
    paragraph: 'After importing next-persist, simply set up a configuration object and incorporate two functions. We do the rest, delivering you the benefits of SSG and SSR with state persistence.',
  },
}
