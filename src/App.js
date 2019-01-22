import React, { Component } from 'react';
import FstModel from './component/FstModel'
import SecData from './component/SecData'

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
        <FstModel></FstModel>
        <SecData></SecData>
      </div>
    );
  }
}

export default App;
