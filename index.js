const express=require('express')
const app = express();
const userRoute=require('./Routes/userRoute')
app.get('/users',userRoute )
// api.get('/users,(req,res)=>{
    // console.log("server for user")
// })
app.listen(7000,()=>{
console.log("server runnning on port 7000")
})