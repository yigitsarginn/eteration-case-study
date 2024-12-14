import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Checkbox } from './Checkbox';

describe('Checkbox Component', () => {
  const options = ['Option 1', 'Option 2', 'Option 3'];
  const selected = ['Option 1'];
  const onChangeMock = jest.fn();

  it('renders all options correctly', () => {
    const { getByText } = render(
      <Checkbox
        options={options}
        selected={selected}
        onChange={onChangeMock}
      />,
    );

    options.forEach((option) => {
      expect(getByText(option)).toBeTruthy();
    });
  });

  it('displays the check icon for selected options', () => {
    const { getByTestId } = render(
      <Checkbox
        options={options}
        selected={selected}
        onChange={onChangeMock}
      />,
    );

    const checkIcon = getByTestId('CheckIcon');
    expect(checkIcon).toBeTruthy();
  });

  it('does not display the check icon for unselected options', () => {
    const { queryByTestId } = render(
      <Checkbox options={options} selected={[]} onChange={onChangeMock} />,
    );

    const checkIcon = queryByTestId('CheckIcon');
    expect(checkIcon).toBeFalsy();
  });

  it('calls onChange with the correct value when an option is pressed', () => {
    const { getByText } = render(
      <Checkbox
        options={options}
        selected={selected}
        onChange={onChangeMock}
      />,
    );

    fireEvent.press(getByText('Option 2'));
    expect(onChangeMock).toHaveBeenCalledWith('Option 2');
  });

  it('toggles the selection state correctly', () => {
    const { getByText, rerender } = render(
      <Checkbox
        options={options}
        selected={selected}
        onChange={onChangeMock}
      />,
    );

    fireEvent.press(getByText('Option 1'));
    expect(onChangeMock).toHaveBeenCalledWith('Option 1');

    rerender(
      <Checkbox options={options} selected={[]} onChange={onChangeMock} />,
    );

    expect(getByText('Option 1')).toBeTruthy();
  });
});
