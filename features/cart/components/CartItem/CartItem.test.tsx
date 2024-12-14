import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { CartItem, CartItemProps } from './CartItem';

// Mocking the `t` function
jest.mock('@/lang', () => ({
  t: (key: string) => key, // Return the key itself for simplicity
}));

describe('CartItem Component', () => {
  const mockOnUpdateQuantity = jest.fn();

  const defaultProps: CartItemProps = {
    id: '1',
    name: 'Test Item',
    price: '100',
    quantity: 2,
    onUpdateQuantity: mockOnUpdateQuantity,
  };

  it('should render the item name, price, and quantity correctly', () => {
    const { getByText } = render(<CartItem {...defaultProps} />);

    // Check if name and price are rendered
    expect(getByText('Test Item')).toBeTruthy();
    expect(getByText('100 ₺')).toBeTruthy();

    // Check if quantity is rendered
    expect(getByText('2')).toBeTruthy();
  });

  it('should call onUpdateQuantity with correct arguments when "+" button is pressed', () => {
    const { getByText } = render(<CartItem {...defaultProps} />);

    // Simulate "+" button press
    const incrementButton = getByText('+');
    fireEvent.press(incrementButton);

    // Verify the callback is called with the correct arguments
    expect(mockOnUpdateQuantity).toHaveBeenCalledWith('1', 3);
  });

  it('should call onUpdateQuantity with correct arguments when "-" button is pressed', () => {
    const { getByText } = render(<CartItem {...defaultProps} />);

    // Simulate "-" button press
    const decrementButton = getByText('-');
    fireEvent.press(decrementButton);

    // Verify the callback is called with the correct arguments
    expect(mockOnUpdateQuantity).toHaveBeenCalledWith('1', 1);
  });

  it('should not decrease quantity below 1 when "-" button is pressed', () => {
    const updatedProps = { ...defaultProps, quantity: 1 };
    const { getByText } = render(<CartItem {...updatedProps} />);

    // Simulate "-" button press
    const decrementButton = getByText('-');
    fireEvent.press(decrementButton);

    // Verify the callback is called with the minimum quantity of 1
    expect(mockOnUpdateQuantity).toHaveBeenCalledWith('1', 0);
  });
});
