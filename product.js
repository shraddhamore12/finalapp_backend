const express = require('express')
const db = require('./db')
const router = express.Router()

router.get('/',(req,res)=>{
    const connection=db.connect()
    const statement=`select * from product`
    connection.query(statement,(err,result)=>{
        const result = {}
        if(error) {
            result['status'] ='error'
            result['error']=error
        }
        else{
            result['status'] = 'success'
            result['data']=data
        }
        connection.end()

        res.send(result)
    })
})

module.exports = router