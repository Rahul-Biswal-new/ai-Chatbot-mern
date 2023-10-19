import {Router} from 'express';
import userRouter from './user_routes.js';
import chatRoutes from './chat_routes.js';


const appRouter =Router();

appRouter.use('/user', userRouter);    // api/v1/user
appRouter.use('/chat', chatRoutes);    // api/v1/chat


export default appRouter;