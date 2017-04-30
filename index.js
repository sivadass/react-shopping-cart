import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Products from './components/Products';
import Footer from './components/Footer';

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
          name: "Brocolli - 1 Kg",
          price: 120,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/broccoli.jpg"
        },
        {
          id: 2,
          name: "Cauliflower - 1 Kg",
          price: 60,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544035/dummy-products/cauliflower.jpg"
        },
        {
          id: 3,
          name: "Cucumber - 1 Kg",
          price: 48,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544035/dummy-products/cucumber.jpg"
        },
        {
          id: 4,
          name: "Beetroot - 1 Kg",
          price: 32,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544035/dummy-products/beetroot.jpg"
        },
        {
          id: 5,
          name: "Carrot - 1 Kg",
          price: 56,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/carrots.jpg"
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
        <Header />
        <Products productsList={this.state.products} />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);