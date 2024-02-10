import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Texitor Documentation",
  description: "Documentation for the Latex editor, Texitor",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Installation", link: "/installation" },
    ],

    sidebar: [
      {
        text: "Guide",
        items: [
          { text: "Installation Guide", link: "/installation" },
          { text: "Troubleshooting", link: "/troubleshooting" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/Texitor/texitor-releases" },
    ],
  },
});
