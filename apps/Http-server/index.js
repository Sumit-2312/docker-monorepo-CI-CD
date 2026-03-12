import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Connect from '@repo/database/connect'
import Users from '@repo/database/user'
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

try{
    console.log("connecting to database ...");
    console.log("Database Url: ", process.env.MONGO_URL)
   await  Connect();
   console.log("connected to database ");
   start();
}catch(err){
    console.log("Erorr while connecting to db : ", err.message);
    process.exit(1);
}

function start(){

    app.get("/",async(req , res )=>{
        const user = Users.find();
        res.json({
            users : user
        });
    })


    app.post("/",async(req , res )=>{
        await Users.create({
            username: req.body.username,
            password: req.body.password
        });
        res.send("User created");
    })


    app.listen(process.env.PORT,()=>{
        console.log(`Server is running on port ${process.env.PORT}`);
    })
}
