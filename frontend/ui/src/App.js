import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import Card from "react-bootstrap/Card";

function App() {
  return (
    // <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <Navbar.Brand href="#">Image</Navbar.Brand>
        </Navbar>
        <Container>
          <Row>
            <Col sm={6}>sm=8</Col>
            <Col sm={6}>
              <Card>
                <Card.Body>Content</Card.Body>
              </Card>
            </Col>
          </Row>
      </Container>
      
      </header>
    // </div>
  );
}

export default App;
