// 使用 WebSocket 的網址向 Server 開啟連結
// 本機
// let ws = new WebSocket('ws://localhost:3000')
// Heroku server端 
// let ws = new WebSocket('ws://websocket-starting.herokuapp.com/')
// var HOST = location.origin.replace(/^http/, 'ws')
var HOST = 'wss://websocket-starting.herokuapp.com:3000';

var ws = new WebSocket(HOST);
//開啟後執行的動作，指定一個 function 會在連結 WebSocket 後執行
ws.onopen = () => {
    console.log('open connection')
}

//關閉後執行的動作，指定一個 function 會在連結中斷後執行
ws.onclose = () => {
    console.log('close connection')
}

ws.onmessage = event => {
    console.log(event)
}