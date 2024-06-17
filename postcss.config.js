// module.exports = {
//   plugins: {
//     tailwindcss: {},
//     autoprefixer: {},
//     cssnano: {
//       preset: "default",
//     },
//   },
// };

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === "production"
      ? { cssnano: { preset: "default" } }
      : {}),
  },
};
