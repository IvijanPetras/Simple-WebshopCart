import React from 'react';
import Product from './Product';

export default function Main(props) {

    const { products, addToCart } = props;
  return (
    <div>
        <h2>Products</h2>
        <div className='product-container'>
            {products.map((product) => (
                <Product key={product.id} product={product} addToCart={addToCart}/>
            ))}
        </div>
    </div>
  )
}
