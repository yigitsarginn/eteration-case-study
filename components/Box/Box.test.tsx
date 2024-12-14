import React from 'react';
import { render } from '@testing-library/react-native';
import { Box } from './Box';
import { colors } from '@/theme';

describe('Box Component', () => {
  it('renders correctly with default props', () => {
    const { toJSON } = render(<Box testID="box" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it('applies flex and padding props correctly', () => {
    const { getByTestId } = render(<Box testID="box" flex={1} p={10} />);
    const box = getByTestId('box');
    expect(box.props.style).toMatchObject({
      flex: 1,
      padding: 10,
    });
  });

  it('applies row style when row prop is true', () => {
    const { getByTestId } = render(<Box testID="box" row />);
    const box = getByTestId('box');
    expect(box.props.style).toMatchObject({
      flexDirection: 'row',
    });
  });

  it('applies center alignment when center prop is true', () => {
    const { getByTestId } = render(<Box testID="box" center />);
    const box = getByTestId('box');
    expect(box.props.style).toMatchObject({
      justifyContent: 'center',
      alignItems: 'center',
    });
  });

  it('applies background color correctly', () => {
    const { getByTestId } = render(<Box testID="box" color="transparent" />);
    const box = getByTestId('box');
    expect(box.props.style).toMatchObject({
      backgroundColor: colors['transparent'],
    });
  });

  it('combines multiple styles correctly', () => {
    const { getByTestId } = render(
      <Box
        testID="box"
        row
        center
        flex={1}
        p={10}
        m={5}
        radius={8}
        color="transparent"
      />,
    );
    const box = getByTestId('box');
    expect(box.props.style).toMatchObject({
      flex: 1,
      padding: 10,
      margin: 5,
      borderRadius: 8,
      backgroundColor: colors['transparent'],
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    });
  });
});
