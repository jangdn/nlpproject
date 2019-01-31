import React, {Component} from 'react'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const style = {
  AnalystData : {
    
    height: '100%',

  },
  iframe : {
    width : '100%',
    height : '70%',
    background : '#ffffff'
  }
}

class AnalystData extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  state = {
      dropdownOpen: false,
      iframeSrc : 'index',
      selectGraph : 'select graph'
  };

  handleChange(e){
    e.preventDefault();
    this.setState({
      iframeSrc : e.target.value,
      selectGraph : e.target.id,
    });
    console.log(e.target.value);
    console.log(e.target.id);

  };


  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }


  render() {
  let { iframeSrc, selectGraph }= this.state;
  let $iframe = (<div></div>)
  if (iframeSrc)
  {
    $iframe = (<iframe style = {style.iframe} src = {'http://127.0.0.1:5000/api/graph/' + iframeSrc} width = '100' height = '100' />);
    console.log("call!");
  }
  return (
      <div className="AnalystData" style = {style.AnalystData}>
        <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
          <DropdownToggle caret>
            {selectGraph}
          </DropdownToggle>
          <DropdownMenu onClick = {this.handleChange}>
            <DropdownItem header>graph</DropdownItem>
            <DropdownItem value = "index" id = "context_c">context_c</DropdownItem>
            <DropdownItem value = "index2" id = "context_q">context_q</DropdownItem>
            <DropdownItem divider />
            <DropdownItem value = "index3" id = "highway_c">highway_c</DropdownItem>
            <DropdownItem divider />
            <DropdownItem value = "index4" id = "char_c">char_c</DropdownItem>
            <DropdownItem value = "index5" id = "char_q">char_q</DropdownItem>
            <DropdownItem divider />
            <DropdownItem value = "index6" id = "word_c">word_c</DropdownItem>
            <DropdownItem value = "index7" id = "word_q">word_q</DropdownItem>
            <DropdownItem divider />
            <DropdownItem value = "index8" id = "loss">loss</DropdownItem>
          </DropdownMenu>
      </ButtonDropdown>
        {$iframe}
      </div>
    );
  }
}
  
  export default AnalystData;