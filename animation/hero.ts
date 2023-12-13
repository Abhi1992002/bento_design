export const heroInitialAnimation = {
  hidden: { y: 100, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.9,
      delay: 0.5,
      when: "beforeChildren",
    },
  },
};
