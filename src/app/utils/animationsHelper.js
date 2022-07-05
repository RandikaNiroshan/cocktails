export const routeAnimation = {
  initial: { opacity: 0, x: 100 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: -100 },
};

export const skeletonGrid = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
};

export const cocktailsGridAnimation = {
  initial: { opacity: 0, scale: 0 },
  animate: { opacity: 1, scale: 1 },
};

export const fromBelow = {
  initial: { opacity: 0, translateY: 50 },
  animate: {
    opacity: 1,
    translateY: 0,
  },
};

export const fromTop = {
  initial: { opacity: 0, translateY: -50 },
  animate: {
    opacity: 1,
    translateY: 0,
  },
};

export const fromLeft = {
  initial: { opacity: 0, translateX: -50 },
  animate: {
    opacity: 1,
    translateX: 0,
  },
};

export const fromRight = {
  initial: { opacity: 0, translateX: 50 },
  animate: {
    opacity: 1,
    translateX: 0,
  },
};
