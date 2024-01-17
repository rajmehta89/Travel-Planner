const express = require('express');
const cors = require('cors');

const { connectMongoDb } = require('./src/views/connection');
const loginRouter = require('./src/routes/login');
const signupRouter = require('./src/routes/signup');
const locationFind = require('./src/routes/location');



const app = express();
const port = 3001;
const allowedOrigins = ['http://localhost:3001'];

//connection
connectMongoDb("mongodb://localhost:27017/BookStore").then(() => console.log("connection is established"));

app.use(express.json());
app.use(cors());

//routes
app.use("/login", loginRouter);
app.use("/signup", signupRouter);
app.use("/api/location", locationFind);


app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});