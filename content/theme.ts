/**
 * Design tokens extracted verbatim from the original site
 * (legacy-site/assets/css/style.css). This is the single source of truth —
 * app/globals.css mirrors these same values as CSS custom properties.
 *
 * The original site is dark-by-default (`:root`) with a `.white` class for
 * light mode. Here that's normalized to the conventional light/dark split
 * so it lines up with Tailwind/shadcn's `.dark` selector convention.
 */

export const colors = {
  dark: {
    jet: "hsl(0, 0%, 22%)",
    onyx: "hsl(240, 1%, 17%)",
    eerieBlack1: "hsl(240, 2%, 13%)",
    eerieBlack2: "hsl(240, 2%, 12%)",
    smokyBlack: "hsl(0, 0%, 7%)",
    white1: "hsl(0, 0%, 100%)",
    white2: "hsl(0, 0%, 98%)",
    orangeYellowCrayola: "hsl(45, 100%, 72%)",
    vegasGold: "hsl(45, 54%, 58%)",
    lightGray: "hsl(0, 0%, 84%)",
    lightGray70: "hsla(0, 0%, 84%, 0.7)",
    bittersweetShimmer: "hsl(0, 43%, 51%)",
  },
  light: {
    jet: "hsl(0, 0%, 22%)",
    onyx: "hsl(240, 25%, 94%)",
    eerieBlack1: "hsl(240, 43%, 97%)",
    eerieBlack2: "hsl(240, 25%, 94%)",
    smokyBlack: "hsl(0, 0%, 100%)",
    white1: "hsl(0, 0%, 5%)",
    white2: "hsl(0, 20%, 3%)",
    orangeYellowCrayola: "hsl(45, 100%, 72%)",
    vegasGold: "hsl(30, 8%, 5%)",
    lightGray: "hsl(0, 85%, 5%)",
    lightGray70: "hsla(0, 3%, 6%, 0.7)",
    bittersweetShimmer: "hsl(0, 9%, 18%)",
  },
} as const;

export const gradients = {
  dark: {
    bgOnyx:
      "linear-gradient(to bottom right, hsl(240, 1%, 25%) 3%, hsl(0, 0%, 19%) 97%)",
    bgJet:
      "linear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100%), hsl(240, 2%, 13%)",
    bgYellow1:
      "linear-gradient(to bottom right, hsl(45, 100%, 71%) 0%, hsla(36, 100%, 69%, 0) 50%)",
    bgYellow2:
      "linear-gradient(135deg, hsla(45, 100%, 71%, 0.251) 0%, hsla(35, 100%, 68%, 0) 59.86%), hsl(240, 2%, 13%)",
    borderOnyx:
      "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)",
    textYellow:
      "linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%))",
  },
  light: {
    bgOnyx:
      "linear-gradient(to bottom right, hsl(240, 38%, 94%) 3%, hsl(0, 52%, 94%) 97%)",
    bgJet:
      "linear-gradient(to bottom right, hsla(240, 13%, 82%, 0.251) 0%, hsla(197, 33%, 96%, 0.96) 100%), hsl(240, 12%, 97%)",
    bgYellow1:
      "linear-gradient(to bottom right, hsl(45, 100%, 71%) 0%, hsl(0, 52%, 94%) 50%)",
    bgYellow2:
      "linear-gradient(135deg, hsla(45, 100%, 71%, 0.251) 0%, hsl(40, 33%, 98%) 59.86%), hsl(0, 52%, 94%)",
    borderOnyx:
      "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsl(0, 52%, 94%) 50%)",
    textYellow:
      "linear-gradient(to right, hsl(45, 100%, 72%), hsl(35, 100%, 68%))",
  },
} as const;

/** Base (<580px) font sizes; the >=580px override is in `fontSizesWide`. */
export const fontSizes = {
  fs1: "24px",
  fs2: "18px",
  fs3: "17px",
  fs4: "16px",
  fs5: "15px",
  fs6: "14px",
  fs7: "13px",
  fs8: "11px",
} as const;

/** Applied at the `sm` breakpoint (580px) and up. */
export const fontSizesWide = {
  fs1: "32px",
  fs2: "24px",
  fs3: "26px",
  fs4: "18px",
  fs5: "15px",
  fs6: "15px",
  fs7: "15px",
  fs8: "12px",
} as const;

export const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
} as const;

export const fontFamily = "'Poppins', sans-serif";

/** Shadow tokens differ by mode; shadow-1/2/3 also soften further at >=1024px (see `shadowsWide`). */
export const shadows = {
  dark: {
    shadow1: "-4px 8px 24px hsla(0, 0%, 0%, 0.25)",
    shadow2: "0 16px 30px hsla(0, 0%, 0%, 0.25)",
    shadow3: "0 16px 40px hsla(0, 0%, 0%, 0.25)",
    shadow4: "0 25px 50px hsla(0, 0%, 0%, 0.15)",
    shadow5: "0 24px 80px hsla(0, 0%, 0%, 0.25)",
  },
  light: {
    shadow1: "-4px 8px 24px hsla(0, 15%, 91%, 0.994)",
    shadow2: "0 16px 30px hsla(0, 100%, 99%, 0.919)",
    shadow3: "0 16px 40px hsla(0, 50%, 98%, 0.775)",
    shadow4: "0 25px 50px hsla(0, 14%, 88%, 0.876)",
    shadow5: "0 24px 80px hsla(0, 39%, 94%, 0.25)",
  },
} as const;

/** shadow-1/2/3 override at >=1024px, both modes (softer blur). */
export const shadowsWide = {
  shadow1: "-4px 8px 24px hsla(0, 0%, 0%, 0.125)",
  shadow2: "0 16px 30px hsla(0, 0%, 0%, 0.125)",
  shadow3: "0 16px 40px hsla(0, 0%, 0%, 0.125)",
} as const;

export const transitions = {
  fast: "0.25s ease",
  slow: "0.5s ease-in-out",
} as const;

/**
 * Non-standard breakpoints from the original site — preserved exactly so
 * the rebuilt layout reflows at the same points (mirrored in Tailwind's
 * `@theme` breakpoint scale in app/globals.css).
 */
export const breakpoints = {
  xs: 450,
  sm: 580,
  md: 768,
  lg: 1024,
  xl: 1250,
} as const;

export const radius = {
  sidebar: "20px",
  card: "14px",
  contentCard: "14px",
  button: "14px",
  input: "14px",
  projectImage: "16px",
  iconBoxBase: "8px",
  iconBoxWide: "12px",
} as const;
