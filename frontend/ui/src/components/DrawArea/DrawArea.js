import React, {Component} from "react"
import ReactDOM from "react-dom"
import Sketch from 'react-p5';
import "./DrawArea.css";

class DrawArea extends Component {
  state = {
    sketch: React.createRef(),
    refresh:false,
  }

  componentDidMount(){

  }

  handleRefresh = (p5) => {
    if(this.state.refresh){
      p5.clear();
      p5.background(250);
      this.setState({refresh:false});
    }
  }

  setup = (p5, parentRef) => {
		p5.createCanvas(500, 500).parent(parentRef);
		p5.background(250);
	};

  mouseDragged = (p5) => {
    p5.ellipse(p5.mouseX,p5.mouseY,10,10);
    return false;
  }
	draw = (p5) => {
    p5.stroke(0);
    if (p5.mouseIsPressed === true) {
      p5.line(p5.mouseX, p5.mouseY, p5.pmouseX, p5.pmouseY);
    }
	};
  render(){
    return (
      <div>
      <button className="retro" onClick={()=>{this.setState({refresh:true})}}>🔄 Refresh</button>
      <button className="retro">💡 Generate Image</button>
      <Sketch ref={this.state.sketch} setup={this.setup} draw={this.draw} mousePressed={this.handleRefresh}  />
      </div>
    );
  }
}
  
  
export default DrawArea;
  