import React, {Component} from 'react'
//import VisualData1 from './FstModel/VisualData1'
import VisualData2 from './FstModel/VisualData2'
import VisualData3 from './FstModel/VisualData3'

const style = {
  FstModel : {
    display: 'flex',
    flexDirection : 'column',
    backgroundColor : 'burlywood',
    width : '100%',
    height : '100%',
  }
}

class FstModel extends Component {
    render() {
      return (
        <div id ="FstModel" className="FstModel" style = {style.FstModel}>
          {/* {<VisualData1></VisualData1>} */}
          <VisualData2></VisualData2>
          <VisualData3></VisualData3>
        </div>
      );
    }
  }
  
  export default FstModel;