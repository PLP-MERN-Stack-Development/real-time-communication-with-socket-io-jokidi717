require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const socketHandler = require("./socket/socketHandler");

const app = express();
const server = http.createServer(app);

// Setup Socket.io
io.on("connection", (socket) => {
  const username = socket.handshake.query.username;
  console.log(username + " connected");

  // Notify others
  socket.broadcast.emit("notification", `${username} has joined the chat`);

  socket.on("disconnect", () => {
    socket.broadcast.emit("notification", `${username} has left the chat`);
  });
});


// Initialize our socket logic
socketHandler(io);

app.get("/", (req, res) => {
  res.send("Socket.io server running.");
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => console.log(`Server running on ${PORT}`));

socket.on("joinRoom", (room) => {
  socket.join(room);
  socket.room = room;
});
