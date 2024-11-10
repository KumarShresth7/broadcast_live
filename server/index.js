const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
const baseUrl = require('./baseUrl')
const connectDB = require('./config/db')
const authRoutes = require('./routes/authRoutes')
const streamRoutes = require('./routes/StreamRoutes')
const userRoutes = require('./routes/userRoutes')
const http = require('http')
const {Server} = require('socket.io')
dotenv.config()

const corsOptions = {
    origin:`${baseUrl}`,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: ['Content-Type', 'Authorization'],
    optionsSuccessStatus: 200,
}

const server = http.createServer(app)
const io = new Server(server,{
    cors: { origin: "*" },
  });
  
  io.on("connection", (socket) => {
    console.log("A user connected");
  
    socket.on("joinRoom", (room) => {
      socket.join(room);
      console.log(`User joined room: ${room}`);
    });
  
    socket.on("sendMessage", (data) => {
      io.to(data.room).emit("receiveMessage", data);
      console.log(`Message sent to room ${data.room}: ${data.message}`);
    });

    socket.on("disconnect", () => {
      console.log("User disconnected");
    });
});
  
app.use(cors(corsOptions))
app.use(express.json())
connectDB();

app.use("/api/auth", authRoutes);
app.use("/api/streams", streamRoutes);
app.use("/api/users", userRoutes);

const PORT = process.env.PORT||5000
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));