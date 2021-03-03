module.exports = (context) => {
  console.log(context);
  return {
    theme: require.resolve("../../theme")
  };
};
