import express from "express";
import { logout, login, register} from "../controllers/auth.js";

const router = express.Router();

//I don't want to write all the resp here, so I will use controllers
// router.get("/test", (req,res) => {
//     res.json("This is posts page")
// })

//router.get("/test", addPost)

//use post method for regsister
router.post("/register", register)
router.post("/login", login)
router.post("/logout", logout)

export default router;