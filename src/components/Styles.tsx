interface Subpalette {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000: string;
}

interface Palette {
  primary: Subpalette;
  neutrals: Subpalette;
  orange: Subpalette;
  red: Subpalette;
  green: Subpalette;
  yellow: Subpalette;
  mainPrimary: string;
}

const MAIN_PRIMARY = "hsl(193, 96%, 44%)";
const Colors: Palette = {
  primary: {
    1000: MAIN_PRIMARY,
    900: "hsl(194, 77%, 50%)",
    800: "hsl(193, 76%, 55%)",
    700: "hsl(193, 76%, 66%)",
    600: "hsl(193, 76%, 72%)",
    500: "hsl(193, 75%, 78%)",
    400: "hsl(194, 76%, 83%)",
    // Light blue.
    300: "hsl(189, 21%, 94%)",
    // Purple.
    200: "hsl(290, 58%, 18%)",
    // White.
    100: "hsl(0, 0%, 100%)",
  },
  neutrals: {
    1000: "hsl(210, 24%, 16%)",
    900: "hsl(209, 20%, 25%)",
    800: "hsl(209, 18%, 30%)",
    700: "hsl(209, 14%, 37%)",
    600: "hsl(211, 12%, 43%)",
    500: "hsl(211, 10%, 53%)",
    400: "hsl(211, 13%, 65%)",
    300: "hsl(210, 16%, 82%)",
    200: "hsl(214, 15%, 91%)",
    100: "hsl(216, 33%, 97%)",
  },
  orange: {
    1000: "hsl(6, 96%, 26%)",
    900: "hsl(8, 92%, 35%)",
    800: "hsl(10, 93%, 40%)",
    700: "hsl(12, 86%, 47%)",
    600: "hsl(14, 89%, 55%)",
    500: "hsl(16, 94%, 61%)",
    400: "hsl(18, 100%, 70%)",
    300: "hsl(20, 100%, 77%)",
    200: "hsl(22, 100%, 85%)",
    100: "hsl(24, 100%, 93%)",
  },
  red: {
    1000: "hsl(348, 94%, 20%)",
    900: "hsl(350, 94%, 28%)",
    800: "hsl(352, 90%, 35%)",
    700: "hsl(354, 85%, 44%)",
    600: "hsl(356, 75%, 53%)",
    500: "hsl(360, 83%, 62%)",
    400: "hsl(360, 91%, 69%)",
    300: "hsl(360, 100%, 80%)",
    200: "hsl(360, 100%, 87%)",
    100: "hsl(360, 100%, 95%)",
  },
  yellow: {
    1000: "hsl(15, 86%, 30%)",
    900: "hsl(22, 82%, 39%)",
    800: "hsl(29, 80%, 44%)",
    700: "hsl(36, 77%, 49%)",
    600: "hsl(42, 87%, 55%)",
    500: "hsl(44, 92%, 63%)",
    400: "hsl(48, 94%, 68%)",
    300: "hsl(48, 95%, 76%)",
    200: "hsl(48, 100%, 88%)",
    100: "hsl(49, 100%, 93%)",
  },
  green: {
    1000: "hsl(125, 97%, 14%)",
    900: "hsl(125, 86%, 20%)",
    800: "hsl(125, 79%, 26%)",
    700: "hsl(122, 80%, 29%)",
    600: "hsl(122, 73%, 35%)",
    500: "hsl(123, 57%, 45%)",
    400: "hsl(123, 53%, 55%)",
    300: "hsl(124, 63%, 74%)",
    200: "hsl(127, 65%, 85%)",
    100: "hsl(125, 65%, 93%)",
  },
  mainPrimary: MAIN_PRIMARY,
};

const Space = {
  4: "4px",
  8: "8px",
  12: "12px",
  16: "16px",
  18: "18px",
  20: "20px",
  24: "24px",
  30: "30px",
  32: "32px",
  36: "36px",
  48: "48px",
  64: "64px",
  96: "96px",
  128: "128px",
  MIN_DEVICE_WIDTH: "320px",
  // A default gap for divs, paragraphs, and general spacing.
  PARAGRAPH: "16px",
};

const Breakpoints = {
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
};

export { Colors, Space, Breakpoints };
