import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class AddItem extends Component{
  constructor(){
    super();
    this.state = {
        newItem:{}
    }
  }
  handleAddItem(e){
    let staticID = 5;
    if (this.refs.inputTask.value === ""){
      alert("Title can't be empty.");    
    } else {
      this.setState({
          newItem: {
              id: staticID,
              title: this.refs.inputTask.value
          }
      }, function(){
        staticID++;
        this.props.addNewItem(this.state.newItem);
      });
    }
    e.preventDefault();
  }
  render(){
    return(
      <form onSubmit={this.handleAddItem.bind(this)}>
          <input type="text" placeholder="Enter a task" ref="inputTask"/>
          <button type="submit">Add Item</button> 
      </form>
    )
  }
}

export default AddItem;