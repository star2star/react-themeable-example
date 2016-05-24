import React, { Component } from 'react';
import themeable from 'react-themeable';

export default class App extends Component {
  render() {
    const theme = themeable(window.theme.themes);
    console.log( {...theme(1, 'default')} );
    return (
      <div >
        <div {...theme(1, 'default')}>default theme</div>
        <div {...theme(2, 'dark')}>dark</div>
        <div {...theme(3, 'light')}>light</div>
        <div {...theme(4, 'custom')}>custom</div>
        <div {...theme(5, window.theme.value )}>this is what the default theme is .... </div>
      </div>
    );
  }
}
