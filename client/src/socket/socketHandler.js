// socketHandler.js

module.exports = function socketHandler(io) {
  // Store connected users
  let users = {};         // socket.id → { username }
  let typingUsers = {};   // socket.id → username

  io.on("connection", (socket) => {

    console.log(`User connected: ${socket.id}`);

    // ------------------------------
    // USER JOINED
    // ------------------------------
    socket.on("user_join", (username) => {
      users[socket.id] = { username };
      
      // Notify everyone except the new user
      socket.broadcast.emit("user_joined", { username });

      // Send updated user list to all users
      io.emit("user_list", Object.values(users));
    });

    // ------------------------------
    // SEND MESSAGE (PUBLIC)
    // ------------------------------
    socket.on("send_message", ({ message }) => {
      const username = users[socket.id]?.username || "Unknown";

      const msgData = {
        id: Date.now(),
        from: username,
        message,
        timestamp: new Date().toISOString(),
      };

      io.emit("receive_message", msgData); // send to all clients
    });

    // ------------------------------
    // PRIVATE MESSAGE
    // ------------------------------
    socket.on("private_message", ({ to, message }) => {
      const fromUser = users[socket.id]?.username;

      io.to(to).emit("private_message", {
        id: Date.now(),
        from: fromUser,
        message,
        private: true,
        timestamp: new Date().toISOString(),
      });
    });

    // ------------------------------
    // TYPING INDICATOR
    // ------------------------------
    socket.on("typing", (isTyping) => {
      const username = users[socket.id]?.username;

      if (isTyping) {
        typingUsers[socket.id] = username;
      } else {
        delete typingUsers[socket.id];
      }

      io.emit("typing_users", Object.values(typingUsers));
    });

    // ------------------------------
    // USER DISCONNECTS
    // ------------------------------
    socket.on("disconnect", () => {
      const user = users[socket.id];

      if (user) {
        socket.broadcast.emit("user_left", { username: user.username });

        delete users[socket.id];
        delete typingUsers[socket.id];

        io.emit("user_list", Object.values(users));
      }

      console.log(`User disconnected: ${socket.id}`);
    });
  });
};
