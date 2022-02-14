import React from 'react'
export default function Cart(props) {

   const { cartItems, addToCart, removeFromCart } = props;
   const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
   

  return (
    <aside className='cart'>
        <h2>Cart Items</h2>
        <div>
            {cartItems.length === 0 && <div>Cart is empty</div>}
            {cartItems.map((item) => (
              <div key={item.id} className="basket-add" >
                  <div>{item.name}</div>
                  <div>
                      <button onClick={() => addToCart(item)} className="addBtn">+</button>
                      <button onClick={() => removeFromCart(item)} className="removeBtn">-</button>
                  </div>
                  <div>{item.qty} x {item.price.toFixed(2)}€</div>
              </div>
              
              
              
            ))}
            <hr />
            <div className='total'>Total: {itemsPrice.toFixed(2)}€</div>
        </div>
    </aside>
  )
}
