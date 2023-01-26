
## Setup vurpress 2.0

```
mkdir vue-root
cd vue-root
yarn init
yarn add -D vuepress@next
echo 'node_modules' >> .gitignore
echo '.temp' >> .gitignore
echo '.cache' >> .gitignore
mkdir docs
echo '# Hello VuePress' > docs/README.md
```

## Run 2.0
```
yarn docs:dev
```

## Setup
```
yarn create vuepress-site vue-docs
cd vue-docs
cd docs
yarn install
```

## Rund and Build
```
yarn dev
yarn build

```

## Install packages
```
yarn add -D vuepress-plugin-seo2
yarn add -D vuepress-plugin-md-enhance
```

### TBD
```
yarn add -D vuepress-plugin-mermaid-wrapper
```



## Error Fix
```
  "scripts": {
    "dev": "NODE_OPTIONS=--openssl-legacy-provider vuepress dev src",
    "build": "NODE_OPTIONS=--openssl-legacy-provider vuepress build src"
  },
```
### Resources
- https://stackoverflow.com/questions/71273466/how-to-fix-err-ossl-evp-unsupported-error-in-vue

### Packages
- https://plugin-seo2.vuejs.press/
- https://plugin-md-enhance.vuejs.press/


## Resources
- https://v2.vuepress.vuejs.org/guide/getting-started.html#manual-installation
- https://www.markdownguide.org/cheat-sheet/
