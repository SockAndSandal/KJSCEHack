import React, {Component} from "react"
import ReactDOM from "react-dom"
import Sketch from 'react-p5';
import "./DrawArea.css";

class DrawArea extends Component {
  state = {
    sketch: React.createRef(),
    refresh:false,
    generating: false,
  }

  componentDidMount(){

  }
  
  handleGenerate = (p5) => {
    if(this.state.generating){
      var img_b64 = this.state.sketch.current.sketch.canvas.toDataURL();
      console.log(JSON.stringify({imageBase64: img_b64}));
      this.setState({generating: true}, () => {
        fetch("http://localhost:5000/", {
        method: "POST",
        body: JSON.stringify({imageBase64: img_b64}),
        headers: {
          'Content-Type': 'application/json'
        },
      })
        .then((rep) => rep.json())
        .then((rep) => {console.log(rep); this.props.setImg(rep); this.setState({generating: false})});
      })
    }
  }

  handleRefresh = (p5) => {
    if(this.state.refresh){
      p5.clear();
      p5.background(250);
      this.setState({refresh:false});
    }
  }

  handleClick = (p5) => {
    if(this.state.refresh){
      this.handleRefresh(p5);
    } else if(this.state.generating){
      this.handleGenerate(p5);
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
      <button className="retro" onClick={()=>{this.setState({generating:true})}}>
        {this.state.generating ? 'Generating...' : '💡 Generate Image'}
      </button>
      <Sketch ref={this.state.sketch} setup={this.setup} draw={this.draw} mousePressed={this.handleClick}  />
      </div>
    );
  }
}
  
  
export default DrawArea;
  