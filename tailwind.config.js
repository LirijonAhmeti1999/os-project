module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bgPrimaryColor: "#d1edf1",
        bgSecondColor: "#e0edcb",
        primary: "#C9EEF7",
        secondary: "#DEEDC6",
        grey: "#D9D9D9",
      },
      height: {
        100: "100vh",
        90: "90vh",
      },
      boxShadow: {
        "4xl": "rgba(0, 0, 0, 0.35) 0px 5px 15px",
      },
    },
  },
  plugins: [],
};
