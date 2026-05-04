const express = require("express");
const dotenv = require("dotenv");


dotenv.config({ path: "config.env" });
const app = express();

app.get('/', (req, res) => {
    res.send("Our Api 20");
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`App Running on Port ${PORT}`);
})