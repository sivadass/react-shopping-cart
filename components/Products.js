import React, {Component} from 'react';
import Product from './Product';
import LoadingProducts from '../loaders/Products';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Products extends Component{
	constructor(){
		super();
	}
  	render(){
    	let productsData;
    	let term = this.props.searchTerm;
    	let x;
		
		function searchingFor(term){
			return function(x){
				return x.name.toLowerCase().includes(term.toLowerCase()) || !term;
			}
		}
		productsData = this.props.productsList.filter(searchingFor(term)).map(product =>{
			return(
					<Product key={product.id} price={product.price} name={product.name} image={product.image} addToCart={this.props.addToCart}/>
			)
		});

		return(
			<div className="products-wrapper">
				{productsData.length <= 0 ? <LoadingProducts /> : 
					<CSSTransitionGroup
						transitionName="fadeIn"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300} 
						component="div"
						className="products">
							{productsData}
					</CSSTransitionGroup>
				}
			</div>
		)
	}
}

export default Products;