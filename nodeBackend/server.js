const express = require("express");
const bodyParser = require('body-parser');
const app = express();
const passport = require('passport');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
process.env[0] =  {
    "JWT_SECRET": "SECRET#123",
    "JWT_EXP": "10m"
};
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
const router = express.Router();
app.use('/', router);
let initApp = require('./api/app');
initApp(app);
app.listen(5000);