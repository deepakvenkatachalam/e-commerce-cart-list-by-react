import React, { useState } from 'react';
import './App.css';


import tshirt1 from './images/information-technology-logo.jpg'; 
import tshirt2 from './images/OIP (1).jpg'; 
import tshirt3 from './images/OIP.jpg';

const products = [
  { id: 1, name: 'NIKE', price: 20, image: tshirt1 },
  { id: 2, name: 'PUMA', price: 30, image: tshirt2 },
  { id: 3, name: 'AJIO', price: 25, image: tshirt3 }, 
];

function App() {
  const [cart, setCart] = useState([]);
  
  const addToCart = (productId) => {
    const selectedProduct = products.find(product => product.id === productId); // Changed 'productID' to 'productId'
    if(selectedProduct){
      setCart([...cart, selectedProduct]);
    }
  };

  const checkout = () => {
    alert('Thank you for your purchase'); // Corrected spelling of 'Thank you'
    setCart([]);
  };

  return (
    <div className="App">
      <header className="App-Header">
        <h1>My E-Commerce Store</h1>
      </header>
      <section className="App-products">
        {products.map(product => (
          <div key={product.id} className="App-product">
            <img src={product.image} alt={product.name} style={{ width: '100%', height: 'auto' }} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          </div>
        ))}
      </section>
      <section className="App-cart">
        <h2>Shopping Cart</h2> {/* Changed 'Shopping cart' to 'Shopping Cart' for consistency */}
        <ul>
          {cart.map(item => (
            <li key={item.id}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <button onClick={checkout}>Checkout</button> {/* Changed 'CheckOut' to 'Checkout' for consistency */}
      </section>
    </div>
  );
}

export default App;
