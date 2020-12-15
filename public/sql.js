/*
// Imports 
const express = require('express');
const mysql = require('mysql');
const port = process.env.port || 3000;
const app = express();
const CryptoJS = require('crypto-js');

var budget;
var title;
var color;

const key = "156169154017411"
var connection = mysql.createConnection
({
    host    : 'sql9.freemysqlhosting.net',
    user    : 'sql9382086',
    password: 'hGSaDznWlG',
    database: 'sql9382086'
})
*/

function functionName()
{
    alert("Information obtained: " + document.getElementById("budget").value + document.getElementById("title").value + document.getElementById("color").value);   
    budget = document.getElementById("budget").value;
    title = document.getElementById("title").value;
    color = document.getElementById("color").value;
    
    return budget, title, color;
}
