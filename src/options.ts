export const snowEffect = {
  particles: {
    number: {
      value: 400,
      density: {
        enable: true,
      },
    },
    color: {
      value: "#BE9164",
    },
    shape: {
      type: "circle",
    },
    opacity: {
      value: 1,
    },
    size: {
      value: 5,
    },
    move: {
      enable: true,
      speed: 3,
      direction: "bottomRight",
      straight: true,
    },
    wobble: {
      enable: true,
      distance: 10,
      speed: 10,
    },
    zIndex: {
      value: {
        min: 0,
        max: 100,
      },
      opacityRate: 10,
      sizeRate: 10,
      velocityRate: 10,
    },
  },
};
