import { createServer } from "http";
import * as socketio from "socket.io";

const server = createServer(httpHandler);
const io = socketio(server, {
    perMessageDeflate: false
  });

function httpHandler(_, res){
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.write("Hello World");
        res.end("\n");
};

server.listen(3009, () => {
    console.log("listening on *:3009");
});

io.on("connection", (socket) => {
    socket.on("action_event", (msg) => {
        socket.emit("action_event", msg);
    });
});
