const express = require('express');
const app = express();

// Controller
const userController = require("./controller/user");

app.get("/api/user", userController.name)

app.get("/api/quote", userController.quote)

app.listen(5000, ()=>{
    console.log(`server run on http://localhost:5000`)
})