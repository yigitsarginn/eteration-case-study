import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { RadioButton } from './RadioButton';
import { styles } from './RadioButton.styles';

describe('RadioButton Component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const selected = 'Option 2';
  const onSelectMock = jest.fn();

  it('renders all options correctly', () => {
    const { getByText } = render(
      <RadioButton
        options={options}
        selected={selected}
        onSelect={onSelectMock}
      />,
    );

    options.forEach((option) => {
      expect(getByText(option)).toBeTruthy();
    });
  });

  it('displays the selected state for the selected option', () => {
    const { getByTestId } = render(
      <RadioButton
        options={options}
        selected={selected}
        onSelect={onSelectMock}
      />,
    );

    const selectedCircle = getByTestId(`radio-circle-selected-Option 2`);

    const styleObject = Array.isArray(selectedCircle.props.style)
      ? Object.assign({}, ...selectedCircle.props.style)
      : selectedCircle.props.style;

    expect(styleObject).toMatchObject(styles.radioCircleSelected);
  });

  it('does not display the selected state for unselected options', () => {
    const { queryByTestId } = render(
      <RadioButton
        options={options}
        selected={selected}
        onSelect={onSelectMock}
      />,
    );

    const unselectedCircle = queryByTestId(`radio-circle-selected-Option 1`);
    expect(unselectedCircle).toBeNull();
  });

  it('calls onSelect with the correct value when an option is pressed', () => {
    const { getByText } = render(
      <RadioButton
        options={options}
        selected={selected}
        onSelect={onSelectMock}
      />,
    );

    fireEvent.press(getByText('Option 3'));
    expect(onSelectMock).toHaveBeenCalledWith('Option 3');
  });
});
