// ProductDetail.js
import React from 'react';


const ProductDetail = ({ selectedProduct, setSelectedProduct, addToCart }) => {
    const { name, category, image, description, price } = selectedProduct;


    const handleGoBack = () => {
        setSelectedProduct(null);
    };


    return (
        <div className="container">
            <div className="card w-50">
                <img src={image} className="card-img-top mt-5 img-center" alt="Card i" style={{width:'100%' }} />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Category: {category}</p>
                    <p className="card-text">Description: {description}</p>
                    <p className="card-text">Price: {price}</p>
                    {/* Button to add to cart */}
                    <button className="btn btn-warning btn-sm" onClick={() => addToCart(selectedProduct)}>Add to Cart</button>
                    {/* Button to go back */}
                    <button className="btn btn-primary btn-sm mx-2" onClick={handleGoBack}>Go Back</button>
                </div>
            </div>
        </div>
    );
};


export default ProductDetail;
