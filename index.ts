import { createServer } from "http";
import * as socketio from "socket.io";
const port = process.env.port || 1337;
const server = createServer(httpHandler);
const io = socketio(server, {
    perMessageDeflate: false
});

function httpHandler(_, res) {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.write("Hello World");
    res.end("\n");
}

server.listen(port, () => {
    console.log(`listening on *:${port}`);
});

io.on("connection", (socket) => {
    socket.on("action_event", (msg) => {
        socket.emit("action_event", msg);
    });
});
