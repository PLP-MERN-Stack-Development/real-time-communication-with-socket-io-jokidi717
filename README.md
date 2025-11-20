Real-Time Chat Application (Socket.io + Express.js)

This project is a simple real-time chat application built using Node.js, Express.js, and Socket.io.
It demonstrates the core concepts of real-time communication, including:

Real-time messaging

Typing indicators

User join/leave notifications

Chat rooms (General, Sports, Tech)

This project was created as part of the Real-Time Communication with Socket.io Assignment.

🚀 Features
✅ Real-Time Messaging

Messages sent by one user appear instantly for all users in the same room.

✅ Chat Rooms

Users can switch between rooms (General, Sports, Tech).

✅ Typing Indicator

A user sees when another user is typing.

✅ User Notifications

When a user joins or leaves the chat, other users receive a notification.

✅ Username Prompt

Users enter their username when joining the chat.

📂 Project Structure
server/
 ├── server.js
 ├── package.json
public/
 ├── index.html

🛠️ Technologies Used

Node.js

Express.js

Socket.io

HTML + JavaScript

⚙️ Setup Instructions

Follow these steps to run the project locally:

1️⃣ Clone or Download the Repository
git clone <your-repo-url>


Or download the ZIP and extract it.

2️⃣ Install Dependencies
cd server
npm install


This installs:

express

socket.io

dotenv

nodemon (dev)

3️⃣ Start the Server

For production mode:

npm start


For development mode with auto-restart:

npm run dev

4️⃣ Open the App in Your Browser

Go to:

http://localhost:3000


If you changed the PORT in .env, use your custom port.

💬 How It Works
User Joins

User enters a username.

Server broadcasts: "username has joined the chat".

Sending Messages

Messages are emitted to the correct room.

Everyone sees the message instantly.

Room Switching

User selects a room.

Socket leaves previous room and joins the new room.

Typing

When a user types, all others see username is typing....
Sample Socket Events
Client → Server

joinRoom

chatMessage

typing

Server → Client

chatMessage

notification

typing

📝 Environment Variables

Create a .env file in the server folder:

PORT=3000


Defaults to 3000 if missing.

🙌 Author

Project completed by:
JOY BLESSING OKIDI (jokidi717)
As part of the Real-Time Communication with Socket.io Assignment.

📄 License

This project is for educational purposes only.

