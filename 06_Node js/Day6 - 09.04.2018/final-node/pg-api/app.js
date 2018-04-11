const express = require('express');
const bodyParser = require('body-parser');

// Set up the express app
const app = express();

// Parse incoming requests data 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('build'));  //react folder
app.use(express.static('dist'));   //angular folder

app.get("/managmentSystem",(req,res)=>{   //react routing
    res.sendFile(__dirname + "/build/index.html");
});

app.get("/bookStore",(req,res)=>{   //angular routing
    res.sendFile(__dirname + "/dist/index.html");
});

module.exports = app;
