const express = require('express')
const app = express();
require('dotenv').config(); //configure env
const PORT=process.env.PORT;
const posts = require('./routes/posts')

app.use(express.json())




// app.get('/',(req,res)=>{
//     res.send("Welcome to API")
// })



app.use('/api/posts',posts);

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`);
})