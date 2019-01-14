import React, {Component} from 'react'

const style = {
  DataInput : {
    height: '30%',
  }
}

class DataInput extends Component {
    render() {
      return (
        <div className="DataInput" style = {style.DataInput}>
          DataInput
        </div>
      );
    }
  }
  
  export default DataInput;