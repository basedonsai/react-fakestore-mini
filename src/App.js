// App.js
import React, { useState } from 'react';
import './App.css';
import Home from './Home';
import NavBar from './NavBar';
import customImage from './image.png'; 
import ProductDetails from './ProductDetails';

function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cart, setCart] = useState([]);

  const goBack = () => setSelectedProduct(null);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="custom-image-container">
        <h1 className="wel">Welcome to Our Store</h1>
        <p className="wel2">Discover Amazing Products</p>
        <img src={customImage} alt="Custom" className="full-width-image" />
      </div>
      {selectedProduct ? (
        <ProductDetails product={selectedProduct} goBack={goBack} addToCart={addToCart} />
      ) : (
        <Home selectProduct={setSelectedProduct} cart={cart} />
      )}
    </div>
  );
}

export default App;
