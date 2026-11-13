require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    console.log("MongoDB Connected");

    app.listen(5000, () => {
        console.log("Server Started");
    });
})
.catch(err => console.log("Connection Error:", err.message));

app.get("/", (req, res) => {
    res.send("Welcome to Online Learning");
});