import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'next/link';

import actions from '../redux/actions/actions';

const mapStateToProps = (store) => ({
  counter: store.counter,
});

const mapDispatchToProps = (dispatch) => ({
  increaseCounter: (e) => {
    dispatch(actions.increaseCounter());
  },
  decreaseCounter: (e) => {
    dispatch(actions.decreaseCounter());
  },
});

class counter extends Component {
  render() {
    return (
      <div>
        <h1>This is the Counter Page</h1>
        <h4>Counter: {this.props.counter}</h4>
        <div>
          <button
            onClick={(e) => {
              this.props.increaseCounter(e);
            }}
          >
            +
          </button>
          <button
            onClick={(e) => {
              this.props.decreaseCounter(e);
            }}
          >
            -
          </button>
        </div>
        <Link href="/demo">
          <a>Back to Demo</a>
        </Link>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(counter);
