import React, { Component } from 'react';
import FstModel from './component/FstModel'
import SecData from './component/SecData'
import Header from './component/Header';
import { Container, Row, Col } from 'reactstrap';

const style = {
  App : {
    width : '',
    height: '100vh',
  },
  leftCol : {
    height: '90vh',
  },
  rightCol : {
    height: '90vh',
  }
}

class App extends Component {
  render() {
    return (
      <Container fluid = 'true' className = "App" style = {style.App}>
        <Row>
          <Col>
            <Header style= {style.Header}></Header>
          </Col>
        </Row>
        <Row>
          <Col xs = "8" style = {style.leftCol}>
            <FstModel></FstModel>
          </Col>
          <Col xs = "4" style = {style.rightCol}>
            <SecData></SecData>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
