/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        axiforma: ["Axiforma", "sans-serif"], // Default font family
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient": `radial-gradient(53.58% 53.58% at 50% 46.42%, rgba(82, 13, 39, 0.06) 0%, rgba(0, 0, 0, 0.21) 100%),
                           linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))`,
      },
      animation: {
        updown: "updown 2s ease-in-out infinite", // Define custom animation
      },
      keyframes: {
        updown: {
          "0%, 100%": { transform: "translateY(0)" }, // Initial and end positions
          "50%": { transform: "translateY(-20px)" }, // Middle position (move up)
        },
      },
    },
    plugins: [],
  },
};
