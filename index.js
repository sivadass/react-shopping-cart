import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Products from './components/Products';

class App extends Component{
  constructor(){
    super();
    this.state = {
      products: []
    };
  }
  getProducts(){
    this.setState({
      products: [
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
    this.getProducts();
  }
  render(){
    return(
      <div className="container">
        <h1>React Shopping Cart</h1>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);