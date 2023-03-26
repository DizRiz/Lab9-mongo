const express = require("express");

const app = express();

require("dotenv").config();

app.use(express.json());

let dbConnect = require("./dbConnect");

let userRoutes = require('./routes/userRoutes')
app.use('/api/user', userRoutes)

let postRoutes = require('./routes/postRoutes')
app.use('/api/post', postRoutes)

let commentRoutes = require('./routes/commentRoutes')
app.use('/api/comment', commentRoutes)

app.get("/", (req, res) => {
res.json({ message: "Welcome to my MongoDB application." });
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}.`);
});