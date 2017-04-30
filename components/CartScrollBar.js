import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class CartScrollBar extends Component{
  constructor(){
    super();
    this.handleWindowWheel = this.handleWindowWheel.bind(this); 
  }
  componentDidMount() {
    window.addEventListener("mousewheel", this.handleWindowWheel, false);
  }
  componentWillUnmount() {
    window.removeEventListener("mousewheel", this.handleWindowWheel);
  }
  handleWindowWheel(event) {
    const { top } = this.refs.scrollbars.getValues();
    // When the bottom is reached and we're scrolling down, prevent scrolling of the window
    if (top >= 1 && event.deltaY > 0) event.preventDefault();
  }
  render(){
    return(
      <Scrollbars style={{ width: 360, height: 320 }} ref="scrollbars" {...this.props}/>
    )
  }
}

export default CartScrollBar;