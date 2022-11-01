# tictactoe
**tictactoe** is a blockchain built using Cosmos SDK and Tendermint and created with [Ignite CLI](https://ignite.com/cli).

## Steps
1. run the following command in your terminal to export accounts
```
export alice=$(tictactoed keys show alice -a)
export bob=$(tictactoed keys show bob -a)
```
2. start the blockchain
```
ignite chain serve -r
```
3. query stored game
```
tictactoed query tictactoe list-stored-game
```
4. create a game
```
tictactoed tx tictactoe create-game $alice $bob --from $alice --gas auto
```
5. accept a game
```
tictactoed tx tictactoe accept-game 1 --from $bob
```
6. move
```
tictactoed tx tictactoe play-move 1 0 —from $alice
```

the main logic is within tictactoe/x/keeper and tictactoe/x/rule

## Get started

```
ignite chain serve
```

`serve` command installs dependencies, builds, initializes, and starts your blockchain in development.

### Configure

Your blockchain in development can be configured with `config.yml`. To learn more, see the [Ignite CLI docs](https://docs.ignite.com).

### Web Frontend

Ignite CLI has scaffolded a Vue.js-based web app in the `vue` directory. Run the following commands to install dependencies and start the app:

```
cd vue
npm install
npm run serve
```

The frontend app is built using the `@starport/vue` and `@starport/vuex` packages. For details, see the [monorepo for Ignite front-end development](https://github.com/ignite/web).

## Release
To release a new version of your blockchain, create and push a new tag with `v` prefix. A new draft release with the configured targets will be created.

```
git tag v0.1
git push origin v0.1
```

After a draft release is created, make your final changes from the release page and publish it.

### Install
To install the latest version of your blockchain node's binary, execute the following command on your machine:

```
curl https://get.ignite.com/username/tictactoe@latest! | sudo bash
```
`username/tictactoe` should match the `username` and `repo_name` of the Github repository to which the source code was pushed. Learn more about [the install process](https://github.com/allinbits/starport-installer).

## Learn more

- [Ignite CLI](https://ignite.com/cli)
- [Tutorials](https://docs.ignite.com/guide)
- [Ignite CLI docs](https://docs.ignite.com)
- [Cosmos SDK docs](https://docs.cosmos.network)
- [Developer Chat](https://discord.gg/ignite)
