const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

let scores = [];

app.get("/", (req, res) => {
    res.send("API funcionando. Usa /scores para ver los puntajes.");
});

app.post("/save-score", (req, res) => {
    const { score } = req.body;
    if (typeof score === "number") {
        scores.push(score);
        res.json({ message: "Score saved!", scores });
    } else {
        res.status(400).json({ error: "Invalid score" });
    }
});

app.get("/scores", (req, res) => {
    res.json(scores);
});

app.listen(3001, () => console.log("Server running on http://localhost:3001"));
