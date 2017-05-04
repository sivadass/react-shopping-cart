import React, {Component} from 'react';
import Counter from './counter';

class Product extends Component{
	constructor(props){
		super(props);
        this.state = {
            selectedProduct: {},
            quantity: 1
        }
	}

    addToCart(image, name, price, quantity){
        this.setState({
            selectedProduct: {
                image: image,
                name: name,
                price: price,
                quantity: quantity
            }
        }, function(){
            this.props.addToCart(this.state.selectedProduct);
            console.log("hello");
            this.setState({
                quantity: 1
            })
        })
    }

    render(){
        let image = this.props.image;
        let name = this.props.name;
        let price = this.props.price;
        let quantity = this.state.quantity;
        return(
            <div className="product">
                <img className="product-image" src={image} alt={this.props.name}/>
                <h4 className="product-name">{this.props.name}</h4>
                <p className="product-price">{this.props.price}</p>
                <Counter quantity={this.state.quantity}/>
                <div className="product-action">
                    <button onClick={this.addToCart.bind(this, image, name, price, quantity)}>ADD TO CART</button>
                </div>
            </div>
        )
    }
}

export default Product;