
const mysql=require("mysql");

function connect(){
const connection=mysql.createConnection({
    host    :'172.20.10.5',
    user    :'root',
    password :'Manager@123',
    database :'app_db',
    port : 9099
})

connection.connect();
return connection
}
module.exports = {
    connect:connect
}
