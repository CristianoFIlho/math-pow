import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Math.Pow',
  tagline: 'Contando e aprendendo com você!',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-site.example.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt',
    locales: ['pt'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Math.Pow',
      logo: {
        alt: 'My Site Logo',
        src: 'img/apple-touch-icon.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Sobre o projeto',
        },
        {
          href: 'https://github.com/CristianoFIlho/math-pow',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Doocumentação',
          items: [
            {
              label: 'Prototipagem',
              href: 'https://www.figma.com/design/zutwlOUAlBJXTnOE4aFzfZ/MATH.POW-(Copy)?node-id=0-1&t=cNuxYjgBlKQRtOAA-1',
            },
                        {
              label: 'Sobre o Projeto',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Comunidade',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/CristianoFIlho/math-pow',
            },
            {
              label: 'Apresentação',
              href: 'https://www.figma.com/proto/oUGTnCPotnnYjf6HXurQPK/APRESENTA%C3%87%C3%83O-(Copy)?node-id=0-1&t=rSr2GMXH6Xazxij9-1',
            },
          ],
        },
        {
          title: 'Monografia',
          items: [
            {
              label: 'A GAMIFICAÇÃO COMO ESTRATÉGIA PARA O ENSINO DE MATEMÁTICA BÁSICA PARA ALUNOS DO ENSINO FUNDAMENTAL I',
              href: 'https://www.overleaf.com/read/byqjmzvzgcnd#ac4abd',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Math.Pow, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
