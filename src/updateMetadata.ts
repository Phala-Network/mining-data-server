import fs from 'fs'
import {w3cwebsocket as WebSocket} from 'websocket'

const main = (): void => {
  const endpoint = 'ws://localhost:49944'
  const ws = new WebSocket(endpoint)
  ws.onopen = (): void => {
    ws.send(
      '{"id":"1","jsonrpc":"2.0","method":"state_getMetadata","params":[]}'
    )
  }
  ws.onmessage = (msg: any): void => {
    fs.writeFileSync('src/metadata.json', msg.data)
    process.exit(0)
  }
}

main()
