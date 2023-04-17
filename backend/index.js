const express = require("express");
const { json } = require("express/lib/response");
const app = express();
app.use(express.json())
var cors = require('cors')
app.use(cors())

const mysql = require("mysql");
const con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "pw",
    database: "matrimony"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("connection established");

})

app.post("/Register", (req, res) => {
    let Profile = req.body.Profile;
    let User = req.body.User;
    let Mob = req.body.Mob;
    let sql = "insert into tblusers(txtProfileFor,txtUsername,txtMob) values('" + Profile + "','" + User + "','" + Mob + "');";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.post("/login", (req, res) => {
    let dtdob = req.body.dtdob;
    let txtEmail = req.body.txtEmail;
    let txtPassword = req.body.txtPassword;
    let sql = "UPDATE tblusers SET dtdob = '" + dtdob + "', txtEmail='" + txtEmail + "',txtPassword ='" + txtPassword + "'WHERE id=1;";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.post("/login2", (req, res) => {
    let txtEmail = req.body.txtEmail;
    let txtPassword = req.body.txtPassword;
    let sql = "select id from tblusers where txtEmail='" + txtEmail + "' and txtPassword ='" + txtPassword + "'";
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.post("/search", (req, res) => {
    let search = req.body.search
    let sql = "select id,txtEmail,txtUsername,txtMob from tblusers where txtUsername LIKE '%" + search + "%'";
    console.log(sql);
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.post("/inside", (req, res) => {
    let id = req.body.id
    let sql = "select id,txtEmail,txtUsername,txtMob from tblusers where id ='" + id + "'";
    console.log(sql);
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.post("/profile_selectall", (req, res) => {
    let sql = "select id,txtEmail,txtUsername,txtMob from tblusers";
    console.log(sql);
    con.query(sql, (err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

app.listen(8000, () => {
    console.log("port 8000 active")
})