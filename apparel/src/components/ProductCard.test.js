import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ProductCard from '../components/ProductCard';

describe('ProductCard Component', () => {
  const prodData = [
    {
      id: 1,
      image: "images/product1.jpg",
      name: "EYEBOGLER",
      category: "men",
      price: "Rs.247",
      description: "Moisture wicking fabric..."
    },
    {
      id: 2,
      image: "images/product2.jpg",
      name: "Lymio Casual Shirt",
      category: "men",
      price: "Rs.349",
      description: "casual shirt for men..."
    }
  ];

  const setSelectedProductMock = jest.fn();
  const addToCartMock = jest.fn();

  test('view_detail_button_is_working', () => {
    render(<ProductCard prodData={prodData} setSelectedProduct={setSelectedProductMock} addToCart={addToCartMock} />);
    const viewDetailButtons = screen.getAllByText('View Detail');
    viewDetailButtons.forEach((button, index) => {
      fireEvent.click(button);
      expect(setSelectedProductMock).toHaveBeenCalledWith(prodData[index]);
    });
  });

  test('add_to_cart_button_is_working', () => {
    render(<ProductCard prodData={prodData} setSelectedProduct={setSelectedProductMock} addToCart={addToCartMock} />);
    const addToCartButtons = screen.getAllByText('Add to Cart');
    addToCartButtons.forEach((button, index) => {
      fireEvent.click(button);
      expect(addToCartMock).toHaveBeenCalledWith(prodData[index]);
    });
  });
});
