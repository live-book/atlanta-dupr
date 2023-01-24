

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

## Error Fix
```
  "scripts": {
    "dev": "NODE_OPTIONS=--openssl-legacy-provider vuepress dev src",
    "build": "NODE_OPTIONS=--openssl-legacy-provider vuepress build src"
  },
```
### Resources
- https://stackoverflow.com/questions/71273466/how-to-fix-err-ossl-evp-unsupported-error-in-vue
