var express = require('express');
var mongoose = require('mongoose');
var bodyparser = require ('body-parser');
var path = require('path');
var cors = require('cors');

var route = require('./routes/route');
var app = express()
const port = 3000;

mongoose.connect('mongodb://localhost:27017/contactlist', { useNewUrlParser: true });

mongoose.connection.on('connected',()=>{
console.log('connected to db @27017')
})

mongoose.connection.on('error',(err)=>{
    if(err){
        console.log(err)
    }
    })

app.use(cors());
app.use(bodyparser.json());

app.use(express.static(path.join(__dirname,'public')))

app.use('/api',route)

app.get('/',(req,res)=>{
    res.send('get Call..')
})
app.listen(port,()=>{
    console.log('server is running.....',port)
})