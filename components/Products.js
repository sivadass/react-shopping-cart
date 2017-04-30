import React, {Component} from 'react';
import Product from './Product';

class Products extends Component{
  constructor(){
    super();
  }
  render(){
    let productsData;
    productsData = this.props.productsList.map(product =>{
        return(
            <Product key={product.id} price={product.price} name={product.name} image={product.image}/>
        )
    });
    return(
      <div className="products">
          {productsData}
      </div>
    )
  }
}

export default Products;