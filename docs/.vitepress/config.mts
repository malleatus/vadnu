import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Vadnu Docs",
  description:
    "What now? A repo for supporting and documenting the personal knowledge management system for [@hjdivad](https://github.com/hjdivad) and [@rwjblue](https://github.com/rwjblue).",
  lang: "en-US",
  cleanUrls: true,
  base: "/vadnu/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
    ],

    sidebar: [
      { text: "Introduction", link: "/" },
      { text: "Getting Started", link: "/getting-started" },
      {
        text: "Structure",
        collapsed: false,
        items: [
          { text: "Projects", link: "/structure/projects" },
          { text: "References", link: "/structure/references" },
          { text: "Someday", link: "/structure/someday" },
          { text: "TODO.md", link: "/structure/todo" },
        ],
      },
      {
        text: "Workflows",
        collapsed: false,
        items: [
          { text: "Daily", link: "/workflows/daily" },
          { text: "Weekly", link: "/workflows/weekly" },
          { text: "Quarterly", link: "/workflows/quarterly" },
          { text: "Yearly", link: "/workflows/yearly" },
        ],
      },
      {
        text: "Tools",
        collapsed: false,
        items: [
          { text: "Obsidian", link: "/tools/obsidian" },
          { text: "Neovim", link: "/tools/neovim" },
        ],
      },
      { text: "Usage", link: "/usage" },
      // {
      //   text: "Examples",
      //   items: [
      //     { text: "Markdown Examples", link: "/markdown-examples" },
      //     { text: "Runtime API Examples", link: "/api-examples" },
      //   ],
      // },
    ],

    editLink: {
      pattern: "https://github.com/malleatus/vadnu/edit/master/docs/:path",
      text: "Edit this page on GitHub",
    },

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2025-present Robert Jackson & David J. Hamilton",
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/malleatus/vadnu",
      },
    ],

    search: { provider: "local" },
  },
});
