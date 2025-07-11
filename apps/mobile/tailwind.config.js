/** @type {import('tailwindcss').Config} */
const tailwindConfig = require("@repo/tailwind-config");

module.exports = {
  ...tailwindConfig,
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  // content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  // presets: [require("nativewind/preset")],
  // theme: {
  //   extend: {},
  // },
  // plugins: [],
};
