import React, {Component} from 'react';

const Header = (props) =>{
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
                        <input type="search" name="s" id="s" placeholder="Search" maxlength="200" className="search-keyword"/>
                    </form>
                </div>

                <div className="cart"> 
                    <div className="cart-info">
                        <table>
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
                        </table>
                    </div>
                    <div className="cart-icon">
                        <img src="http://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png" alt="Cart"/>
                    </div>
                    <div className="cart-preview">
                        <ul>
                            <li>
                                <img src="https://res.cloudinary.com/sivadass/image/upload/v1493544034/dummy-products/broccoli.jpg" />
                                <p>Broccoli</p>
                                <div className="stepper-input">
                                    <a href="#" className="decrement">-</a>
                                    <input type="number" defaultValue="1" className="quantity"/>
                                    <a href="#" className="increment">+</a>
                                </div>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
};

export default Header;