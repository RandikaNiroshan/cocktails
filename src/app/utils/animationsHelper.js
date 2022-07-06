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
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const fromTop = {
  initial: { opacity: 0, y: -50 },
  animate: {
    opacity: 1,
    y: 0,
  },
};

export const fromLeft = {
  initial: { opacity: 0, x: -50 },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export const fromRight = {
  initial: { opacity: 0, x: 50 },
  animate: {
    opacity: 1,
    x: 0,
  },
};

export const mobileMenu = {
  initial: { x: "100vw", opacity: 0.8 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      ease: "circIn",
      duration: 0.3,
      delay: 0.1,
    },
  },
  exit: {
    x: "-100vw",
    opacity: 0.9,
    transition: {
      ease: "circIn",
      duration: 0.25,
      delay: 0.1,
    },
  },
};

export const menuFromLeft = {
  initial: { opacity: 0, x: "-50vw" },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "linear",
      duration: 0.4,
      delay: 0.4,
    },
  },
};

export const menuFromRight = {
  initial: { opacity: 0, x: "50vw" },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "linear",
      duration: 0.4,
      delay: 0.4,
    },
  },
};

export const closeIconAnimate = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.4,
      delay: 1.2,
    },
  },
};

export const modalBackDrop = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
  },
};

export const modalAnimation = {
  initial: { opacity: 0, y: "-100vh" },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      ease: "circIn",
      duration: 0.4,
      delay: 0.2,
    },
  },
  exit: {
    opacity: 0,
    y: "-100vh",
    transition: {
      ease: "circIn",
      duration: 0.3,
      delay: 0.1,
    },
  },
};

export const svgPathAnimation = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: [0,1,0],
    transition: {
      repeat: Infinity,
      duration: 21,
      delay: 2,
    },
  },
};

export const svgDetailsAnimation = {
  initial: { pathLength: 0 },
  animate: {
    pathLength: [0,1,0],
    transition: {
      repeat: Infinity,
      duration: 9,
      delay: 8,
    },
  },
};
