import React from 'react'
import Checkout from './Checkout';
import { useState } from 'react';
export default function Cart(props) {

   const { cartItems, addToCart, removeFromCart } = props;
   let itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
   const [ checkout, setCheckout ] = useState('');
  
      function check(id,qty){
       
  
        if(id === '2' && qty % 3 === 0){
           itemsPrice = itemsPrice - 9.97;
        }
        
        else if(id === '4' && qty % 2 === 0){
          itemsPrice = itemsPrice - 4.98; 
        }
      }

      function both(item, id, qty){
        check(id, qty);
        addToCart(item);
      }

  return (
    <aside className='cart'>
        <h2>Cart Items</h2>
        <div>
            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item) => (
              <div key={item.id} className="basket-add" >
                  <div>{item.name}</div>
                  <div>
                    {check(item.id, item.qty, item.price)}
                      <button onClick={() => both(item, item.id, item.qty)} className="addBtn">+</button>
                      <button onClick={() => removeFromCart(item)} className="removeBtn">-</button>
                      
                  </div>
                  <div>{item.qty} x {item.price.toFixed(2)}€</div>
              </div>
            ))}
            <hr />
            <div className='total'>Total: {itemsPrice.toFixed(2)}€</div>
            <br />
            <button onClick={() => setCheckout('checkout')}>Checkout</button>
      
        <a className='rmv' href="/#checkout">{checkout === "checkout" && <Checkout cartItems={cartItems} total={itemsPrice} />}</a>
        </div>
    </aside>
  )
}
