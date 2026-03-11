import {WebSocketServer} from 'ws';

const server = new WebSocketServer({port: 8080});


console.log("Connected to ws-server");

server.on("connection",(socket,req)=>{

    socket.send("Connected to server");

});


server.on("error",(error)=>{
    console.log("Error in web-socker server : ", error.message);
    process.exit(1);
})