const mysql = require('mysql');
var mysqlconnection = require('./database');
const express = require('express');
const multer=require('multer')
const path=require('path')
var app = express();
const bodyparser = require('body-parser');
app.use(bodyparser.json());
var router = express.Router();
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}))
const cors=require('cors');
app.use(
    cors({
     origin: "http://127.0.0.1:4200/",
    }
    ))


app.options('*',cors())

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept");
    next();
})

// let corsOptions={
//     origin:"http://localhost:4200/",
//     optionsSuccessStatus:200
// }

const storage=multer.diskStorage({
    destination:'./upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload=multer({
    storage:storage
})


//to get all crib details
//emp/
router.get('/cribs', (req, res) => {
    mysqlconnection.query('SELECT * FROM crib_table', (err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

//to get particular id 
//emp/
router.get('/cribs/:id', (req, res) => {
    const id=req.params.id;
    var sql=mysql.format('SELECT * FROM crib_table WHERE id IN (?)',id)
    mysqlconnection.query(sql,(err, rows, fields) => {
        if (!err)
            res.send(rows);
        else
            console.log(err);
    })
})

//to delete the particular id
//emp/
router.delete('/cribs/:id', (req, res) => {
    mysqlconnection.query('DELETE FROM crib_table WHERE id=?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.send("Deleted successfully..");
        else
            console.log(err);

    })
})
//to insert the data
//emp/
router.post('/cribs',upload.single('img'),(req, res) => {
   const {name,img,location} =req.body;
    let sql = 'INSERT INTO crib_table(name, img, location) VALUES (?,?,?)';
    mysqlconnection.query(sql, [name,img,location], (err, rows) => {
        if (err) throw err;
        res.send('Inserted Successfully...');
        res.end();
    })
});

//to update the data
//emp/
router.put('/cribs/:id', (req, res) => {
    const id=req.params.id;
    const {name,img,location} =req.body;
   
    let sql = 'UPDATE crib_table SET name=?,img=?,location=? WHERE id=?';
    mysqlconnection.query(sql, [name,img,location,id], (err, rows) => {
        if (err) throw err;
        res.write('Updated Successfully...');
        res.end();
    })
})
module.exports = router;
