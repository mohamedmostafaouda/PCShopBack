const express = require('express');
const app = express();
const userRoutes=require('/Routes/User')

app.use(express.urlencoded({extended:false}))

app.use(userRoutes)
app.use('/',(req,res,nxt)=>{
    console.log('yes')
    return res.send('yes')
})
app.listen(3000)