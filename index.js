import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header';
import Products from './components/Products';
import Pagination from './components/Pagination';
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
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/broccoli.jpg",
          category: "vegetables"
        },
        {
          id: 2,
          name: "Cauliflower - 1 Kg",
          price: 60,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544035/dummy-products/cauliflower.jpg",
          category: "vegetables"
        },
        {
          id: 3,
          name: "Cucumber - 1 Kg",
          price: 48,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544035/dummy-products/cucumber.jpg",
          category: "vegetables"
        },
        {
          id: 4,
          name: "Beetroot - 1 Kg",
          price: 32,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544035/dummy-products/beetroot.jpg",
          category: "vegetables"
        },
        {
          id: 5,
          name: "Carrot - 1 Kg",
          price: 56,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/carrots.jpg",
          category: "vegetables"
        },
        {
          id: 6,
          name: "Tomato - 1 Kg",
          price: 16,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544036/dummy-products/tomato.jpg",
          category: "vegetables"
        },
        {
          id: 7,
          name: "Banana - 1 Kg",
          price: 60,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/banana.jpg",
          category: "fruits"
        },
        {
          id: 8,
          name: "Malgova Mango - 1 Kg",
          price: 75,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544036/dummy-products/mango.jpg",
          category: "fruits"
        },
        {
          id: 9,
          name: "Kashmiri Apple - 1 Kg",
          price: 69,
          image: "http://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/apple.jpg",
          category: "fruits"
        },
        {
          id: 10,
          name: "Orange - 1 Kg",
          price: 68,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/carrots.jpg",
          category: "fruits"
        },
        {
          id: 11,
          name: "Strawberry - 1/4 Kg",
          price: 125,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544037/dummy-products/strawberry.jpg",
          category: "fruits"
        },
        {
          id: 12,
          name: "Almonds - 1/4 Kg",
          price: 250,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/almonds.jpg",
          category: "nuts"
        },
        {
          id: 13,
          name: "Walnuts - 1/4 Kg",
          price: 225,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544036/dummy-products/walnuts.jpg",
          category: "nuts"
        },
        {
          id: 14,
          name: "Strawberry - 1/4 Kg",
          price: 125,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/carrots.jpg",
          category: "nuts"
        },
        {
          id: 15,
          name: "Strawberry - 1/4 Kg",
          price: 125,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/carrots.jpg",
          category: "nuts"
        },
        {
          id: 16,
          name: "Strawberry - 1/4 Kg",
          price: 125,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/carrots.jpg",
          category: "nuts"
        },
        {
          id: 17,
          name: "Strawberry - 1/4 Kg",
          price: 125,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/carrots.jpg",
          category: "fruits"
        },
        {
          id: 18,
          name: "Strawberry - 1/4 Kg",
          price: 125,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/carrots.jpg",
          category: "fruits"
        },
        {
          id: 19,
          name: "Strawberry - 1/4 Kg",
          price: 125,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/carrots.jpg",
          category: "fruits"
        },
        {
          id: 20,
          name: "Strawberry - 1/4 Kg",
          price: 125,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/carrots.jpg",
          category: "fruits"
        },
        {
          id: 21,
          name: "Strawberry - 1/4 Kg",
          price: 125,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/carrots.jpg",
          category: "fruits"
        },
        {
          id: 22,
          name: "Strawberry - 1/4 Kg",
          price: 125,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/carrots.jpg",
          category: "fruits"
        },
        {
          id: 23,
          name: "Strawberry - 1/4 Kg",
          price: 125,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/carrots.jpg",
          category: "fruits"
        },
        {
          id: 24,
          name: "Strawberry - 1/4 Kg",
          price: 125,
          image: "https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/carrots.jpg",
          category: "fruits"
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
        <Pagination />
        <Footer />
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);