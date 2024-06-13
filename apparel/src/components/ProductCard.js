import React from 'react';


const ProductCard = ({ prodData, setSelectedProduct, addToCart }) => {
    return (
        <div className="container mt-5">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 g-1">
                {prodData.map((curProd) => (
                    <div className="col" key={curProd.id}>
                        <div className="card h-100 shadow">
                            <img src={curProd.image} className="card-img-top" alt="Product I" style={{ height: '200px', objectFit: 'cover' }} />
                            <div className="card-body">
                                <h5 className="card-title">{curProd.name}</h5>
                                <p className="card-text">Category: {curProd.category}</p>
                                <p className="card-text">Price: {curProd.price}</p>
                                <button className="btn btn-primary btn-sm" onClick={() => setSelectedProduct(curProd)}>View Detail</button>
                                <button className="btn btn-sm btn-warning mx-2" onClick={() => addToCart(curProd)}>Add to Cart</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


export default ProductCard;
