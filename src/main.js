import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const theme = {
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
  }
};

ReactDom.render(<App theme={theme}/>, document.getElementById('app'));
