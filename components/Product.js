import React, {Component} from 'react';

const Product = (props) =>{
    return(
        <div className="product">
            <img className="product-image" src={props.image} alt={props.name}/>
            <h4 className="product-name">{props.name}</h4>
            <p className="product-price">{props.price}</p>
            <div className="stepper-input">
                <a href="#" className="decrement">-</a>
                <input type="number" defaultValue="1" className="quantity"/>
                <a href="#" className="increment">+</a>
            </div>
            <div className="product-action">
                <button>ADD TO CART</button>
            </div>
        </div>
    )
};

export default Product;