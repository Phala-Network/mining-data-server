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

## Environment Variables

- ENDPOINT

## API

### Query Parameters

- hash
- number

Note: When both parameters are provided, hash will have priority. When neither was provided, the latest finalized block will be returned.

### Chain

- `GET /header`
- `GET /timestamp`

### Stake Pools

- `GET /stake-pools`
- `GET /pool-stakers`

### Mining

- `GET /miners`
- `GET /stakes`
- `GET /worker-bindings`

### Tokenomic Parameters

- `GET /tokenomic-parameters`

### Workers

- `GET /workers`

### Events

- `GET /events`
