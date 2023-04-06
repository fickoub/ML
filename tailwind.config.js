module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        amber_900: "#ff7900",
        bluegray_100_a5: "#d9d9d9a5",
        white_A700_e2: "#ffffffe2",
        gray_500: "#a7a7a7",
        black_900: "#000000",
        bluegray_100_aa: "#d9d9d9aa",
        bluegray_100: "#d9d9d9",
        bluegray_100_7f: "#d9d9d97f",
        black_900_3f: "#0000003f",
        white_A700: "#ffffff",
        bluegray_100_e0: "#d9d9d9e0",
        bluegray_100_8c: "#d9d9d98c",
      },
      fontFamily: { inter: "Inter" },
      boxShadow: { bs: "0px 4px  4px 0px #0000003f" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
