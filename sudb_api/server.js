// dependencies
const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3003;

// middleware
const whitelist = ['http://localhost:3000']
const corsOptions = {
    origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
        callback(null, true)
    } else {
        callback(new Error('Not allowed by CORS'))
    }
    }
}
app.use(cors(corsOptions))
app.use(express.json());

// mongodb database connection
mongoose.connect('mongodb://localhost:27017/sudb',{ useUnifiedTopology: true,useNewUrlParser: true });
mongoose.connection.on('error', err => console.log(err.message+' is Mongod not running?'));
mongoose.connection.on('disconnected', () => console.log("disconnected"));
mongoose.connection.once('open', () => {
    console.log("connected to mongoose...");
});

// controllers, routers
const usersController = require('./controllers/users.js');
app.use('/users', usersController);

// listen
app.listen(PORT, () => {
    console.log("listening on port ",PORT);
});