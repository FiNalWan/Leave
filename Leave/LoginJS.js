var mysql = require('mysql');
var express = require('express');
var session = require('express-session');
var bodyParser = require('body-parser');
var requestG = require('request');
var path = require('path');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'login'
});

var app = express();
app.use(session({
    secret: 'secret',
    resave: true,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.get('/', function(request, response) {
    response.sendFile(path.join(__dirname + '/Login.html'));
});


// response.sendFile(path.join(__dirname + '/Menu.html'));
app.post('/auth', function(request, response) {
    var username = request.body.username;
    var password = request.body.password;
    if (username && password) {
        connection.query('SELECT * FROM accounts WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
            if (results.length > 0) {
                request.session.loggedin = true;
                request.session.username = username;
                // response.redirect('/home');   
        var request_Notify = requestG
        var token ='afjyVND7yB94Ue1q0z7dQ4hI9otO9UAt1VdoqbE9c8N'
        var messageG = request.session.username+' ได้ทำการเข้าสู่ระบบ '
        request_Notify(
            {
                method: 'POST',
                uri: 'https://notify-api.line.me/api/notify',
                headers: {
                  'Content-Type': 'application/x-www-form-urlencoded'
                },
                auth: {
                  'bearer': token
                },
                form: {
                  message: messageG
                }

            }
        )
        app.get('/Menu', function(request, response) {
            response.sendFile(path.join(__dirname + '/Menu.html'));
        });
                console.log("Login by :"+request.session.username)
                response.redirect('http://192.168.30.40:8080/Menu');     
            } 
            else {
                response.send('ชื่อผู้ใช้ หรือ รหัสผ่าน ไม่ถูกต้อง');
            }            
            response.end();
        });
    } else {
        response.send('กรุณาใส่ชื่อผู้ใช้และรหัสผ่าน');
        response.end();
    }
});


app.get('/home', function(request, response) {
    if (request.session.loggedin) {
        // response.send('ยินดีต้องรับ:' + request.session.username + '!');
    } else {
        response.send('กรุณาเข้าสู่ระบบเพื่อดูหน้านี้');
    }
    response.end();
});
app.get('/Leave', function(request, response) {
    response.sendFile(path.join(__dirname + '/Leave1.html'));
});
// app.listen(8080,()=>{
//     console.log("sent sucsess")
// })
exports.appto = app;