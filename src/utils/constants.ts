export const BREAKPOINTS = [600, 900, 1200, 1500];

export const mq = BREAKPOINTS.map(
  (bp) => `@media only screen and (min-width: ${bp}px)`
);

export const VERTICAL_BREAKPOINTS = [700, 800];

export const vmq = VERTICAL_BREAKPOINTS.map(
  (bp) => `@media only screen and (min-height: ${bp}px)`
);

export const notMobileMq = `@media only screen and (min-width: ${BREAKPOINTS[1]}px) and (min-height: ${VERTICAL_BREAKPOINTS[0]}px)`;

export enum Direction {
  Up,
  Left,
  Down,
  Right,
}
