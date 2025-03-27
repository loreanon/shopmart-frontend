import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';
import { useParams } from 'react-router-dom';
const ProductDetail = () => {
    const { id } = useParams()

    const [product, setProduct] = useState({});
    // Function to fetch categories
    const getProduct = async () => {
        try {
            const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`

            );
            setProduct(response.data)
        }
        catch (error) {
            console.log(error)
        } // Handle any errors
    };

    // Use useEffect to call getCategories when the component mounts
    useEffect(() => {
        getProduct();
    }, [id])

    return (

        <div className="container">
            <h2 className="text-center">Product</h2>
            <div class="row">
                <div className="col-md-6">
                    <div className="wrapper">
                        <img src={product.images} alt="" className='img-fluid' />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="wrapper">
                        <h5 class="card-title">{product.title}</h5>
                        <p class="card-text">
                            <span class="badge badge-secondary">{product.category?.name}</span>
                        </p>
                        <h2>
                            {" "}
                            <span>&#8377;</span>{product.price}
                        </h2>
                        <a href="#" class="btn btn-primary">
                            Add to cart
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default ProductDetail;
