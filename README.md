# Vue 3 2022 Development Starter

This template will get you started developing with Vue 3 in a modern development environment. 

## Features

- [Vite](https://vitejs.dev/guide/)
- [Vue 3](https://vuejs.org/guide/introduction.html)
- [TypeScript with Composition API](https://vuejs.org/guide/typescript/composition-api.html)
- [Tailwind CSS v3](https://tailwindcss.com/docs/configuration)
- [Vue Router v4](https://github.com/vuejs/router)
- Preconfigured ESLint + Prettier
- Lint Staged Files on Commit
- Enforce Conventional Commits
- Route Based Layouts

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's Take Over mode by following these steps:

1. Run `Extensions: Show Built-in Extensions` from VS Code's command palette, look for `TypeScript and JavaScript Language Features`, then right click and select `Disable (Workspace)`. By default, Take Over mode will enable itself if the default TypeScript extension is disabled.
2. Reload the VS Code window by running `Developer: Reload Window` from the command palette.

You can learn more about Take Over mode [here](https://github.com/johnsoncodehk/volar/discussions/471).
