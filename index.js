import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Header from './components/Header';
import Products from './components/Products';
import Pagination from './components/Pagination';
import Footer from './components/Footer';

class App extends Component{
	constructor(){
		super();
		this.state = {
			products: [],
			cart: [],
			term: '',
			category: ''
		};
		this.handleSearch = this.handleSearch.bind(this);
		this.handleCategory = this.handleCategory.bind(this);
		this.handleAddToCart = this.handleAddToCart.bind(this);
		this.sumTotalItems = this.sumTotalItems.bind(this);
	}
	// Fetch Initial Set of Products from external API
	getProducts(){
		let url = "https://api.myjson.com/bins/b1jrd";
		axios.get(url)
			.then(response => {
				this.setState({
					products : response.data
				})
			})
	}
	componentWillMount(){
		this.getProducts();
	}

	// Search by Keyword
	handleSearch(event){
		this.setState({term: event.target.value});
	}
	// Filter by Category
	handleCategory(event){
		this.setState({category: event.target.value});
		console.log(this.state.category);
	}
	// Add to Cart
	handleAddToCart(selectedProducts){
		let cartItem = this.state.cart;
		cartItem.push(selectedProducts);
		this.setState({
			cart : cartItem
		}, function(){
			console.log(this.state.cart);
		});
		this.sumTotalItems(this.state.cart);
	}
	sumTotalItems(){
        let total = 0;
        let cart = this.state.cart;
        for (var i=0; i<cart.length; i++) {
            total += cart[i].quantity;
        }
        console.log(total);
    }
	render(){
		return(
			<div className="container">
				<Header cartItems={this.state.cart} handleSearch={this.handleSearch} handleCategory={this.handleCategory} categoryTerm={this.state.category}/>
				<Products productsList={this.state.products} searchTerm={this.state.term} addToCart={this.handleAddToCart}/>
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