import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Lara Quiz",
    base: "/quiz-doc/",
    description: "Api Documentation for Lara Quiz",
    themeConfig: {
        nav: [
            { text: "Home", link: "/" },
            { text: "App download", link: "/" },
        ],

        sidebar: [
            {
                text: "Setup",
                items: [{ text: "Installation", link: "/setup/installation" }],
            },
            {
                text: "Api Documentation",
                items: [
                    { text: "Authentication", link: "/api/authentication" },
                    { text: "User", link: "/api/user" },
                ],
            },
        ],

        socialLinks: [
            { icon: "github", link: "https://github.com/WYL-Doinet/quiz" },
        ],
    },
});
