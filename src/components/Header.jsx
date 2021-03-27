import React from "react";

const Header = (props) => {
  return (
    <header>
      <div className="container">
        <div className="brand">
          <img
            className="logo"
            src="https://res.cloudinary.com/sivadass/image/upload/v1493547373/dummy-logo/Veggy.png"
            alt="Veggy Brand Logo"
          />
        </div>

        <div className="search">
          <a
            className="mobile-search"
            href="#"
            // onClick={this.handleMobileSearch.bind(this)}
          >
            <img
              src="https://res.cloudinary.com/sivadass/image/upload/v1494756966/icons/search-green.png"
              alt="search"
            />
          </a>
          <form action="#" method="get" className="search-form">
            <a
              className="back-button"
              href="#"
              // onClick={this.handleSearchNav.bind(this)}
            >
              <img
                src="https://res.cloudinary.com/sivadass/image/upload/v1494756030/icons/back.png"
                alt="back"
              />
            </a>
            <input
              type="search"
              placeholder="Search for Vegetables and Fruits"
              className="search-keyword"
              // onChange={props.handleSearch}
            />
            <button
              className="search-button"
              type="submit"
              // onClick={this.handleSubmit.bind(this)}
            />
          </form>
        </div>

        <div className="cart">
          <div className="cart-info">
            <table>
              <tbody>
                <tr>
                  <td>No. of items</td>
                  <td>:</td>
                  <td>
                    <strong>{props.totalItems}</strong>
                  </td>
                </tr>
                <tr>
                  <td>Sub Total</td>
                  <td>:</td>
                  <td>
                    <strong>{props.total}</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <a
            className="cart-icon"
            href="#"
            // onClick={this.handleCart.bind(this)}
          >
            <img
              className={props.cartBounce ? "tada" : " "}
              src="https://res.cloudinary.com/sivadass/image/upload/v1493548928/icons/bag.png"
              alt="Cart"
            />
            {props.totalItems ? (
              <span className="cart-count">{props.totalItems}</span>
            ) : (
              ""
            )}
          </a>
          <div className="cart-preview">
            No items
            <div className="action-block">
              <button type="button" className={"disabled"}>
                PROCEED TO CHECKOUT
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
