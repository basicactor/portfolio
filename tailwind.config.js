module.exports = {
  theme: {
    screens: {
      //参考：https://hashimotosan.hatenablog.jp/entry/2020/12/06/182327
      md: "520px", //タブレット用
      lg: "960px", //laptop/desktop用
    },
  },
  content: [
    "./components/**/*.{vue,js,jsx,ts,tsx}",
    "./pages/**/*.{vue,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
