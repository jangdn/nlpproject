import React, {Component} from 'react'
import axios from 'axios'
import { Button, Form, FormGroup, Label, Input, Spinner } from 'reactstrap';

const style = {
  DataInput : {
    height: '50%',
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
  },
  FormGroup : {
    display : 'flex',
    flexDirection : 'row',
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
      let $spinner;
      if(percentage !== 100 & percentage !== 0)
        $spinner = 
        (
          <div style = {{marginLeft : '20px'}}>
            <Spinner color="secondary" />
          </div>
        )
      else
        $spinner = (
          <div></div>
        )

      return (
        <div className="DataInput" style = {style.DataInput}>
        <Form>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input type="title" className="title" id="title" placeholder="enter the title" onChange={e => this._handleChangeTitle(e)}/>
          </FormGroup>
          <FormGroup>
            <Label for="contents">Contents</Label>
            <Input type="textarea" className="contents" placeholder="enter the contents" onChange={e => this._handleChangeContent(e)}/>
          </FormGroup>
          <FormGroup>
            <Label for="question">Select Question</Label>
            <Input type="select" className="question" multiple>
              <option value = "How old is him?">How old is him?</option>
              <option value = "Where is her?">Where is her?</option>
              <option value = "ddu ru ddu ru ddu">ddu ru ddu ru ddu</option>
            </Input>
          </FormGroup>
          <FormGroup style = {style.FormGroup}>
            <Button className="submitButton" onClick={e => this._handleSubmit(e)}>Submit</Button> {$spinner}
          </FormGroup>
        </Form>
          {/* <form style = {style.DataInputForm} onSubmit={e => this._handleSubmit(e)} encType="multipart/form-data">
            <input className="textInput" style = {style.textInput} type="text" onChange={e => this._handleChangeTitle(e)}/>
            <textarea className="textareaInput" style = {style.textareaInput} type="textarea" onChange={e => this._handleChangeContent(e)}/>
            <button className="submitButton" type="submit" onClick={e => this._handleSubmit(e)}>
              Upload
            </button>
          </form> */}
          {/* <div className="rate" style = {{ ...style.rate, width : `${percentage}%`}}></div> */}
        </div>
      );
    }
  }
  
  export default DataInput;