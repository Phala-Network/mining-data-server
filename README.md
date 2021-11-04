# Mining Data Server

A node.js server for indexing mining data.

## Get Started

```sh
yarn
yarn dev
```

## API

`GET /header`

Return current block number and hash.

`GET /block-hash?block_number={number}`

Return block hash of given block number.

`GET /workers?hash={hash}`

Return all workers data with binding, miner and stake attached.

## TODO

- stake pool
- global data
