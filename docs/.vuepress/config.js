module.exports = (context) => {
  return {
    theme: require.resolve("../../theme"),

    locales: require("./locales")
  };
};
