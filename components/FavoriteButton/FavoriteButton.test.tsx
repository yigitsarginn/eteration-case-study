import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { FavoriteButton } from './FavoriteButton';
import { colors } from '@/theme';

describe('FavoriteButton Component', () => {
  const onToggleFavoriteMock = jest.fn();

  it('renders correctly with favorite state', () => {
    const { getByTestId } = render(
      <FavoriteButton
        isFavorite={true}
        onToggleFavorite={onToggleFavoriteMock}
      />,
    );

    const starIcon = getByTestId('StarIcon');
    expect(starIcon.props.color).toBe(colors.yellow);
  });

  it('renders correctly with non-favorite state', () => {
    const { getByTestId } = render(
      <FavoriteButton
        isFavorite={false}
        onToggleFavorite={onToggleFavoriteMock}
      />,
    );

    const starIcon = getByTestId('StarIcon');
    expect(starIcon.props.color).toBe(colors.lightGrey);
  });

  it('calls onToggleFavorite when pressed', () => {
    const { getByRole } = render(
      <FavoriteButton
        isFavorite={false}
        onToggleFavorite={onToggleFavoriteMock}
      />,
    );

    const button = getByRole('button');
    fireEvent.press(button);

    expect(onToggleFavoriteMock).toHaveBeenCalledTimes(1);
  });
});
