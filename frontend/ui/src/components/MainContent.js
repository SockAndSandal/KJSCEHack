import React, {Component} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DrawArea from './DrawArea/DrawArea'

class MainContent extends Component{
	render (){
		return (
			<Container class="main" style={{marginTop: "3%"}}>
          <Row>
            <Col sm={6}>
              <h3>Canvas</h3>
            </Col>
            <Col sm={6}>
              <h3>Output</h3>
            </Col>
          </Row>
          <Row>
            <Col sm={6}>
              <Card style={{minHeight: "80vh"}}>
                <DrawArea />
              </Card>
            </Col>
            <Col sm={6}>
              <Card style={{minHeight: "80vh"}}>
                <Card.Body>
                  Content
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
			
		);
	}
}

export default MainContent;