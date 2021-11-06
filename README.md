# Mining Data Server

A node.js server for indexing mining data.

## Getting Started

develop

```sh
yarn
yarn dev
```

production

```sh
yarn
yarn build
yarn start
```

## API

### Chain

- `GET /header`
- `GET /block-hash?block_number={number}`
- `GET /timestamp?hash={hash}`

### Stake Pools

- `GET /stake-pools?hash={hash}`
- `GET /pool-stakers?hash={hash}`

### Mining

- `GET /miners?hash={hash}`
- `GET /stakes?hash={hash}`
- `GET /worker-bindings?hash={hash}`

### Tokenomic Parameters

- `GET /tokenomic-parameters?hash={hash}`

### Workers

- `GET /workers?hash={hash}`
