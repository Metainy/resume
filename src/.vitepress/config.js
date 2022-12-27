import { defineConfig } from "vitepress";

export default defineConfig({

    // base: "/",

    srcDir: "./docs",

    outDir: "../dist",

    // cacheDir: "../cache",

    cleanUrls: "with-subfolders",

    lang: "en-US",

    appearance: true,

    titleTemplate: "Metainy",

    description: "Mahmoud El Metainy resume.",

    head: [
        ["link", {
            rel: "icon", type: "image/svg+xml", href: "data:image/svg+xml,<svg" +
                " xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100" +
                " 100%22><text y=%22.9em%22 font-size=%2290%22>📖</text></svg>"
        }],

        // ["link", { rel: "icon", type: "imageg/png", href: "/icons/gl-hero.png" }]
    ],

    lastUpdated: false,

    // Markdown related configurations
    markdown: {
        theme: { light: "github-dark", dark: "github-dark" },
        anchor: {
            level: [2, 3],
        },
    },

    // Theme and layout related configurations.
    themeConfig: {

        logo: "",

        siteTitle: "hi@metainy > ",

        outline: 2,

        outlineTitle: " ",

        socialLinks: [
            { icon: "github", link: "https://github.com/GamersLounge" }
        ],

        nav: [
            { text: "Projects", link: "/projects" },
            { text: "Blog", link: "https://metainy.me" },
        ],

        sidebar: [],
    }
});
