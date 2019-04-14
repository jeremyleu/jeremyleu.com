export * from './constants';

export const getTransformFromDifference = (difference: number) => {
  if (difference < 0) {
    return -100;
  } else if (difference > 0) {
    return 100;
  }
  return 0;
};
