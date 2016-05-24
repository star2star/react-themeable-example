import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

window.theme = {
  value: 'dark',
  themes: {
    default: {
      color: 'white',
      backgroundColor: 'blue',
      fontSize: '30px'
    },
    light: {
      color: 'gray',
      backgroundColor: 'white',
      fontSize: '30px'
    },
    dark: {
      color: 'gray',
      backgroundColor: 'black',
      fontSize: '30px'
    },
    custom: {
      color: 'yellow',
      backgroundColor: 'green',
      fontSize: '40px'
    }
  }
};

ReactDom.render(<App />, document.getElementById('app'));
