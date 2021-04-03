import React, {Component, useState} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import DrawArea from './DrawArea/DrawArea'

function MainContent(){
    const [generatedImg, setImg] = useState("");
		return (
			<Container className="main" style={{marginTop: "3%"}}>
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
                <DrawArea generateImg={setImg}/>
              </Card>
            </Col>
            <Col sm={6}>
              <Card style={{minHeight: "80vh"}}>
                <Card.Body>
                  {generatedImg === "" ? "Content" : generatedImg}
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
		);
}

export default MainContent;