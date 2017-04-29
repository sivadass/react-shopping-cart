import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class ListItem extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <li>{this.props.title}</li>
    )
  }
}

export default ListItem;