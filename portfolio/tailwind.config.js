module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", // Adjust paths to your project's structure
    ],
    theme: {
        extend: {
            colors: {
                backgroundColor: "#F5F5F7",
                borderColor: "#D8D8D8",
                brand: {
                    light: "#397FF2",
                    default: "#40A4FA",
                    dark: "#83D7F9",
                },
                text: {
                    dark: "#1D1D1F",
                    light: "#6E6E73",
                },
            },
        },
    },
    plugins: [],
};
