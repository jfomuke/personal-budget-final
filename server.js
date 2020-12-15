// Budget API
const express = require('express');
const cors = require('cors');
const app  = express();
//const port = 3000;
const dataLink = require("./info.json"); 

// mySQL variables
// Imports 
const mysql = require('mysql');
const port = process.env.port || 3000;
const CryptoJS = require('crypto-js');
const key = "156169154017411"
var connection = mysql.createConnection
({
    host    : 'sql9.freemysqlhosting.net',
    user    : 'sql9382086',
    password: 'hGSaDznWlG',
    database: 'sql9382086'
})
var sqlResults;


// Currently CORS is completely open - modify to a whitelist if necesary. 
app.use(cors());
app.use('/', express.static('public'));


/*_________________________________________________________________________________________*/
/* function selectAll()
{
    connection.connect(function(err) 
    {
        if (err) throw err;
        connection.query("SELECT * FROM budgetTB", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
        sqlResults = result;
        });
    });
}*/
//selectAll();



  /*
  connection.query("INSERT INTO `user` (`id`, `username`, `password`, `signedup`) VALUES (NULL, '" + username + "', '" + pwd + "', '" + date + "');", function (error, results, fields)
  {
      if (error == true) throw error;
      console.log("1 record inserted");
      res.json(results);
  });
  */


  /*_________________________________________________________________________________________*/


/*  KEEEP
app.get('/budget', (req,res) => 
{
    //console.log(dataLink);
    res.json(dataLink);
});
*/

connection.connect();

app.get('/sample', (req,res) => 
{
    //console.log(dataLink);
    //res.send("Test");

    
        connection.query("SELECT * FROM budgetTB", function (err, result, fields) 
        {
        if (err) throw err;
        console.log(result);
        sqlResults = result;
        res.json(sqlResults);
        });
});


app.get('/insert', (req,res) => 
{

    
        let budgetInfo = req.query.budget;
        let titleInfo = req.query.title;
        let colorInfo = req.query.color;
        connection.query("INSERT INTO `budgetTB` (`budget`, `title`, `color`) VALUES ('" + budgetInfo + "', '" + titleInfo + "', '" + colorInfo + "');", function (err, result, fields) 
        //connection.query(" INSERT INTO `budgetTB` (`budget`, `title`, `color`) VALUES ('60', 'Emojis', '#bbbccc')", function (err, result, fields) 
        {
        if (err) throw err;
        console.log(result);
        });
});


app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`)
});
