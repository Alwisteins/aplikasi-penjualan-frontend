import flowbiteReact from "flowbite-react/tailwind";
import flowbite from "flowbite/plugin";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    flowbiteReact.content(),
  ],
  theme: {
    extend: {},
  },
  plugins: [flowbiteReact.plugin(), flowbite()],
};
