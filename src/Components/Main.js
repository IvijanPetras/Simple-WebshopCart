import React from 'react';
import Product from './Product';

export default function Main(props) {

    const { products, addToCart } = props;
  return (
    <div className='main'>
        <h2>Products</h2>
        <h4>Special offer: <br/>
        2 Smoke Sensors for 35.00 EUR <br/> 
        3 Motion sensors for 65.00 EUR</h4>
        <div className='product-container'>
            {products.map((product) => (
                <Product key={product.id} product={product} addToCart={addToCart}/>
            ))}
        </div>
    </div>
  )
}
