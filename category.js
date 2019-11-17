const mysql=require("mysql");
var express=require("express");
var cat=express();

const connection=mysql.createConnection({
    host    :'localhost',
    user    :'root',
    password :'Manager@123',
    database :'app_db'
});

var myData=[];
connection.connect();

cat.get("/c",function(req,res){
    connection.query("select * from category",function(err,result){
        if(err==null)
        {
            myData=result;
            res.contentType("application.json");
            res.send(JSON.stringify(result));
        }
        else{
            res.send("Something wrong");
        }
    });
});

module.exports=cat;
