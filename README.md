# Simple-nuxt-pwa

> Simple example for PWA using NuxtJs based on Scotch tutorial (https://scotch.io/tutorials/build-a-progressive-web-application-with-nuxtjs)

## Build Setup

``` bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```
## Host your app for test (using [netlify](https://app.netlify.com/))

1- First, you'll need to put your project directory on Github
2- Second, When prompted, add in `yarn generate` as a build command and `dist` as a publish directory.
3- Finally, Once the build is complete, your website will be available at the specified address.

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).

## Packages

- @nuxtjs/axios: Secure and easy Axios integration with Nuxt.js.
- @nuxtjs/bulma: This module leverages the lovely Bulma CSS framework.
- @nuxtjs/dotenv: This module loads your .env file into your context options.
- @nuxtjs/pwa: Supercharge Nuxt with a heavily tested, updated and stable PWA solution.

