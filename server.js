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
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true}));
const jwt = require('jsonwebtoken');
const exjwt = require('express-jwt');
const secretKey = 'My super secret key';
const jwtMW = exjwt
({
    secret: secretKey,
    algorithms: ['HS256']
});
app.use((req, res, next) => 
{
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Content-type,Authorization');
    next();
});


// Currently CORS is completely open - modify to a whitelist if necesary. 
app.use(cors());
app.use('/', express.static('public'));



// connection.connect();

app.get('/public/sample', (req,res) => 
{
        connection.query("SELECT * FROM budgetTB", function (err, result, fields) 
        {
        if (err) throw err;
        console.log(result);
        sqlResults = result;
        res.json(sqlResults);
        });
});


app.get('/dashboard'/*, jwtMW*/, (req,res) => 
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


app.get('/login', (req,res) => 
{
    //console.log(dataLink);
    //res.send("Test");

        let usernameInfo = req.query.username;
        let passwordInfo = req.query.password;
    
        connection.query("SELECT * FROM userTB", function (err, result, fields) 
        {
        if (err) throw err;
        
        //res.json(result);
        console.log(result.length);
        console.log(result[0].username)

        /*  */
        // Loop through the results
        for (var i = 0; i < result.length; i++) 
            {
                console.log("Username: " + result[i].username + " Password: " +  result[i].password );
                if( usernameInfo == result[i].username &&  passwordInfo == result[i].password)
                {
                    console.log("login completed");
                    let token = jwt.sign({ id: /*result[i].primaryKey*/ 1, username: /*result[i].username*/ "DEFAULT" }, secretKey, { expiresIn: '7d' });
                        res.json
                        ({
                            success: true,
                            err: null,
                            token
                        });
                        
                        console.log("Login successful - You have been given a login token");
                        
                    break;
                }
                else 
                {
                    console.log("Failed attempt")
                }
            }




        });
});


app.get('/signup', (req,res) => 
{
        let usernameInfo = req.query.username;
        let passwordInfo = req.query.password;

        connection.query("INSERT INTO `userTB` (`username`, `password`) VALUES ('" + usernameInfo + "', '" + passwordInfo + "');", function (err, result, fields) 
        {
        if (err) throw err;
        //console.log(result);
        res.json(result);

        // Loop through the results
        });
});





app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`)
});


