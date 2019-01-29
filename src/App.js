import React, { Component } from 'react';
import FstModel from './component/FstModel'
import SecData from './component/SecData'
import Header from './component/Header';

const style = {
  App : {
    display: 'flex',
    flexDirection: 'row',
    height: '1000px',
  }
}

class App extends Component {
  render() {
    return (
      <div className="App" style = {style.App}>
        <Header></Header>
        <FstModel></FstModel>
        <SecData></SecData>
      </div>
    );
  }
}

export default App;
