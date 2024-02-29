// Home.js
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Home = ({ selectProduct, cart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <div className="home">
      <h2>Cart ({cart.length} items)</h2>
      <div className="products">
        {products.map(product => <Product key={product.id} product={product} selectProduct={selectProduct} />)}
      </div>
    </div>
  );
};

export default Home;
