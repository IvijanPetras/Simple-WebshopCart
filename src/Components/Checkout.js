import React from 'react'
import { useState } from 'react';
import Order from './Order';

var a = 0;
let b = 0;
let c = 0;
export default function Checkout(props) {

   const { cartItems, total } = props;

   const [order, setOrder] = useState('');
   const [text, setText] = useState('');
   const [price, setPrice] = useState(total);
   const [discLabel,  setDiscLabel] = useState('');
   const [discLabel2,  setDiscLabel2] = useState('');
   const [discLabel3,  setDiscLabel3] = useState('');
     function removeDisc(){
         setDiscLabel('');
         setDiscLabel2('');
         setDiscLabel3('');
         a = 0;
         b = 0; 
         c = 0;
         setPrice(total);
     }
     
    function discount(e) {
        if(text === '20%OFF' && a === 0 && b === 0 && c === 0) {
        var val = e - (e * 0.2);
        setPrice(val);
        setDiscLabel('20%OFF');
        a++;
        }
     else if(text === '5%OFF' && b < 1 && a === 0 ){
         
            var val2 = e - (e * 0.05); 
            setPrice(val2);
            setDiscLabel2('5%OFF')
            ++b;
        } 

            else if(text === '20EUROFF' && c < 1 && a === 0 && b === 1){
            
                var val4 = e -19;
                setPrice(val4);
                setDiscLabel3('20EUROFF')
                ++c;
            }else if(text === '20EUROFF' && c < 1 && a === 0){
            
                var val3 = e -20;
                setPrice(val3);
                setDiscLabel3('20EUROFF')
                ++c;
            }


            else {
                alert('Cupon not valid or alredy used! Use cupons in correct order');
            
        }
    }


        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      
       
      
          


    function checkInp(){
        
        var mnt = document.querySelector('.notEmpty');
        var mnt2 = document.querySelector('.notEmpty2').value;
        var mnt3 = document.querySelector('.notEmpty3').value;
        var mnt4 = document.querySelector('.notEmpty4').value;
        
        if( mnt2 !== '' && mnt3 !== '' && mnt4 !== '' && mnt.value.match(validRegex))
        
        setOrder('order');
    }


    return (    
    <div className='checkout' >


        <h1>Your Order</h1>
        {cartItems.map((item) => (
            <div key={item.id}>{item.name} x {item.qty} <span style={{fontWeight : "900"}}>{item.price}</span> €</div>
            
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
            
            <label>Discount Code</label>
            <input onChange={e => setText(e.target.value)} className='discount' type='text' value={text} placeholder="// 20%OFF - 20EUROFF - 5%OFF" />
            <button  >Submit Code</button>
            </form>
            <div>Discounts: {discLabel} {discLabel2}  {discLabel3}</div>
            <button onClick={removeDisc} >Remove discounts</button>
            <form onSubmit={
            (e) => {
                e.preventDefault();
                } 
            }>
            <label>Email</label>
            <input className='notEmpty' autoFocus type='email' required/>
            <label>Address</label>
            <input className='notEmpty2' type='text'  required/>
            <label>Credit card details</label>
            <input className='notEmpty3' required type='number' placeholder='Card Number' />
            <input className='notEmpty4' required type='text' placeholder='Name on Card' />
            <div><h2 style={{fontWeight: "bolder"}}>Total: {price.toFixed(2)}€</h2></div>
        <button onClick={checkInp}>Order</button>
        <div>{order === "order" && <Order cartItems={cartItems} total={price} />}</div>
        </form>
        
        
    </div>
    
  )
}
