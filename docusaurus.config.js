// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'React Flow',

  tagline: 'Wire Your Ideas With React Flow',
  url: 'https://reactflow.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'wbkd', // Usually your GitHub org/user name.
  projectName: 'react-flow', // Usually your repo name.
  customFields: {
    description:
      'A highly customizable library for building interactive node-based UIs, editors, flow charts and diagrams.',
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/wbkd/react-flow-docs/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/wbkd/react-flow-docs/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'React Flow',
        logo: {
          alt: 'React Flow Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'introduction',
            position: 'right',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'examples/overview',
            position: 'right',
            label: 'Examples',
          },
          { to: '/blog', label: 'Blog', position: 'right' },
          {
            href: 'https://github.com/wbkd/react-flow',
            position: 'right',
            label: 'Github',
            className: 'hide-svg-icon',
          },
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://pro.reactflow.dev/pricing',
            position: 'right',
            label: 'React Flow Pro',
            className: 'button__rfpro hide-svg-icon',
          },
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Introduction',
                to: '/docs/introduction',
              },
              {
                label: 'Guides',
                to: '/docs/guides/custom-nodes',
              },
              {
                label: 'API Reference',
                to: '/docs/api/react-flow-props',
              },
              {
                label: 'Examples',
                to: '/docs/examples/overview',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/wbkd/react-flow',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/RVmnytFmGW',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/reactflowdev',
              },
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/react-flow',
              },
            ],
          },
          {
            title: 'React Flow Pro',
            items: [
              {
                label: 'Dashboard',
                href: 'https://pro.reactflow.dev',
              },
              {
                label: 'Pricing',
                href: 'https://pro.reactflow.dev/pricing',
              },
              {
                label: 'Signup',
                to: 'https://pro.reactflow.dev/signup',
              },
              {
                label: 'Login',
                to: 'https://pro.reactflow.dev/login',
              },
            ],
          },
          {
            title: 'Legal',
            items: [
              {
                label: 'Contact',
                href: 'https://pro.reactflow.dev/contact',
              },
              {
                label: 'Privacy Policy',
                href: 'https://webkid.io/privacy',
              },
              {
                label: 'Terms of Service',
                to: 'https://pro.reactflow.dev/terms',
              },
              {
                label: 'Imprint',
                to: 'https://webkid.io/imprint',
              },
            ],
          },
        ],
        copyright: `<a href="mailto:info@webkid.io">info@webkid.io</a> — Copyright © 2022 <a href="https://webkid.io" target="_blank">webkid GmbH</a>. All rights reserved.`,
      },
      prism: {
        theme: require('prism-react-renderer/themes/github'),
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      algolia: {
        appId: '6J7SBG6VXX',
        apiKey: '46361401824ee0e359945db0a9d72669',
        indexName: 'reactflow',
        contextualSearch: false,
        searchPagePath: false,
      },
      metadata: [
        {
          name: 'description',
          content:
            'A highly customizable library for building interactive node-based UIs, editors, flow charts and diagrams.',
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:site',
          content: '@reactflowdev',
        },
        {
          name: 'twitter:image',
          content: 'https://reactflow.dev/img/social/social.jpeg',
        },
        {
          name: 'og:image',
          content: 'https://reactflow.dev/img/social/social.jpeg',
        },
      ],
    }),
  trailingSlash: true,
};

module.exports = config;
