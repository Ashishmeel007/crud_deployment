const express = require('express');
const {connection} = require('./db')
const {userRouter} = require("./routes/user.routes");
const {noteRouter} = require("./routes/note.routes");
const cors = require('cors');
require('dotenv').config();


const app = express();
app.use(cors());
app.use(express.json());

app.use("/users",userRouter);
app.use("/notes",noteRouter);

app.listen(process.env.PORT, async()=>{
    try{
        await connection
        console.log("Connected to the DB");
        console.log(`server is running on port ${process.env.PORT}`) 
    }catch(err){
        console.log(err);
        console.log("Something Went Wrong...")
    }
});