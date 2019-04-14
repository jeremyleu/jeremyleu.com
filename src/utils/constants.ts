export const BREAKPOINTS = [600, 900, 1200, 1500];

export const mq = BREAKPOINTS.map(
  bp => `@media only screen and (min-width: ${bp}px)`
);
