import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class CartScrollBar extends Component{
  constructor(props){
    super(props);
    //this.handleWindowWheel = this.handleWindowWheel.bind(this); 
  }
  componentDidMount() {
    window.addEventListener("mouseWheel", this.handleWindowWheel.bind(this), false);
    console.log("crossed... event")
  }
  componentWillUnmount() {
    console.log("crossed... 2nd event")
    window.removeEventListener("mouseWheel", this.handleWindowWheel);
  }
  handleWindowWheel(event) {
    console.log("hey ....")
    //const { top } = this.refs.scrollbars.getValues(); 
    //console.log(top);
    // When the bottom is reached and we're scrolling down, prevent scrolling of the window
    //if (top >= 1 && event.deltaY > 0) event.preventDefault();
    //alert("hello");
  }
  render(){
    return(
      <Scrollbars style={{ width: 360, height: 320 }} ref="scrollbars">
        {this.props.children}
      </Scrollbars>
    )
  }
}

export default CartScrollBar;