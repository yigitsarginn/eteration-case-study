import { Dimensions, PixelRatio } from "react-native";

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } =
  Dimensions.get("window");

// Sizes based on iPhone 15 Pro
const BASE_WIDTH = 393;
const BASE_HEIGHT = 852;
const widthBaseScale = SCREEN_WIDTH / BASE_WIDTH;
const heightBaseScale = SCREEN_HEIGHT / BASE_HEIGHT;

export const normalize = (
  size: number,
  based: "height" | "width" = "width"
): number => {
  const newSize =
    based === "height" ? size * heightBaseScale : size * widthBaseScale;
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

const BASE_ASPECT_RATIO = 0; // https://reactnative.dev/docs/pixelratio
export const isLowerThanBaseDevice = (): boolean => {
  return PixelRatio.get() < BASE_ASPECT_RATIO;
};

export const moderateScale = (size: number, factor = 0.5): number =>
  size + (normalize(size) - size) * factor;
