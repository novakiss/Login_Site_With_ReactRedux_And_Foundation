const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const session = require('express-session');

const sess = {
    secret: 'example',
    resave: false,
    saveUninitialized: true,
};
app.engine('html', require('ejs').renderFile);
app.set('trust proxy', 1); // trust first proxy
app.use(session(sess));

app.set('public engine','html');
app.set('public','./public');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true})); // support encoded bodies
app.use(express.static('public'));

//Allow Cores
app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next();
});

app.get('/',(req,res)=>{
    res.render('index');
});
app.post('/ping', function (req, res) {
    console.log(req.body);
    if(req.body.ping ==='TEST'){
        req.session.ping='abc';
    }
    console.log(req.session.ping);
    //return res.send(req.session.username);
    return res.send(req.session.ping);
});
app.get('/pong', function (req, res) {
    return res.send(req.session.username);
});

app.post('/signIn', (req, res) => {
    const {username, password} = req.body;
    if (username === 'khoapham' && password === '123') {
        req.session.username = 'khoapham';
        return res.send('DANG_NHAP_THANH_CONG');
    }
    res.send('DANG_NHAP_THAT_BAI');
});

app.get('/getInfo', (req, res) => {
    if (req.session.username) {
        console.log(req.session.username);
        return res.send(req.session.username);
    }
    res.send('CHUA_DANG_NHAP');
});

app.get('/logout',(req,res)=>{
   req.session.username=undefined;
   res.send('DA_DANG_XUAT');
});

app.listen(process.env.PORT || 3000,()=>{
    console.log('Listening on localhost'+ process.env.PORT);
});