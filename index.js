const express = require('express');
const cors = require('cors');
const { connectMongoDb } = require('./src/views/connection');
const loginRouter = require('./src/routes/login.route');
const handleUserApi = require('./src/routes/user.api.route');

const app = express();
const port = 3001;

// Connect to MongoDB
connectMongoDb("mongodb://localhost:27017/BookStore")
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((error) => {
        console.error('Error connecting to MongoDB:', error);
    });

const allowedOrigins = ['http://localhost:3001']; // Update the port if needed
app.use(cors());
app.use(express.json());

// Routes
app.use("/user", loginRouter);
app.use("/user/api", handleUserApi);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});