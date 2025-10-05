const express = require('express');
const app = express();
const port = 3000;

//Define a basic route
app.get('/', (req, res) => {
    res.send('Hello, World! I have data');
});

//Start the server
app.listen(port, () => {
    console.log(`Server is listening on port:${port}`);
});