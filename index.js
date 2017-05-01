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
			cart: []
		};
	}
  
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