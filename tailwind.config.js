/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xs": { max: "424px" },
      xs: { min: "425px" },
      sm: { min: "640px" },
      md: { min: "768px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },
      "2xl": { min: "1536px" },
    },
    extend: {
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      animation: {
        chitchat: "chitchat 1.2s linear both",
      },
      colors: {
        backgroundColor: "#000000",
        headColor: "#ffffff",
        textColor: "#fafafa",
        secondaryTextColor: "#939b9f",
        headStrong: "#ffab00",
        textStrong: "#f5d073",
        buttonHoverBorder: "#694976",
        buttonBgColor: "#9c27b0",
        buttonBorder: "rgba(156, 39, 176, 0.5)",
        buttonTextColor: "#9c27b0",
        navlinkColor: "#ffffff",
        navlinkBg: "rgba(0,0,0,0.05)",
        navlinkActiveColor: "#5A56E8",
        iconColor: "#c4c2ff",
        iconBgColor: "#5956e8",
        footerBgColor: "#191919",
        strongBgColor: "#292930",
        adsBgColor: "#ffdf8a",
        instaColorCode: "#DD2A7B",
        linkedInColorCode: "#0077B5",
        gitHubColorCode: "#F05033",
        youTubeColorCode: "#FF0000",
      },
      fontFamily: {
        poppins: ["Poppins", "regular"],
        Montserrat: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
