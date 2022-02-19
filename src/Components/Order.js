import React from 'react'

export default function Order(props) {

 const {cartItems, total} = props;
 const removeNode = (idx) => document.querySelector(`${idx}`).remove();

  return (
    <div className='order'>Your Order
    <hr />
    
    <div className='summary'>{cartItems.map((item) => (
      <div key={item.id} >{item.name} x {item.qty} ( {item.price} €) </div>
    ))}</div>
    <br/>
    <hr />
    <div>Total: {total.toFixed(2)}€</div>
    <br />
    <br />
    <button onClick={() => window.location.reload('/')} >Go back</button>
    </div>
  )
}
