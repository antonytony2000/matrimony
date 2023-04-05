const express = require("express");
const { json } = require("express/lib/response");
const app = express();
app.use(express.json())

const mysql=require("mysql");
const con= mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"pw",
    database:"matrimony"
});

con.connect(function(err){
    if (err) throw err;
    console.log("connection established");

})

app.post("/Register",(req,res)=>{
    let Profile=req.body.Profile;
    let User=req.body.User;
    let Mob=req.body.Mob;
let sql="insert into tblusers(txtProfileFor,txtUsername,txtMob) values('"+Profile+"','"+User+"','"+Mob+"');";
con.query(sql,(err,result)=>{
    if (err) throw err;
    res.send(result);
})
})


app.listen(8000, () => {
    console.log("port 8000 active")
})