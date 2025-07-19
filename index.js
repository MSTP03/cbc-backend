import express from "express"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import jwt from "jsonwebtoken"
import userRouter from "./routers/userRouter.js"
import productRouter from "./routers/productRouter.js"


const app = express()

app.use(bodyParser.json())

app.use(
  (req,res,next) => {
    const value = req.headers["authorization"] //authorization
    if(value != null)
    {
      const token = value.replace("Bearer ","")
      jwt.verify(
        token,
        "cbc-6503",
        (err,decoded)=>{
          if(decoded == null)
          {
            res.status(401).json({
              message : "Unauthorized"
            })
          }else{
            req.user = decoded
            next()
          }

      
        }
    )
    }else{
      next()
    }
    
    
  }
)

const connectionString = "mongodb+srv://admin:123@cluster0.bpqkdg5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.connect(connectionString).then(
  ()=>{
    console.log("Connected to database")
  }
).catch(
  ()=>{
    console.log("Failed to connect database")
  }
)

app.use("/api/users", userRouter)
app.use("/api/products",productRouter)
 


  app.listen(5000 , 
    ()=>{                              //function Function_Name() ======= ()=>
        console.log("server strated")
      }
    ) 