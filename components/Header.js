import React, {Component} from 'react';
import CartScrollBar from './CartScrollBar';

class Header extends Component{
    constructor(){
        super();
        this.state = {
            cart: false
        };
    }
    handleCart(e){
        e.preventDefault();
        this.setState({
            cart: !this.state.cart
        })
    }
    render(){
        return(
            <header>
                <div className="container">
                    <div className="brand">
                        <img className="logo" src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png" alt="Veggy Brand Logo"/>
                    </div>
                        
                    <div className="search">
                        <form action="#" method="get" className="search-form">
                            <select name="" id="" className="search-category">
                                <option>All</option>
                                <option>Vegetables</option>
                                <option>Fruits</option>
                                <option>Nuts</option>
                                <option>Spices</option>
                            </select>
                            <input type="search" name="s" id="s" placeholder="Search" className="search-keyword"/>
                        </form>
                    </div>

                    <div className="cart"> 
                        <div className="cart-info">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>No. of items</td>
                                        <td>:</td>
                                        <td><strong>7</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Sub Total</td>
                                        <td>:</td>
                                        <td><strong>288</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <a className="cart-icon" href="#" onClick={this.handleCart.bind(this)}>
                            <img src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png" alt="Cart"/>
                        </a>
                        <div className={this.state.cart ? "cart-preview active" : "cart-preview"}>
                            <CartScrollBar>
                                <ul className="cart-items">
                                    <li className="cart-item">
                                        <img className="product-image" src="https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/broccoli.jpg" />
                                        <div className="product-info">
                                            <p className="product-name">Broccoli</p>
                                            <p className="product-price">120</p>
                                        </div>
                                        <div className="stepper-input">
                                            <a href="#" className="decrement">-</a>
                                            <input type="number" defaultValue="1" className="quantity"/>
                                            <a href="#" className="increment">+</a>
                                        </div>
                                        <a className="product-remove" href="#">&times;</a>
                                    </li>
                                    <li className="cart-item">
                                        <img className="product-image" src="https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/broccoli.jpg" />
                                        <div className="product-info">
                                            <p className="product-name">Broccoli</p>
                                            <p className="product-price">120</p>
                                        </div>
                                        <div className="stepper-input">
                                            <a href="#" className="decrement">-</a>
                                            <input type="number" defaultValue="1" className="quantity"/>
                                            <a href="#" className="increment">+</a>
                                        </div>
                                        <a className="product-remove" href="#">&times;</a>
                                    </li>
                                    <li className="cart-item">
                                        <img className="product-image" src="https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/broccoli.jpg" />
                                        <div className="product-info">
                                            <p className="product-name">Broccoli</p>
                                            <p className="product-price">120</p>
                                        </div>
                                        <div className="stepper-input">
                                            <a href="#" className="decrement">-</a>
                                            <input type="number" defaultValue="1" className="quantity"/>
                                            <a href="#" className="increment">+</a>
                                        </div>
                                        <a className="product-remove" href="#">&times;</a>
                                    </li>
                                    <li className="cart-item">
                                        <img className="product-image" src="https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/broccoli.jpg" />
                                        <div className="product-info">
                                            <p className="product-name">Broccoli</p>
                                            <p className="product-price">120</p>
                                        </div>
                                        <div className="stepper-input">
                                            <a href="#" className="decrement">-</a>
                                            <input type="number" defaultValue="1" className="quantity"/>
                                            <a href="#" className="increment">+</a>
                                        </div>
                                        <a className="product-remove" href="#">&times;</a>
                                    </li>
                                    <li className="cart-item">
                                        <img className="product-image" src="https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/broccoli.jpg" />
                                        <div className="product-info">
                                            <p className="product-name">Broccoli</p>
                                            <p className="product-price">120</p>
                                        </div>
                                        <div className="stepper-input">
                                            <a href="#" className="decrement">-</a>
                                            <input type="number" defaultValue="1" className="quantity"/>
                                            <a href="#" className="increment">+</a>
                                        </div>
                                        <a className="product-remove" href="#">&times;</a>
                                    </li>
                                    <li className="cart-item">
                                        <img className="product-image" src="https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/broccoli.jpg" />
                                        <div className="product-info">
                                            <p className="product-name">Broccoli</p>
                                            <p className="product-price">120</p>
                                        </div>
                                        <div className="stepper-input">
                                            <a href="#" className="decrement">-</a>
                                            <input type="number" defaultValue="1" className="quantity"/>
                                            <a href="#" className="increment">+</a>
                                        </div>
                                        <a className="product-remove" href="#">&times;</a>
                                    </li>
                                    <li className="cart-item">
                                        <img className="product-image" src="https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/broccoli.jpg" />
                                        <div className="product-info">
                                            <p className="product-name">Broccoli</p>
                                            <p className="product-price">120</p>
                                        </div>
                                        <div className="stepper-input">
                                            <a href="#" className="decrement">-</a>
                                            <input type="number" defaultValue="1" className="quantity"/>
                                            <a href="#" className="increment">+</a>
                                        </div>
                                        <a className="product-remove" href="#">&times;</a>
                                    </li>
                                </ul>
                            </CartScrollBar>
                            <div className="action-block">
                                <button type="button">PROCEED TO CHECKOUT</button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}

export default Header;