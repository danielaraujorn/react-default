import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class ToRender extends Component {
  render() {
    return (
        <App/>
    );
  }
}

ReactDOM.render(<ToRender />, document.getElementById('root'));
