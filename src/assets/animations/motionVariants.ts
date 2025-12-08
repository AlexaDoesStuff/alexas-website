export const pageExitVariant = {
  exit: {
    opacity: 0,
    x: -30,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
};

export const riseUpTextVariant = {
  initial: { y: 200, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

export const leftToRightTextVariant = {
  initial: { x: -500, opacity: 0 },
  animate: { x: 0, opacity: 1 },
}

export const rightToLeftTextVariant = {
  initial: { x: 500, opacity: 0 },
  animate: { x: 0, opacity: 1 },
}