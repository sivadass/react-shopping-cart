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
			term: ''
		};
		this.handleSearch = this.handleSearch.bind(this);
		this.handleCategory = this.handleCategory.bind(this);
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
		console.log(this.state.term);
	}
	// Filter by Category
	handleCategory(){
		console.log("Filter by Category");
	}
	render(){
		return(
			<div className="container">
				<Header handleSearch={this.handleSearch} handleCategory={this.handleCategory}/>
				<Products productsList={this.state.products} searchTerm={this.state.term}/>
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