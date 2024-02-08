const express = require('express');
const app = express();

// Define a route handler 
app.get('/health', (req, res) => {
    res.status(200).send('I am alive');
});

app.listen(3000, () => {
    console.log("Server started at port 3000");
});
