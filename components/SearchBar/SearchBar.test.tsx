import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { StyleSheet } from 'react-native';
import { SearchBar } from './SearchBar';

describe('SearchBar Component', () => {
  const placeholderText = 'Search';
  const mockOnChangeText = jest.fn();

  it('renders correctly with default placeholder', () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText(placeholderText);
    expect(input).toBeTruthy();
  });

  it('renders correctly with custom placeholder', () => {
    const customPlaceholder = 'Custom Search';
    const { getByPlaceholderText } = render(
      <SearchBar placeholderText={customPlaceholder} />,
    );
    const input = getByPlaceholderText(customPlaceholder);
    expect(input).toBeTruthy();
  });

  it('applies custom styles to container and input', () => {
    const { getByPlaceholderText, getByTestId } = render(
      <SearchBar
        placeholderText="Styled Search"
        containerStyle={{ backgroundColor: 'red' }}
        inputStyle={{ color: 'blue' }}
      />,
    );

    const container = getByTestId('search-bar-container');
    const input = getByPlaceholderText('Styled Search');

    // Flatten container style
    const containerStyle = StyleSheet.flatten(container.props.style);
    expect(containerStyle).toMatchObject({ backgroundColor: 'red' });

    // Flatten input style
    const inputStyle = StyleSheet.flatten(input.props.style);
    expect(inputStyle).toMatchObject({ color: 'blue' });
  });

  it('calls onChangeText when text is entered', () => {
    const { getByPlaceholderText } = render(
      <SearchBar
        placeholderText="Type something"
        onChangeText={mockOnChangeText}
      />,
    );

    const input = getByPlaceholderText('Type something');
    fireEvent.changeText(input, 'Hello');
    expect(mockOnChangeText).toHaveBeenCalledWith('Hello');
  });
});
