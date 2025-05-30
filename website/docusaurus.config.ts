import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Django Bridge - Django / React application framework",
  tagline:
    "The simple way to build Django applications with modern React frontends",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://django-bridge.org",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  trailingSlash: true,

  organizationName: "django-bridge",
  projectName: "django-bridge",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarCollapsible: false,
          sidebarPath: "./sidebars.ts",
          editUrl:
            "https://github.com/django-bridge/django-bridge/tree/main/website/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "img/social-card.jpg",
    navbar: {
      logo: {
        alt: "Django Bridge",
        src: "img/django-bridge-text.svg",
        width: 120,
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "guide",
          position: "right",
          label: "docs",
        },
        {
          href: "https://github.com/django-bridge/django-bridge/discussions",
          position: "right",
          label: "discuss",
        },
        {
          "aria-label": "GitHub Repository",
          href: "https://github.com/django-bridge/django-bridge",
          className: "navbar--github-link",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Documentation",
          items: [
            {
              label: "Introduction",
              to: "/docs/introduction",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "GitHub Discussions",
              href: "https://github.com/django-bridge/django-bridge/discussions",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/kaedroho",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/django-bridge/django-bridge",
            },
            {
              label: "PyPI",
              href: "https://pypi.org/project/django-bridge/",
            },
            {
              label: "npm",
              href: "https://www.npmjs.com/package/@django-bridge/react",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Karl Hobley and individual contributors`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  scripts: [
    {
      src: "https://plausible.io/js/script.js",
      defer: true,
      "data-domain": "django-bridge.org",
    },
  ],
  plugins: [
    [
      "docusaurus-pushfeedback",
      {
        project: "d2b2opllpj",
      },
    ],
  ],
};

export default config;
