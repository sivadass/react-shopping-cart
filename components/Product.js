import React, {Component} from 'react';
import Counter from './counter';

class Product extends Component{
	constructor(props){
		super(props);
        this.state = {
            selectedProduct: {},
        }
	}

    addToCart(image, name, price, id, quantity){
        this.setState({
            selectedProduct: {
                image: image,
                name: name,
                price: price,
                id: id,
                quantity: quantity
            }
        }, function(){
            this.props.addToCart(this.state.selectedProduct);
        })
    }
    render(){
        let image = this.props.image;
        let name = this.props.name;
        let price = this.props.price;
        let id = this.props.id;
        let quantity = this.props.productQuantity;
        return(
            <div className="product">
                <img className="product-image" src={image} alt={this.props.name}/>
                <h4 className="product-name">{this.props.name}</h4>
                <p className="product-price">{this.props.price}</p>
                <Counter productQuantity={quantity} updateQuantity={this.props.updateQuantity}/>
                <div className="product-action">
                    <button onClick={this.addToCart.bind(this, image, name, price, id, quantity)}>ADD TO CART</button>
                </div>
            </div>
        )
    }
}

export default Product;