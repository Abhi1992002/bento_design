export const opacityVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 2,
      when: "beforeChildren",
    },
  },
};
