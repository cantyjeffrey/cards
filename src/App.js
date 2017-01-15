import React, { Component } from 'react';
import CSSModules from 'react-css-modules';
import styles from './App.css';
import Card from './Card';

class App extends Component {
  render() {
    return (
      <div styleName="App">
        <Card />
      </div>
    );
  }
}

export default CSSModules(App, styles);
