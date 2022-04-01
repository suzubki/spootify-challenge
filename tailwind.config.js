const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            screens: {
                xs: { min: "400px", max: "640px" },
                ...defaultTheme.screens,
            },
            fontFamily: {
                Arimo: ["Arimo", "sans serif"],
            },
        },
    },
    plugins: [],
};
