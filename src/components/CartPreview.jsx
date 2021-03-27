import React, { useContext } from "react";
import {
  CartStateContext,
  CartDispatchContext,
  removeFromCart
} from "contexts/cart";

const CartPreview = () => {
  const { items } = useContext(CartStateContext);
  const dispatch = useContext(CartDispatchContext);

  const handleRemove = (productId) => {
    return removeFromCart(dispatch, productId);
  };

  return (
    <ul className="cart-items">
      {items.map((product) => {
        return (
          <li className="cart-item" key={product.name}>
            <img className="product-image" src={product.image} />
            <div className="product-info">
              <p className="product-name">{product.name}</p>
              <p className="product-price">{product.price}</p>
            </div>
            <div className="product-total">
              <p className="quantity">
                {product.quantity} {product.quantity > 1 ? "Nos." : "No."}{" "}
              </p>
              <p className="amount">{product.quantity * product.price}</p>
            </div>
            <button
              className="product-remove"
              onClick={() => handleRemove(product.id)}
            >
              ×
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default CartPreview;
