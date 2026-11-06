const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send("Welcome to Kathyayini's Online Shopping Store!");
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});