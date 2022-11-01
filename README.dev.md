# Developer documentation


## Tech stack

1. [Vue 3](https://vuejs.org/) 
1. [Vite](https://vitejs.dev/)
1. [Vitest](https://vitest.dev/)
1. [TypeScript](https://www.typescriptlang.org/)
1. [vite-ssr-plugin](https://vite-plugin-ssr.com/)

## IDE / dev setup

We recommend using Volar VSCode extension for improved development experience. The project uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

1. [VS Code](https://code.visualstudio.com/)
1. [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

## Development installation

```shell
cd <some dir>
git clone https://github.com/ardc-fair-checklist/ardc-fair-checklist .
npm install
```

## npm scripts

- `npm run build`: build the project for production, output files in `./dist`
- `npm run dev`: build the project for development, watch files for changes, serve output files on `localhost`.
- `npm run prod`: shorthand for `npm run build && npm run server:prod`
- `npm run server`: serve the development build
- `npm run server:prod`: serve the production build

## Versioning strategy

In the current app, there are multiple entities that could be versioned: the data questions JSON, the data questions app, the software questions JSON, and the software questions app. The DRY (Don't Repeat Yourself) principle would suggest to make one app that can be used to render data as well as software. However, this becomes more difficult to maintain as more versions of the data questions and software questions (and perhaps new future topics) are introduced. We therefore chose to have one directory for each combination of topic and version. That one directory contains all the components, along with all the data needed to render the app for that particular topic and that particular version. Naturally, this comes at the cost of having duplicate code. Each combination of topic and version is assigned its own route, and can choose to do its own processing on supplied query parameters.

## Publishing

There is a GitHub action `/.github/workflows/publish.yml` that builds the project for production and hosts it at https://ardc-fair-checklist.github.io/ssg. The GitHub action can be triggered manually via the GitHub user interface.

## TODO

1. ~~add points to questions~~
1. ~~show points in interface for the time being~~
1. ~~calculate partial and total progress~~
1. ~~write jsonschema for questions~~
1. ~~add rst badge~~
1. ~~investigate migrating to ~~SSR~~SSG [Prerendering](https://vite-plugin-ssr.com/)~~
1. ~~make questions part of the store and settable, derive other variables and make them gettable~~
1. ~~write foundation for versioning of list of questions~~
1. publish coverage in ci
1. add testing as prose
1. implement testing prose
1. add validation of query parameters
1. use the checklist for a couple of existing software packages
1. revisit questions content with TomH
1. investigate using tailwindcss for styling
1. make Banner appear in production
1. when user supplies query params, set state and redirect or show Banner
1. redirecting from unversioned software and data urls
1. look into client side routing v server side routing
