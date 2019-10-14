const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

const app = express();
const routes = require('./routes');

mongoose.connect('mongodb+srv://github:github@cluster0-em4dj.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333);