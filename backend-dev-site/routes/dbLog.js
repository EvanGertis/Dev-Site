var express = require('express');
var router = express.Router();
const mysql = require('mysql');
const dateFormat = require('dateformat');

const con = mysql.createConnection({
  host: "localhost",
  user: "aaron",
  password: "test",
  database: "personal_site"
});

/* Log visitor information */
router.post('/logVisitor', function(req,res){
const IP_ADDRESS = req.body.IPAddress;
const COUNTRY = req.body.Country;
const REGION = req.body.Region;
const CITY = req.body.City;
const date = dateFormat(new Date(),'yyyy-mm-dd hh:mm:ss')

con.connect(function(err){
  if(err) console.log('Unable to connect to db');
  else console.log('Connection to mysql db successful!');

  const sql = `INSERT INTO log (IPADDRESS,COUNTRY, REGION,CITY, DATE) VALUES 
      ('${IP_ADDRESS}', '${COUNTRY}', '${REGION}', '${CITY}',
             '${date}')`;

  con.query(sql,function(err,result){
    if(err) res.status(400).send(`${err}`);
    else res.status(200).send(`Successfully Logged Visitor`);
  })
})
});

module.exports = router;
