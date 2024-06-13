import React, { useState } from 'react';
import ProductCard from './ProductCard';
import ProductNav from './ProductNav';
import Products from './ProductAPI';
import ProductDetail from './ProductDetail';
import Navbar from './Navbar';
import ShoppingCartCard from './ShoppingCartCard';


const navlist = [
    ...new Set(
        Products.map((curCateg) => {
            return curCateg.category;
        })
    ),
    "All",
];


const ProductDisplay = ({userData, logout}) => {
    const [prodData, setProdData] = useState(Products);
    const [menuList, setMenuList] = useState(navlist);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [cartItems, setCartItems] = useState([]);


    const filterItem = (category) => {
        if (category === "All") {
            setProdData(Products);
            return;
        }


        const updatedList = Products.filter((curElem) => {
            return curElem.category === category;
        });


        setProdData(updatedList);
    };


    const addToCart = (product) => {
        const existingItem = cartItems.find(item => item.id === product.id);
        if (existingItem) {
            const updatedCart = cartItems.map(item => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 };
                }
                return item;
            });
            setCartItems(updatedCart);
        } else {
            setCartItems([...cartItems, { ...product, quantity: 1 }]);
        }
    };


    const increaseQuantity = (product) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === product.id) {
                return { ...item, quantity: item.quantity + 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
    };


    const decreaseQuantity = (product) => {
        const updatedCart = cartItems.map(item => {
            if (item.id === product.id && item.quantity > 1) {
                return { ...item, quantity: item.quantity - 1 };
            }
            return item;
        });
        setCartItems(updatedCart);
    };


    const removeFromCart = (itemToRemove) => {
        const updatedCart = cartItems.filter((item) => item.id !== itemToRemove.id);
        setCartItems(updatedCart);
    };


    const checkout = () => {
        setCartItems([]);
    };


    return (
        <>
            <Navbar userData={userData} logout={logout}/>
            <div className="row">
                <div className="col-md-9">
                    {/* Product catalog section */}
                    {selectedProduct ? null : <ProductNav filterItem={filterItem} menuList={menuList} />}
                    {selectedProduct ? (
                        <ProductDetail selectedProduct={selectedProduct} setSelectedProduct={setSelectedProduct} addToCart={addToCart} />
                    ) : (
                        <ProductCard prodData={prodData} setSelectedProduct={setSelectedProduct} addToCart={addToCart} />
                    )}
                </div>
                <div className="col-md-3">
                    {/* Shopping cart section */}
                    <ShoppingCartCard cartItems={cartItems} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity} checkout={checkout} />
                </div>
            </div>
        </>
    );
};


export default ProductDisplay;
