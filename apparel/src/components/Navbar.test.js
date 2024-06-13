import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Navbar from '../components/Navbar';

describe('Navbar Component', () => {
  const userData = { userName: 'John Doe' };
  const logoutMock = jest.fn();

  test('renders_navbar_brand', () => {
    render(<Navbar userData={userData} logout={logoutMock} />);
    const brandElement = screen.getByText('Apparel');
    expect(brandElement).toBeInTheDocument();
  });

  test('renders_user_greeting', () => {
    render(<Navbar userData={userData} logout={logoutMock} />);
    const userGreeting = screen.getByText(`Hello, ${userData.userName}`);
    expect(userGreeting).toBeInTheDocument();
  });

});
