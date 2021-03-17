module.exports = (context) => {
  return {
    theme: require.resolve("../../theme"),

    locales: require("./locales"),

    themeConfig: {
      clustrmaps: {
        enable: true,
        id: "clustrmaps", // clstr_globe / clustrmaps
        src:
          "//cdn.clustrmaps.com/map_v2.js?cl=333333&w=a&t=t&d=kuCCiVvtASTqmAMxPSTLcjxs-p8j6ht3LUi9z9Q-OKc&co=ffffff&cmo=3acc3a&cmn=ff5353&ct=333333"
      },
      playlist: {
        enable: true
      }
    }
  };
};
