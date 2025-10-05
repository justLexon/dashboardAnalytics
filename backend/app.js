import express from "express";
import fs from "fs";

const app = express();
const port = 3000;

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

//Define a basic route to get JSON data
app.get('/api/data', (req, res) => {
    fs.readFile("data/data.json", "utf8", (err, jsonData) => {
        if(err) {
            console.error(err);
            return res.status(500).json({error: "error reading data file"});
        }

        //Parse + send JSON
        const data = JSON.parse(jsonData);
        res.json(data);
    });
});

//Start the server
app.listen(port, () => {
    console.log(`Server is listening on port:${port}`);
});