import * as io from "socket.io";

const server = new io.Server(5000, {
  cors: {
    origin: "http://localhost:3000",
  },
});

server.on("connection", (socket) => {
  socket.emit("ping", "pong");
});
