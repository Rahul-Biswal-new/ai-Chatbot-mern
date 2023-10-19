import {Router} from 'express';
import {  getAllUsers, postUser } from '../controllers/user_controllers.js';

const userRouter = Router();

userRouter.get("/", getAllUsers)
userRouter.post("/", postUser)



export default userRouter;