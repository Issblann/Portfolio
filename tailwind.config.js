/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Primary: "#2563EB",
        PrimaryLight: "#497DEE",
        PrimaryDark: "#134FD2",
        Secondary: "#111827",
        SecondaryLight: "#172135",
        SecondaryDark: "#090D15",
        WhiteDark: "#E3E8ED",
      },

      fontSize: {
        textH1: "3.75rem",
        textH2: "3rem",
        textH3: "2.25rem",
        textH4: "1.875rem",
        textH5: "1.5rem",
        leadParagraph: "1.25rem",
        textbody: ["1rem", { fontWeight: "400" }],
        textsmall: ["0.75rem", { fontWeight: "400" }],
      },

      fontFamily: {
        SourceCodePro: ["Source Code Pro", "monospace"],
        OpenSans: ["Open Sans", "sans-serif"],
        SourceSansPro: ["Source Sans Pro", "sans-serif"],
      },
    },
  },
  plugins: [],
};
