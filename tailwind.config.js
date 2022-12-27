/**
 * Tailwind configuration.
 *
 * @type {import("tailwindcss").Config}
 */
module.exports = {

    darkMode: "class",

    content: [
        "./src/.vitepress/**/*.js",
        "./src/.vitepress/**/*.ts",
        "./src/.vitepress/**/*.vue"
    ],

    theme: {
        extend: {},
    },

    plugins: [],
}
