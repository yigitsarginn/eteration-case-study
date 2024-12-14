import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import { Text } from '../Text/Text';
import { Header } from './Header';
import { colors, fonts, fontWeights } from '@/theme';
import { StyleSheet } from 'react-native';

describe('Header Component', () => {
  it('renders correctly with default props', () => {
    const { getByText } = render(<Header title="Default Header" />);

    const titleElement = getByText('Default Header');
    expect(titleElement).toBeTruthy();
  });

  it('renders left element when provided', () => {
    const LeftElement = () => <Text>Left</Text>;
    const { getByText } = render(
      <Header title="Header with Left" leftElement={<LeftElement />} />,
    );

    const leftElement = getByText('Left');
    expect(leftElement).toBeTruthy();
  });

  it('calls onLeftElementPress when left element is pressed', () => {
    const onLeftElementPressMock = jest.fn();
    const LeftElement = () => <Text>Left</Text>;

    const { getByText } = render(
      <Header
        title="Header with Pressable Left"
        leftElement={<LeftElement />}
        onLeftElementPress={onLeftElementPressMock}
      />,
    );

    const leftElement = getByText('Left');
    fireEvent.press(leftElement);
    expect(onLeftElementPressMock).toHaveBeenCalled();
  });

  it('aligns title to the left when titleAlignment is set to left', () => {
    const { getByText } = render(
      <Header title="Left Aligned Header" titleAlignment="left" />,
    );

    const titleElement = getByText('Left Aligned Header');
    expect(titleElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ alignSelf: 'flex-start' }),
      ]),
    );
  });

  it('applies correct title styles', () => {
    const { getByText } = render(
      <Header
        title="Styled Header"
        titleFontSize="medium"
        titleFontWeight="bold"
        titleFontColor="red"
      />,
    );

    const titleElement = getByText('Styled Header');
    expect(titleElement.props.style).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          fontSize: fonts.medium.fontSize,
          fontWeight: fontWeights.bold,
          color: colors.red,
        }),
      ]),
    );
  });

  it('renders with bottom shadow when bottomShadow is true', () => {
    const { getByTestId } = render(
      <Header title="Test Header" bottomShadow testID="header" />,
    );

    const headerElement = getByTestId('header');
    const flattenedStyle = StyleSheet.flatten(headerElement.props.style);

    expect(flattenedStyle).toMatchObject({
      shadowColor: colors.black,
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.1,
      shadowRadius: 4,
      elevation: 3,
    });
  });
});
