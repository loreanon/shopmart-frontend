import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Category from './Category';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    // Function to fetch categories
    const getCategories = () => {
        axios.get('https://api.escuelajs.co/api/v1/categories')
            .then(response => setCategories(response.data))  // Set fetched categories to state
            .catch(error => console.log(error));  // Handle any errors
    };

    // Use useEffect to call getCategories when the component mounts
    useEffect(() => {
        getCategories();
    }, []);

    return (
       <div className="container">
        <h2 className ="text-center">All Categories</h2>
        <div class="row">
            {
                categories.map((category,index)=>(
                <Category data = {category}key={index} />
            ))}
        </div>
       </div>
    );
};

export default CategoryList;
