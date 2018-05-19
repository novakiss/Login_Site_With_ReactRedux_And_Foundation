const express = require('express');
const app = express();
const cors= require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({	extended: true })); // support encoded bodies
app.use(express.static('public'));

//Allow Cores
app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/ping', function (req, res) {
    return res.send('pong');
});

app.get('/try',function (req,res) {
    res.send('Hello axios');
});

app.post('/trypost',(req,res)=>{
    res.send(req.body)
});

app.listen(process.env.PORT || 8080);