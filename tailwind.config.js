module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
              "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
              "gradient-conic":
                "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
              lamaSky: "#C3EBFA",
              lamaSkyLight: "#EDF9FD",
              lamaPurple: "#CFCEFF",
              lamaPurpleLight: "#F1F0FF",
              lamaYellow: "#FAE27C",
              lamaYellowLight: "#FEFCE8",
            },
          },
    },
    plugins: [require('@tailwindcss/forms')],
}
