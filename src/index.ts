import { createServer } from "http";
import * as socketio from "socket.io";

const server = createServer();
const io = socketio(server);

io.on("connection", (socket) => {
    socket.on("action_event", (msg) => {
        socket.emit("action_event", msg);
    });
});

server.listen(3009, () => {
    console.log("listening on *:3009");
});
