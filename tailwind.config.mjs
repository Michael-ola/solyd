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
        updown: "updown 2s ease-in-out infinite", // Define custom animation,
        marquee: "marquee 7s linear infinite",
        "rotate-infinite": "rotate 12s linear infinite",
      },
      keyframes: {
        updown: {
          "0%, 100%": { transform: "translateY(0)" }, // Initial and end positions
          "50%": { transform: "translateY(-20px)" }, // Middle position (move up)
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // Make sure it moves 50% of the content width
        },
        rotate: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
    plugins: [],
  },
};
