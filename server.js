var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function (req, res) {
    res.render('template');
});
app.get('/auth/google', function (req, res) {
    res.render('auth', {
        login: req.query.login
    });
});

 app.listen(process.env.PORT, function() {
     
    console.log(`Port: ${process.env.PORT}`);
});
