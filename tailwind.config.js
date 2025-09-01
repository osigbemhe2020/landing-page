// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        sample3: "url('~assets/sample3.jpg')", // or '~./src/assets/sample3.jpg'
      },
    },
  },
  plugins: [],
};

