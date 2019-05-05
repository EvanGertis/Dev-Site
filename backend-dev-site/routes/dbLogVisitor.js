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
router.get('/VisitorIP/:IPAddress/VisitorCountry/:Country/Region/:Region/City/:City', function(req, res, next) {
  const date = new Date();
  console.log(date);
  con.connect(function(err){
    if(err) console.log('Unable to connect to db');
    else console.log('Connection to mysql db successful!');

    const sql = `INSERT INTO log (IPADDRESS,COUNTRY, REGION,CITY, DATE) VALUES 
        ('${req.params.IPAddress}', '${req.params.Country}', '${req.params.Region}', '${req.params.City}',
               '${dateFormat(date,'yyyy-mm-dd hh:mm:ss')}')`;

    con.query(sql,function(err,result){
      if(err) res.status(400).send(`${err}`);
      else res.status(200).send(`Successfully Logged Visitor`);
    })
  })
});

module.exports = router;
