import React, {Component} from 'react'

const style = {
  AnalystData : {
    
    height: '40%',

  },
  iframe : {
    width : '100%',
    height : '90%',
    background : '#ffffff'
  }
}

class AnalystData extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  state = {
    iframeSrc : 'context_c'
  };

  handleChange(e){
    e.preventDefault();
    this.setState({
      iframeSrc : e.target.value,
    });
  };

  render() {
  let { iframeSrc }= this.state;
  return (
      <div className="AnalystData" style = {style.AnalystData}>
        <select onChange={this.handleChange}>
          <option value="context_c">context_c</option>
          <option value="context_q">context_q</option>
          <option value="highway_c">highway_c</option>
          <option value="char_c">char_c</option>
          <option value="char_q">char_q</option>
          <option value="word_c">word_c</option>
          <option value="word_q">word_q</option>
          <option value="loss">loss</option>
        </select>
        <iframe style = {style.iframe} src = {'http://localhost:3001/' + iframeSrc}/>
        {/* <iframe style = {style.iframe} src="graph1.html"></iframe> */}
      </div>
    );
  }
}
  
  export default AnalystData;