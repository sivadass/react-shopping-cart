import React, {Component} from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class CartScrollBar extends Component{
  constructor(props){
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount(){
    window.removeEventListener('scroll', this.handleScroll);
  }
  handleScroll(event) {
    const positions = this.refs.scrollbars.getValues();
    //When the bottom is reached and we're scrolling down, prevent scrolling of the window
    if (positions.top >= 1){
      console.log("Reached scroll end!");
      event.stopPropagation();
    }
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