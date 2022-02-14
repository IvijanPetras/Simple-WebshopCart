import './CSS/style.css'
import Header from './Components/Header';
import Main from './Components/Main';
import Cart from './Components/Cart';
import items from './db';
import { useState } from 'react';


function App() {

  const { products } = items;
  const [cartItems, setCartItems] = useState([])
  const addToCart = (product) => {
    const isThere = cartItems.find(x => x.id === product.id); 
    if(isThere){
      setCartItems(cartItems.map(x => x.id === product.id ? {...isThere, qty: isThere.qty + 1} : x));
    } else{
      setCartItems([...cartItems, {...product, qty: 1}]);
    }
  }

  const removeFromCart = (product) => {
     const isThere = cartItems.find((x) => x.id === product.id); 
     if(isThere.qty === 1){
       setCartItems(cartItems.filter((x) => x.id !== product.id));
     } else {
      setCartItems(cartItems.map(x => x.id === product.id ? {...isThere, qty: isThere.qty - 1} : x));
     }
  }

  
  return (
    <div className="App">
      <Header />
      <div className='shop'>
        <Main addToCart={addToCart} products={products} />
        <Cart addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
      </div>
    </div>
  );
}

export default App;
