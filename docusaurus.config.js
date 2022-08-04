// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "VISAI API Documentation",
  tagline: "AI Platform Inference API",
  url: "https://visai-ai.github.io",
  baseUrl: "/visai-inference-api-doc/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "cloud-annotations", // Usually your GitHub org/user name.
  projectName: "docusaurus-openapi", // Usually your repo name.

  presets: [
    [
      "docusaurus-preset-openapi",
      /** @type {import('docusaurus-preset-openapi').Options} */
      ({
        // api: {
        //   path: "api/inference-api.yaml",
        //   routeBasePath: "/",
        // },
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          editUrl:
            "https://github.com/cloud-annotations/docusaurus-openapi/edit/main/demo/",
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        proxy: {
          "/proxy": {
            target: "http://localhost:8091",
            pathRewrite: { "^/proxy": "" },
          },
        },
      }),
    ],
  ],

  plugins: [
    // [
    //   "docusaurus-plugin-openapi",
    //   {
    //     id: "cos",
    //     path: "examples/openapi-cos.json",
    //     routeBasePath: "cos",
    //   },
    // ],
    // [
    //   "docusaurus-plugin-openapi",
    //   {
    //     id: "multi-spec",
    //     path: "examples",
    //     routeBasePath: "multi-spec",
    //   },
    // ],
    [
      "docusaurus-plugin-openapi",
      {
        id: "inference-api",
        path: "api",
        routeBasePath: "inference-api",
      },
    ],
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      colorMode: {
        disableSwitch: false,
        defaultMode: "dark",
      },
      navbar: {
        title: "API Documentation",
        logo: {
          alt: "VISAI",
          src: "img/visai.png",
        },
        items: [
          // {
          //   type: "doc",
          //   docId: "intro",
          //   position: "left",
          //   label: "Docs",
          // },
          {
            position: "left",
            label: "API",
            items: [
              {
                to: "/inference-api/sentiment-anlaysis-base-model",
                label: "Sentiment Anlaysis",
              },
              {
                to: "/inference-api/speech-to-text-base-model",
                label: "Speech to Text",
              },
              {
                to: "/inference-api/word-tokenization-base-model",
                label: "Word Tokenization",
              },
            ],
          },
          // {
          //   label: "Examples",
          //   position: "left",
          //   items: [
          //     { to: "/petstore", label: "Petstore" },
          //     { to: "/cos", label: "Cloud Object Storage" },
          //     { to: "/multi-spec", label: "Multi-spec" },
          //   ],
          // },
          // {
          //   href: "https://visai.ai/",
          //   position: "right",
          //   className: "header-github-link",
          //   "aria-label": "GitHub repository",
          // },
        ],
      },
      footer: {
        style: "dark",
        logo: {
          alt: "Deploys by Netlify",
          src: "img/visai.png",
          width: 160,
          height: 40,
          href: "https://visai.ai/",
        },
        copyright: `Copyright © ${new Date().getFullYear()} VISAI. All rights reserved.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      api: {
        authPersistance: "localStorage",
      },
    }),
};

module.exports = config;
