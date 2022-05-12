const express = require('express');
var crib = require('./routes/crib');
const bodyParser=require('body-parser')
var app = express();
app.listen(3000, () => console.log('Express server is running at port no: 3000'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/crib', crib);

app.get('/',(req,res)=>{
    res.send("hai vijay kumar");
})

