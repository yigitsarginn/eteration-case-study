import React from 'react';
import { render } from '@testing-library/react-native';
import { Text } from './Text';
import { colors, fontFamily, fonts, fontWeights } from '@/theme';

describe('Text Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Text>Default Text</Text>);

    const textElement = getByText('Default Text');
    expect(textElement).toBeTruthy();
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontFamily: fontFamily.regular,
          fontSize: fonts.medium.fontSize,
          color: colors.black,
          fontWeight: fonts.medium.fontWeight,
          lineHeight: fonts.medium.lineHeight,
        }),
      ]),
    );
  });

  it('applies the correct variant styles', () => {
    const { getByText } = render(<Text variant="medium">Large Text</Text>);

    const textElement = getByText('Large Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontSize: fonts.medium.fontSize,
          fontWeight: fonts.medium.fontWeight,
          lineHeight: fonts.medium.lineHeight,
        }),
      ]),
    );
  });

  it('applies the correct color', () => {
    const { getByText } = render(<Text color="red">Red Text</Text>);

    const textElement = getByText('Red Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          color: colors.red,
        }),
      ]),
    );
  });

  it('applies the correct weight', () => {
    const { getByText } = render(<Text weight="bold">Bold Text</Text>);

    const textElement = getByText('Bold Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontWeight: fontWeights.bold,
        }),
      ]),
    );
  });

  it('centers text when center prop is true', () => {
    const { getByText } = render(<Text center>Centered Text</Text>);

    const textElement = getByText('Centered Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          textAlign: 'center',
        }),
      ]),
    );
  });

  it('merges custom styles', () => {
    const { getByText } = render(
      <Text style={{ margin: 10 }}>Custom Style Text</Text>,
    );

    const textElement = getByText('Custom Style Text');
    expect(textElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          margin: 10,
        }),
      ]),
    );
  });
});
