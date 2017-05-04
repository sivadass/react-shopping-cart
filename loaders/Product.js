import React, { Component } from 'react';

class LoadingProducts extends Component {
	
	render() {
		return (
			<div className="products loading">
                <div className="product animated-background">LOADING...</div>
                <div className="product animated-background">LOADING...</div>
                <div className="product animated-background">LOADING...</div>
                <div className="product animated-background">LOADING...</div>
                <div className="product animated-background">LOADING...</div>
                <div className="product animated-background">LOADING...</div>
                <div className="product animated-background">LOADING...</div>
                <div className="product animated-background">LOADING...</div>
            </div>
		)
	}
}

export default LoadingProducts;