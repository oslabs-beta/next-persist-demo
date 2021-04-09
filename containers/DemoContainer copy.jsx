import React, { Component } from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

import { Counter, LightSwitch, Timer, UserInfo } from '../components';

const mapStateToProps = (store) => ({
  counter: store.counter,
  lightSwitch: store.lightSwitch,
  initialTime: store.initialTime,
  username: store.username,
  userImage: store.userImage,
});

class DemoContainer extends Component {
  render() {
    return (
      <div>
        <h2>This is the Demo Container</h2>
        <Link href="/counter">
          <a>
            <Counter
              counter={this.props.counter}
              // increaseCounter={this.props.increaseCounter}
              // decreaseCounter={this.props.decreaseCounter}
            />
          </a>
        </Link>
        <Link href="/lightswitch">
          <a>
            <LightSwitch lightSwitch={this.props.lightSwitch} />
          </a>
        </Link>
        <Link href="/timer">
          <a>
            <Timer initialTime={this.props.initialTime} />
          </a>
        </Link>
        <Link href="/userinfo">
          <a>
            <UserInfo
              username={this.props.username}
              userImage={this.props.userImage}
            />
          </a>
        </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps)(DemoContainer);
