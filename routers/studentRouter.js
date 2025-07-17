import express from "express"
import { createStudents, getStudents } from "../controllers/studentController.js";
import { loginUser } from "../controllers/userController.js";

const studentRouter = express.Router();

studentRouter.get("/", getStudents);
studentRouter.post("/",createStudents);


export default studentRouter;