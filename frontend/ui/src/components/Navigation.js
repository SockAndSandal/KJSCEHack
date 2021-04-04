import React, {Component} from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";

class Navigation extends Component{
	render (){
		return (
			<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          		<Navbar.Brand href="#">Pictionary.ai</Navbar.Brand>
        	</Navbar>
			
		);
	}
}

export default Navigation;