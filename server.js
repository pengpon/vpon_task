'use strict';

const express = require('express');
const SocketServer = require('ws').Server;
const path = require('path');

const PORT = process.env.PORT || 3000;
const INDEX = path.join(__dirname, 'index.html');

const server = express()
    .use((req, res) => res.sendFile(INDEX))
    .listen(PORT, () => console.log(`Listening on ${ PORT }`));

const wss = new SocketServer({
    server
});


//當 WebSocket 從外部連結時執行
wss.on('connection', ws => {
    //連結時執行此 console 提示
    console.log('Client connected')

    let clients = wss.clients;
    console.log(clients.size);

    //對 message 設定監聽，接收從 Client 發送的訊息
    ws.on('message', data => {
        //取得所有連接中的 client
        let clients = wss.clients;

        //發送訊息至每個 client
        clients.forEach(client => {
            client.send(data)
        })
    })

    //當 WebSocket 的連線關閉時執行
    ws.on('close', () => {
        console.log('Close connected')
    })
})