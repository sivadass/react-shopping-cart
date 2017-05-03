import React, {Component} from 'react';
import CartScrollBar from './CartScrollBar';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';

class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            showCart: false,
            cart: this.props.cartItems
        };
    }
    handleCart(e){
        e.preventDefault();
        this.setState({
            showCart: !this.state.showCart
        })
    }
    render(){
        let cartItems;
        cartItems = this.state.cart.map(product =>{
			return(
				<li className="cart-item" key={product.name}>
                    <img className="product-image" src={product.image} />
                    <div className="product-info">
                        <p className="product-name">{product.name}</p>
                        <p className="product-price">{product.price}</p>
                    </div>
                    <div className="stepper-input">
                        <a href="#" className="decrement">-</a>
                        <input type="number" defaultValue={product.quantity} className="quantity"/>
                        <a href="#" className="increment">+</a>
                    </div>
                    <a className="product-remove" href="#">&times;</a>
                </li>
			)
		});
        return(
            <header>
                <div className="container">
                    <div className="brand">
                        <img className="logo" src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png" alt="Veggy Brand Logo"/>
                    </div>
                        
                    <div className="search">
                        <form action="#" method="get" className="search-form">
                            <select className="search-category" onChange={this.props.handleCategory.bind(this)}  defaultValue={this.props.categoryTerm}>
                                <option value="all">All</option>
                                <option value="vegetables">Vegetables</option>
                                <option value="fruits">Fruits</option>
                                <option value="nuts">Nuts</option>
                            </select>
                            <input type="search" name="s" id="s" placeholder="Search" className="search-keyword" onChange={this.props.handleSearch}/>
                        </form>
                    </div>

                    <div className="cart"> 
                        <div className="cart-info">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>No. of items</td>
                                        <td>:</td>
                                        <td><strong>{this.props.totalItems}</strong></td>
                                    </tr>
                                    <tr>
                                        <td>Sub Total</td>
                                        <td>:</td>
                                        <td><strong>{this.props.total}</strong></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <a className="cart-icon" href="#" onClick={this.handleCart.bind(this)}>
                            <img src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png" alt="Cart"/>
                        </a>
                        <div className={this.state.showCart ? "cart-preview active" : "cart-preview"}>
                            <CartScrollBar>
                                <CSSTransitionGroup
                                    transitionName="fadeIn"
                                    transitionEnterTimeout={500}
                                    transitionLeaveTimeout={300} 
                                    component="ul"
                                    className="cart-items">
                                        {cartItems}
				                </CSSTransitionGroup>
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