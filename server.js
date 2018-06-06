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

app.set('public engine', 'html');
app.set('public', './public');

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

app.get('/', (req, res) => {
    res.render('index');
});
app.post('/ping', function (req, res) {
    console.log(req.body);
    if (req.body.ping === 'TEST') {
        req.session.ping = 'abc';
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
        return res.send(req.session.username);
    }
    res.send('CHUA_DANG_NHAP');
});

app.post('/register', (req, res) => {
    const {id, username, password} = req.body;

    if (id !== null && username !== null && password !== null) {
        if (req.session.registerUser) {
            const test = {
                ...req.session.registerUser.reg,
                user: {...req.session.registerUser.reg.user, [id]: {username: username, password: password}},
                allId:[...req.session.registerUser.reg.allId,id]
            };
            req.session.registerUser = {reg: test};
        }else {
            req.session.registerUser = {
                reg: {user: {[id]: {username: username, password: password}},allId:[id]}
            };
        }
        return res.send('REGISTER_SUCCESS')
    }

    return res.send('RESGISTER_FAILED');
});

app.get('/registered', (req, res) => {
    if (req.session.registerUser) {
        return res.send(req.session.registerUser)
    }
    res.send('CHUA_TAO_TAI_KHOAN');
});

app.get('/logout', (req, res) => {
    req.session.username = undefined;
    res.send('DA_DANG_XUAT');
});

app.listen(process.env.PORT || 8080, () => {
    console.log('Listening on localhost' + 8080);
});