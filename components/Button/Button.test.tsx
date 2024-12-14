import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { Button } from './Button';

describe('Button Component', () => {
  it('renders correctly with given title', () => {
    const { getByText } = render(<Button title="Click Me" />);
    expect(getByText('Click Me')).toBeTruthy();
  });

  it('applies custom styles passed via props', () => {
    const { getByTestId } = render(
      <Button title="Styled Button" style={{ backgroundColor: 'red' }} />,
    );
    const button = getByTestId('TouchableOpacity');

    const combinedStyles = Array.isArray(button.props.style)
      ? button.props.style
      : [button.props.style];
    const customStyle = combinedStyles.find(
      (style) => style.backgroundColor === 'red',
    );

    expect(customStyle).toBeTruthy();
    expect(customStyle?.backgroundColor).toBe('red');
  });

  it('applies custom text styles via textProps', () => {
    const { getByText } = render(
      <Button title="Styled Text" textProps={{ style: { fontSize: 18 } }} />,
    );
    const text = getByText('Styled Text');
    expect(text.props.style).toEqual(
      expect.arrayContaining([{ fontSize: 18 }]),
    );
  });

  it('calls onPress when the button is pressed', () => {
    const onPressMock = jest.fn();
    const { getByText } = render(
      <Button title="Press Me" onPress={onPressMock} />,
    );

    fireEvent.press(getByText('Press Me'));
    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('does not throw error when onPress is not provided', () => {
    const { getByText } = render(<Button title="No Press" />);
    expect(() => fireEvent.press(getByText('No Press'))).not.toThrow();
  });
});
