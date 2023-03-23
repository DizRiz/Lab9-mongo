const express = require("express");

const app = express();

require("dotenv").config();

app.use(express.json());

let dbConnect = require("./dbConnect");

let userRoutes = require('./routes/userRoutes')
app.use('/api/users', userRoutes)

app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});