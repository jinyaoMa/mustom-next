module.exports = (context) => {
  return {
    theme: require.resolve("../../theme"),

    locales: require("./locales"),

    markdown: {
      lineNumbers: false,
      extractHeaders: ["h1", "h2", "h3", "h4", "h5", "h6"]
    }
  };
};
