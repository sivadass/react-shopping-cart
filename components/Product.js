import React, {Component} from 'react';

class Product extends Component{
	constructor(props){
		super(props);
        this.state = {
            selectedProduct: {}
        }
        //let textInput = null;
	}

    addToCart(image, name, price){
        let qty = this.refs.uv.value;
        this.setState({
            selectedProduct: {
                image: image,
                name: name,
                price: price,
                quantity: qty
            }
        }, function(){
            this.props.addToCart(this.state.selectedProduct);
            this.refs.uv.value = 1;
        })
    }

    render(){
        let image = this.props.image;
        let name = this.props.name;
        let price = this.props.price;
        //let quantity = this.refs.input;
        return(
            <div className="product">
                <img className="product-image" src={image} alt={this.props.name}/>
                <h4 className="product-name">{this.props.name}</h4>
                <p className="product-price">{this.props.price}</p>
                <div className="stepper-input">
                    <a href="#" className="decrement">-</a>
                    <input ref="uv" type="number" defaultValue="1" className="quantity"/>
                    <a href="#" className="increment">+</a>
                </div>
                <div className="product-action">
                    <button onClick={this.addToCart.bind(this, image, name, price)}>ADD TO CART</button>
                </div>
            </div>
        )
    }
}

export default Product;