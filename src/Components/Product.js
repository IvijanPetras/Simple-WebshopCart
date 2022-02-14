import React from 'react'

export default function Product(props) {

    const { product, addToCart } = props;

  return (
    <div className='card'>
        <img className='img' src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <div>{product.price}</div>
        <div>
            <button onClick={() => addToCart(product)} >Add to cart</button>
        </div>
    </div>
  )
}
