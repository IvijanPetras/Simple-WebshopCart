import React from 'react'
import { useState } from 'react';

var a = 0;
let b = 0;
let c = 0;
export default function Checkout(props) {

   const { cartItems, total } = props;

   const [text, setText] = useState('');
   const [price, setPrice] = useState(total);
     
     
    function discount(e) {
        if(text === '20%OFF' && a === 0) {
        var val = e - (e * 0.2);
        setPrice(val);
        
        a++;
        }
     else if(text === '5%OFF' && b < 1 && a >= 1 ){
            var val2 = e - (e * 0.05); 
            setPrice(val2);
            ++b;
        } else if(text === '20EUROFF' && c < 1 && a >= 1){
            
                var val3 = e -20;
                setPrice(val3);
                ++c;
            }
            else {
                alert('Cupon not valid or alredy used!');
            
        }
    }



    return (    
    <div className='checkout' >


        <h1>Your Order</h1>
        {cartItems.map((item) => (
            <div key={item.id}>{item.name} x {item.qty}</div>
            )
        )}
        <hr />
        
        <form onSubmit={
            (e) => {
                e.preventDefault();
                discount(price);
                setText('');
                } 
            }
        >
            <label>Email</label>
            <input autoFocus type='email' required/>
            <label>Address</label>
            <input type='text'  required/>
            <label>Credit card details</label>
            <input required type='text' placeholder='Card Number' />
            <input required type='text' placeholder='Name on Card' />
            <label>Discount Code</label>
            <input onChange={e => setText(e.target.value)} className='discount' type='text' value={text} />
            <button  >Submit Code</button>
            <button>Order Now</button>
        </form>
        <div><h3>{price.toFixed(2)}€</h3></div>
        
        
    </div>
    
  )
}
