import React from 'react'

export default function Header() {
  return (
    <div className='header'>
        <div>
            <a href='#/'>
                <h1>WebShop</h1>
            </a>
            </div>
            <div>
                <a href='/#cart' ><h3>Cart</h3></a>
                <a href='/#signin'><h3>Sign In</h3></a>
            </div>
        
    </div>
  )
}
