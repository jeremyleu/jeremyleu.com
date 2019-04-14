export const BREAKPOINTS = [600, 900, 1200, 1500];

export const mq = BREAKPOINTS.map(
  bp => `@media only screen and (min-width: ${bp}px)`
);

export const VERTICAL_BREAKPOINTS = [800];

export const vmq = VERTICAL_BREAKPOINTS.map(
  bp => `@media only screen and (min-height: ${bp}px)`
);

export enum Direction {
  Up,
  Left,
  Down,
  Right,
}
