import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductDetail from '../components/ProductDetail';

describe('ProductDetail Component', () => {
  const selectedProduct = {
    id: 1,
    image: "images/product1.jpg",
    name: "EYEBOGLER",
    category: "men",
    price: "Rs.247",
    description: "Moisture wicking fabric is quick-drying, ultra-soft & has a soft feel, keeping you comfortable through any athletic activity. Designed for a comfortable experience. Crew-neck provides a nonrestrictive fit; short-sleeve allows for a wider range of motion.Perfect for running, workout and training sports and even as an moisture wicking undershirt.Raglan sleeves for a sporty lookFamously durable beefy-t fabric"
  };

  const setSelectedProductMock = jest.fn();
  const addToCartMock = jest.fn();

  test('renders_product_details', () => {
    render(<ProductDetail selectedProduct={selectedProduct} setSelectedProduct={setSelectedProductMock} addToCart={addToCartMock} />);
    
    expect(screen.getByText(selectedProduct.name)).toBeInTheDocument();
    expect(screen.getByText(`Category: ${selectedProduct.category}`)).toBeInTheDocument();
    expect(screen.getByText(`Description: ${selectedProduct.description}`)).toBeInTheDocument();
    expect(screen.getByText(`Price: ${selectedProduct.price}`)).toBeInTheDocument();
    
    const imgElement = screen.getByAltText('Card i');
    expect(imgElement).toHaveAttribute('src', selectedProduct.image);
  });

  test('add_to_cart_button_is_working', () => {
    render(<ProductDetail selectedProduct={selectedProduct} setSelectedProduct={setSelectedProductMock} addToCart={addToCartMock} />);
    const addToCartButton = screen.getByText('Add to Cart');
    fireEvent.click(addToCartButton);
    expect(addToCartMock).toHaveBeenCalledWith(selectedProduct);
  });

  test('go_back_button_is_working', () => {
    render(<ProductDetail selectedProduct={selectedProduct} setSelectedProduct={setSelectedProductMock} addToCart={addToCartMock} />);
    const goBackButton = screen.getByText('Go Back');
    fireEvent.click(goBackButton);
    expect(setSelectedProductMock).toHaveBeenCalledWith(null);
  });
});
