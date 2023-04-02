import React from 'react'

export default function Order(props) {

 const {cartItems, total} = props;
 const removeNode = (idx) => document.querySelector(`${idx}`).remove();

  return (
    <div className='order'>Your Order
    <hr />
    
    <div style={{fontWeight : "300"}} className='summary'>{cartItems.map((item) => (
      <div style={{color : "#fff"}} key={item.id} >{item.name} x {item.qty} ( <span style={{fontWeight : "900"}}>{item.price}</span>  €) </div>
    ))}</div>
    <br/>
    <hr />
    <div>Total: <span style={{color : "#fff"}}>{total.toFixed(2)} €</span></div>
    <br />
    <br />
    <button onClick={() => window.location.reload('/')} >Go back</button>
    </div>
  )
}
