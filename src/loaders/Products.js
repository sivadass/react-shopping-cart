import React, { Component } from 'react';
import Product from './Product';

class LoadingProducts extends Component {
	render() {
		return (
			<div className="products loading">
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
                <Product />
            </div>
		)
	}
}

export default LoadingProducts;