const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.enable('jsonp callback')

const loginRouter = require('./routes/login');
app.use('/', loginRouter);

app.listen(() => {
    console.log(`Server ready on ${port}`)
})
module.exports = app;
