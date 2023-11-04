import { defaultTheme, defineUserConfig } from 'vuepress'

const { description } = require('../package')

export default defineUserConfig({
  title: 'chora studio blog',
  description: description,
  theme: defaultTheme({
    colorMode: 'dark',
    contributors: false,
    editLink: false,
    lastUpdated: false,
    logo: 'images/chora_trans_light_small.png',
    logoDark: 'images/chora_trans_dark_small.png',
    navbar: [
      {
        text: 'News',
        link: '/news/index.md',
      },
      {
        text: 'Research',
        link: '/research/index.md',
      },
      {
        text: 'Other',
        link: '/other/index.md',
      },
    ],
    sidebar: {
      '/news/': [
        {
          text: 'Introduction',
          collapsible: false,
          children: [
            '/news/index.md',
          ],
        },
        {
          text: 'Table of Contents',
          collapsible: false,
          children: [],
        },
      ],
      '/research/': [
        {
          text: 'Introduction',
          collapsible: false,
          children: [
            '/research/index.md',
          ]
        },
        {
          text: 'Table of Contents',
          collapsible: false,
          children: [],
        },
      ],
      '/other/': [
        {
          text: 'Introduction',
          collapsible: false,
          children: [
            '/other/index.md',
          ]
        },
        {
          text: 'Table of Contents',
          collapsible: false,
          children: [],
        },
      ],
    },
    sidebarDepth: 0,
  }),
})
