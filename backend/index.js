const express = require("express");
const { json } = require("express/lib/response");
const app = express();
app.use(express.json())
app.post("/Addition", (req, res) => {
    let a = req.body.num1;
    let b = req.body.num2;
    let sum = a + b;
    res.send(sum + "");
})
app.post("/Subtraction", (req, res) => {
    let a = req.body.num1;
    let b = req.body.num2;
    let diff = a - b;
    res.send(diff + "");
})
app.post("/Multiplication", (req, res) => {
    let a = req.body.num1;
    let b = req.body.num2;
    let pro = a * b;
    res.send(pro + "");
})
app.post("/Division", (req, res) => {
    let a = req.body.num1;
    let b = req.body.num2;
    let rem = a / b;
    res.send(rem + "");
})
app.listen(8000, () => {
    console.log("port 8000 active")
})