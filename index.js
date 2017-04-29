import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import List from './Components/list';
import AddItem from './Components/add-item';

class App extends Component{
  constructor(){
    super();
    this.state = {
      list: []
    };
  }
  getList(){
    this.setState({
      list: [
        {
          id: 1,
          title: "Wake up at 4 AM"
        },
        {
          id: 2,
          title: "30 minutes reading"
        },
        {
          id: 3,
          title: "Pump water"
        }
      ]
    })
  }
  componentWillMount(){
    this.getList();
  }

  handleAddNewItem(newItem){
    //console.log(newItem);
    let list = this.state.list;
    list.push(newItem);
    this.setState({
      list: list
    });
  }

  render(){
    return(
      <div className="container">
        <AddItem addNewItem={this.handleAddNewItem.bind(this)}/>
        <List listData={this.state.list}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);