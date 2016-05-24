import React, { Component } from 'react';
import themeable from 'react-themeable';

export default class App extends Component {
  render() {
    const theme = themeable(this.props.theme);
    console.log(theme);
    return (
      <div >
        <div {...theme(1, 'default')}>default theme</div>
        <div {...theme(2, 'dark')}>dark</div>
        <div {...theme(3, 'light')}>light</div>
      </div>
    );
  }
}
