import React, {Component} from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap';
//import VisualData1 from './FstModel/VisualData1'

const style = {
  Header : {
    display: 'flex',
    backgroundColor : 'rgb(245,245,245)',
    flexDirection : 'column',
    width : '100%',
    height : '100%',
  }
}

class Header extends Component {
    render() {
      return (
        <div id ="Header" className="Header" style = {style.Header}>
          <Nav>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
          </Nav>
        </div>
      );
    }
  }
  
  export default Header;