// Home.js
import React, { useEffect, useState } from 'react';
import Product from './Product';

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
      <input
        type="search"
        className="search-bar"
        placeholder="Search products..."
        onChange={event => setSearchTerm(event.target.value)}
      />
      <div className="products">
        {filteredProducts.map(product => <Product key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default Home;
