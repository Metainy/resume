# Resume

[![Deployment](https://github.com/Metainy/resume/actions/workflows/deploy.yml/badge.svg)](https://github.com/Metainy/resume/actions/workflows/deploy.yml)
[![blog](https://img.shields.io/badge/Metainy-Resume-red)](https://resume.metainy.me)
[![VitePress](https://img.shields.io/badge/VitePress-build-1aad19)](https://vitepress.vuejs.org/)
[![license](https://img.shields.io/badge/License-Apache--2.0-orange)](LICENSE)

This is my personal resume. It's powered by [VitePress] with an extended default theme for various modifications.

⚠️ Still isn't finished because I am lazy 🙃

## Project Setup

#### Install dependencies

```
npm install
```

#### Start development server

```
npm run dev
```

#### Compiles and build project

```
npm run build
```

## Usage

* #### Site configuration

  You can change the main site configuration in `src/config.js`.  
  That include the title, navigation, sidebar, social media icons, etc, you can check [Vitepress] documentation
  for a comprehensive list of options.

* #### Site content

  All page contents are located inside `docs` directory, including all media files.

* #### Custom components and styles
  Few custom components and styles are used in this project. All used components are located inside
  `src/.vitepess/theme/components`. As for overriden styles it's in `src/.vitepress/theme/styles` directory.

## License

This blog is [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0) licensed, see the [LICENSE](LICENSE) file
for details.

[VitePress]: (https://vitepress.vuejs.org/)
