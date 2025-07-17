import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import studentRouter from "./routers/studentRouter.js"
import userRouter from "./routers/userRouter.js"

const app = express()

app.use(bodyParser.json())

let connectionString = "mongodb+srv://admin:123@cluster0.bpqkdg5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectionString).then(
  ()=>{
    console.log("Connected to database")
  }
).catch(
  ()=>{
    console.log("Failed to connect database")
  }
)

app.use("/students",studentRouter)
app.use("/users", userRouter)
 


  app.listen(5000 , 
    ()=>{                              //function Function_Name() ======= ()=>
        console.log("server strated")
      }
    ) 