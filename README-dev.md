
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

## Run and Build
```
yarn docs:dev
yarn docs:build

```

## Install packages
```
yarn add -D vuepress-plugin-seo2
yarn add -D vuepress-plugin-md-enhance
```

##
```
cd docs
echo 'www.atlantadupr.com' > CNAME
echo 'www.atlantadupr.com' > docs/CNAME
echo 'www.atlantadupr.com' > ../docs/CNAME

```

### TBD
```
yarn add -D vuepress-plugin-mermaid-wrapper
```


## Error base url

- https://github.com/vuejs/vuepress/issues/1935
- https://vuepress.vuejs.org/config/#base
- https://vuepress.vuejs.org/guide/deploy.html#github-pages


## Error Fix
```
  "scripts": {
    "dev": "NODE_OPTIONS=--openssl-legacy-provider vuepress dev src",
    "build": "NODE_OPTIONS=--openssl-legacy-provider vuepress build src"
  },
```


## image

```
curl https://cdn11.bigcommerce.com/s-tl5mxjzfsl/images/stencil/640w/products/380/11737/FRKLXPI_PerformanceIndoor_NE_single_1000__50097.1665601923.jpg -o pball.jpg

curl https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlalp31iJ8YBwRwBKe8O-LAyfHnagBqG3pRyvnyOHHOXZJyDW49R2l&usqp=CAU  -o pball.jpg

```
### Resources
- https://stackoverflow.com/questions/71273466/how-to-fix-err-ossl-evp-unsupported-error-in-vue

### Packages
- https://plugin-seo2.vuejs.press/
- https://plugin-md-enhance.vuejs.press/


## Resources
- https://v2.vuepress.vuejs.org/guide/getting-started.html#manual-installation
- https://www.markdownguide.org/cheat-sheet/
- https://www.w3schools.com/colors/colors_names.asp
- https://dev.to/stackoverturf/so-you-bought-a-domain-name-4a96
- https://vuepress.vuejs.org/guide/deploy.html#github-pages