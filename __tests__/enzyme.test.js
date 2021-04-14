import React from 'react';
import { Provider } from 'react-redux';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import configureStore from 'redux-mock-store';

import Counter from '../components/Counter.jsx';
import LightSwitch from '../components/LightSwitch.jsx';
import Timer from '../components/Timer.jsx';
import UserInfo from '../components/UserInfo.jsx';

configure({ adapter: new Adapter() });
const mockStore = configureStore();

describe('React demo unit tests', () => {
  describe('Counter', () => {
    let wrapper;
    const props = { counter: 0 };

    beforeAll(() => {
      wrapper = shallow(<Counter {...props} />);
    });

    it('renders a <div> with an <h3> title and a <h4> body holding the counter', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.find('h3').text()).toMatch(
        'This is the Counter Component'
      );
      expect(wrapper.find('h4').text()).toMatch(`Counter: ${props.counter}`);
    });
  });

  describe('Light Switch', () => {
    let wrapper;
    const props = { lightStatus: false };

    beforeAll(() => {
      wrapper = shallow(<LightSwitch {...props} />);
    });

    it('renders a <div> with an <h3> title and a <h4> body holding the light switch', () => {
      let lightStatus = '';
      if (props.lightStatus) {
        lightStatus = 'On';
      } else {
        lightStatus = 'Off';
      }

      expect(wrapper.type()).toEqual('div');
      expect(wrapper.find('h3').text()).toMatch(
        'This is the Light Switch Component'
      );
      expect(wrapper.find('h4').text()).toMatch(`Light Switch: ${lightStatus}`);
    });
  });

  xdescribe('Timer', () => {
    let wrapper;
    let innerWrapper;

    const initialState = { initialTime: new Date(), currentTime: new Date() };
    const demo = mockStore(initialState);

    beforeAll(() => {
      wrapper = mount(
        <Provider store={store}>
          <Timer />
        </Provider>
      );
    });

    it('renders a <div> with an <h3> title and a <h4> body holding the timer', () => {
      const { currentTime, initialTime } = store.getState();
      innerWrapper = wrapper.childAt(0).childAt(0);
      expect(innerWrapper.type()).toEqual('div');
      expect(innerWrapper.find('h3').text()).toMatch(
        'This is the Timer Component'
      );
      expect(innerWrapper.find('h4').text()).toMatch(
        `Time Passed: ${currentTime - initialTime}`
      );
    });
  });

  describe('User Info', () => {
    let wrapper;
    const props = { username: 'Alien', userIcon: '👽' };

    beforeAll(() => {
      wrapper = shallow(<UserInfo {...props} />);
    });

    it('renders a <div> with an <h3> title and a <h4> body holding the counter', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.find('h3').text()).toMatch(
        'This is the User Info Component'
      );
      expect(wrapper.find('h4').text()).toMatch(
        `Username: ${props.username} - ${props.userIcon}`
      );
    });
  });
});
