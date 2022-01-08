const express = require("express");
// const bodyParser = require("body-parser"); No need for this now.
const app = express();

//Here you can use express.json()/text()/urlencoded() as body-parser was depricated in year 2021.
app.use(express.urlencoded({extended: true}));

app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post("/",function (req, res){
    console.log(req.body); //It stores the input data.
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("The result of your Calculation is: " + result);
});

app.get("/bmicalculator", function (req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
});

app.post("/bmicalculator",function (req, res){
    console.log(req.body); //It stores the input data.
    var weight = parseFloat(req.body.weight);
    var height = parseFloat(req.body.height);
    var result = (weight/Math.pow(height, 2));
    res.send("Your BMI is " + result);
});

app.listen(3000, function () {
    console.log('Shubham, Server started at port: 3000');
});