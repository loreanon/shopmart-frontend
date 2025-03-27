import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Product from './Product';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    // Function to fetch categories
    const getProducts = () => {
        axios.get('https://api.escuelajs.co/api/v1/products')
            .then(response => setProducts(response.data))  // Set fetched categories to state
            .catch(error => console.log(error));  // Handle any errors
    };

    // Use useEffect to call getCategories when the component mounts
    useEffect(() => {
        getProducts();
    }, []);

    return (
       <div className="container">
        <h2 className ="text-center">All Products</h2>
        <div class="row">
            {
                products.map((product,index)=>(
                <Product key={index} data={product}/>
            ))}
        </div>
       </div>
    );
};

export default ProductList;
