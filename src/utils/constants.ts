export const BREAKPOINTS = [600, 900, 1200, 1500];

export const bp = BREAKPOINTS.map(
  breakpoint => `@media only screen(min-width: ${breakpoint}px) `
);
