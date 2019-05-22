const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const feedRoutes = require('./routes/feed');

const app = express();
app.set('port', (process.env.PORT || 8080))

app.use(bodyParser.json()); 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/feed', feedRoutes);

const username = process.env.USERNAME
const password = process.env.PASSWORD
mongoose.connect(
    `mongodb+srv://${username}:${password}@cluster0-jmdrs.mongodb.net/pizza?retryWrites=true` , {useNewUrlParser: true}
    ).then(result=>{
        app.listen(app.get('port'));

    }).catch(err=>console.log(err));
    