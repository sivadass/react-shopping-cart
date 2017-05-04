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
			totalItems: 0,
			totalAmount: 0, 
			term: '',
			category: '',
			cartBounce: false
		};
		this.handleSearch = this.handleSearch.bind(this);
		this.handleCategory = this.handleCategory.bind(this);
		this.handleAddToCart = this.handleAddToCart.bind(this);
		this.sumTotalItems = this.sumTotalItems.bind(this);
		this.sumTotalAmount = this.sumTotalAmount.bind(this);
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
			cart : cartItem,
			cartBounce: true
		}, function(){
			console.log(this.state.cart);
		});
		setTimeout(function(){
             this.setState({cartBounce:false});
        }.bind(this),1000);  
		this.sumTotalItems(this.state.cart);
		this.sumTotalAmount(this.state.cart);
	}
	sumTotalItems(){
        let total = 0;
        let cart = this.state.cart;
        for (var i=0; i<cart.length; i++) {
            total += parseInt(cart[i].quantity);
        }
		this.setState({
			totalItems: total
		})
    }
	sumTotalAmount(){
        let total = 0;
        let cart = this.state.cart;
        for (var i=0; i<cart.length; i++) {
            total += cart[i].price;
        }
		this.setState({
			totalAmount: total
		})
    }
	render(){
		return(
			<div className="container">
				<Header cartBounce={this.state.cartBounce} total={this.state.totalAmount} totalItems={this.state.totalItems} cartItems={this.state.cart} handleSearch={this.handleSearch} handleCategory={this.handleCategory} categoryTerm={this.state.category}/>
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