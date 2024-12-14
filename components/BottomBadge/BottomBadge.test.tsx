import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { BottomBadge } from './BottomBadge';

// Mocking t
jest.mock('@/lang', () => ({
  t: (key: string) => key, // Return the key itself for simplicity
}));

describe('BottomBadge Component', () => {
  const mockOnPress = jest.fn();
  const price = '100';
  const buttonLabel = 'Add to Cart';
  const priceLabel = 'Price';

  it('renders correctly with default props', () => {
    const { getByText } = render(
      <BottomBadge price={price} onPress={mockOnPress} />,
    );

    expect(getByText('price: ')).toBeTruthy();
    expect(getByText(`${price} currency`)).toBeTruthy(); // Assuming default 'currency' text
    expect(getByText('addToCard')).toBeTruthy(); // Default button label
  });

  it('renders correctly with custom labels', () => {
    const { getByText } = render(
      <BottomBadge
        price={price}
        onPress={mockOnPress}
        buttonLabel={buttonLabel}
        priceLabel={priceLabel}
      />,
    );

    expect(getByText('Price: ')).toBeTruthy();
    expect(getByText(`${price} currency`)).toBeTruthy();
    expect(getByText(buttonLabel)).toBeTruthy();
  });

  it('calls onPress when the button is pressed', () => {
    const { getByText } = render(
      <BottomBadge
        price={price}
        onPress={mockOnPress}
        buttonLabel={buttonLabel}
      />,
    );

    const button = getByText(buttonLabel);
    fireEvent.press(button);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  it('applies correct styles to button text', () => {
    const { getByText } = render(
      <BottomBadge
        price={price}
        onPress={mockOnPress}
        buttonLabel={buttonLabel}
      />,
    );

    const button = getByText(buttonLabel);

    // Flatten the style array into a single object
    const flattenedStyle = Array.isArray(button.props.style)
      ? Object.assign({}, ...button.props.style)
      : button.props.style;

    expect(flattenedStyle).toMatchObject({
      fontSize: 23.5,
      fontWeight: '700',
    });
  });
});
