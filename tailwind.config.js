module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
        160: "40rem",
        192: "44rem",
      },
      colors: {
        "rickmorty-blue": "#00b1c8",
        "custom-gray": "#eaeaea",
      },
    },
  },
  plugins: [],
};
