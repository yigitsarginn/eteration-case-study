export const colors = {
  black: '#000000',
  white: '#FFFFFF',
  blue: '#2A59FE',
  yellow: '#FFB800',
  lightGrey: '#D9D9D9',
  grey: '##C4C4C4',
  red: '#F90000',
  transparent: 'transparent',
};

export const rgba = (color: Colors, alpha: number): string => {
  const themeColor = colors[color];
  const hex = themeColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${alpha})`;
};

export type Colors = keyof typeof colors;
