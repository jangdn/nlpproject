import React, {Component} from 'react'
import axios from 'axios'


const style = {
  DataInput : {
    height: '30%',
    //backgroundColor: 'black',
  },
  DataInputForm : {
    display : 'flex',
    flexDirection : 'column',
    width : '80%',
    height: '30%',
  },
  rate : {
    width : '350px',
    height : '20px',
    background : 'black'

  },
  textareaInput : {
    width : '100%',
    height : '60%'
  },
  textInput : {
    width : '100%',
  }
}



class DataInput extends Component {
  state = {
    title : '',
    content : '',
    percentage : 0,
  }


  _handleSubmit(e) {
    e.preventDefault();
    //console.log(this.state.title, this.state.content);
    let data = {}
    data['title'] =  this.state.title;
    data['content'] =  this.state.content;
    //console.log(data)
    
    axios
    .post('http://localhost:5000/api/data', data)
    .then(res => {
      //console.log(res)
    })
   
    let playrate = setInterval(() => { 
      axios.get('http://localhost:5000/api/datarate')
      .then(res => {
        if (res.data >= 100)
          clearInterval(playrate);
        //console.log(res.data);
        this.setState({ percentage : res.data });
      })}, 1000);
  }  
  
  _handleChangeTitle(e) {
    e.preventDefault();
    this.setState({
      title : e.target.value,
    })
  }

  _handleChangeContent(e) {
    e.preventDefault();
    this.setState({
      content : e.target.value,
    })
  }

  render() {
      let { percentage } = this.state;
      return (
        <div className="DataInput" style = {style.DataInput}>
          <form style = {style.DataInputForm} onSubmit={e => this._handleSubmit(e)} encType="multipart/form-data">
            <input className="textInput" style = {style.textInput} type="text" onChange={e => this._handleChangeTitle(e)}/>
            <textarea className="textareaInput" style = {style.textareaInput} type="textarea" onChange={e => this._handleChangeContent(e)}/>
            <button className="submitButton" type="submit" onClick={e => this._handleSubmit(e)}>
              Upload
            </button>
          </form>
          <div className="rate" style = {{ ...style.rate, width : `${percentage}%`}}></div>
        </div>
      );
    }
  }
  
  export default DataInput;