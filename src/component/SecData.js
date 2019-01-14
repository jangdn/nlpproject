import React, {Component} from 'react'
import AnalystData from './SecData/AnalystData'
import DataInput from './SecData/DataInput'

const style = {
  SecData : {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'beige',
    width : '40%',
    height : '100%',
  }
}

class SecData extends Component {
    render() {
      return (
        <div className="SecData" style = {style.SecData}>
            <DataInput></DataInput>
            <AnalystData></AnalystData>
        </div>
      );
    }
  }
  
  export default SecData;