module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors : {
        dark :'#09091a',
      },
    },
  },
  plugins: [require("daisyui")],
};
