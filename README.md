# Guia de Navegação da Landing Page 📱

## Seções Principais

### 1. Documentação
- Localizada na barra lateral sob "Sobre o projeto"
- Contém documentação principal do projeto
- Acessível pela barra de navegação superior ou barra lateral

### 2. Tecnologias Utilizadas
Detalhamento das principais tecnologias:
- **Docusaurus**: Plataforma de documentação
- **Next.js**: Framework web
- **Firebase**: Serviços de backend
- **React Native**: Desenvolvimento mobile

### 3. Recursos do Projeto
Acessível via navegação lateral:
- Objetivos do projeto
- Diagramas de classe
- Requisitos funcionais/não-funcionais
- Protótipos (Figma)

### 4. Como Contribuir
Localizado em "Como contribuir com o projeto?":
- Formulários de feedback
- Instruções para testes
- Como reportar problemas

## Elementos de Navegação

### Barra Superior
- Link para documentação
- Link para repositório GitHub

### Barra Lateral
- Organização hierárquica com seções:
  - Documentação
  - Informações técnicas
  - Diretrizes de contribuição

### Elementos Interativos
- Visualização de protótipos
- Formulários de feedback
- Links para download

### Rodapé
- Recursos adicionais
- Links da comunidade
- Informações de copyright


# Como executar esse Projeto

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
