import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Polvo π',
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
      title: 'Polvo π',
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
          href: 'https://github.com/CristianoFIlho/polvopi-app-kotlin',
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
              href: 'https://github.com/CristianoFIlho/polvopi-app-kotlin',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'Monografia',
          items: [
            {
              label: 'A GAMIFICAÇÃO COMO ESTRATÉGIA PARA O ENSINO DE MATEMÁTICA BÁSICA PARA ALUNOS DO ENSINOFUNDAMENTAL I',
              href: 'https://www.overleaf.com/download/project/64f5da46c11ab31449379219/build/190955533d4-6d70838bc41d8233/output/output.pdf?compileGroup=standard&clsiserverid=clsi-pre-emp-n2d-b-f-7mtd&enable_pdf_caching=true&popupDownload=true',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Polvo π, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
