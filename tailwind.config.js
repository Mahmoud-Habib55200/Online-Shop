// tailwind.config.js

export const content = ["./src/**/*.{html,js,jsx,ts,tsx}"];
export const theme = {
  screens: {
    xs: "320px",
    sm: "375px",
    sml: "500px",
    md: "667px",
    mdl: "768px",
    lg: "660px",
    lgl: "1024px",
    xl: "1280px",
  },

  extend: {
    keyframes: {
      slideInFromTop: {
        "0%": { opacity: "0", transform: "translateY(-50px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      slideInFromBottom: {
        "0%": { opacity: "0", transform: "translateY(50px)" },
        "100%": { opacity: "1", transform: "translateY(0)" },
      },
      slideOutFromTop: {
        "0%": { opacity: "1", transform: "translateY(0)" },
        "100%": { opacity: "0", transform: "translateY(-50px)" },
      },
      slideOutFromBottom: {
        "0%": { opacity: "1", transform: "translateY(0)" },
        "100%": { opacity: "0", transform: "translateY(50px)" },
      },
    },
    animation: {
      slideInTop: "slideInFromTop 0.5s ease-out",
      slideInBottom: "slideInFromBottom 0.5s ease-out",
      slideOutTop: "slideOutFromTop 0.5s ease-out",
      slideOutBottom: "slideOutFromBottom 0.5s ease-out",
    },
  },
};
export const plugins = [
  // ...
  require("@tailwindcss/aspect-ratio"),
];
