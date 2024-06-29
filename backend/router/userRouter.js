import express from "express"
import {UserReg} from "../controller/userController.js"


const router = express.Router();

router.post("/user/register",UserReg);
// router.post("/login",login);


export default router;