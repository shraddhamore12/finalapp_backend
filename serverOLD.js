const express=require("express")
const mysql=require("mysql");
//var cat=require("./category");

const app=express()

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const connection=mysql.createConnection({
    host    :'localhost',
    user    :'root',
    password :'Manager@123',
    database :'app_db'
});

var myData=[];
connection.connect();

app.use(express.json());
app.get('/',(req,res)=>{
    res.send("welcome");
});

app.get("/c",function(req,res){
    connection.query("select * from category",function(err,result){
        if(err==null)
        {
            myData=result;
            res.contentType("application.json");
            res.send(JSON.stringify(result));
        }
        else{
            //res.send("Something wrong");
            res.contentType("application.json");
            res.send(JSON.stringify(err));
        }
    });
});

app.listen(4100, function(){
    console.log("Server Started on port  " + 4100 );
})