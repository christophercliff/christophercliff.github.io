Github publishes [User Pages][user pages] from the `master` branch, so use `supermaster` as the default branch.

```
$ npm run dev
$ npm run build
$ npm run deploy
```

[user pages]: https://help.github.com/articles/user-organization-and-project-pages#user--organization-pages

## Update Flatmarket demo

```
./node_modules/.bin/flatmarket \
    -c ./node_modules/flatmarket-theme-bananas/index.jsx \
    -d ../christophercliff.github.com/src/flatmarket/
```
