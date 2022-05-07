const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.static("./client"));
app.get("/*", (req, res) => {
    res.sendFile('index.html', {root: 'client'});
});

app.listen(PORT, ()  => console.log(`App started on ${PORT}`));
