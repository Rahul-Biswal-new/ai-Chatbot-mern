import mongoose from "mongoose";

const connectDB = async () => {
    try{
    const options = {
        dbname : "chatbot"
    }
    await mongoose.connect(process.env.MONGODB_URL)
    }
    catch(err){
        console.log(err, "###error");
        throw new Error("could not connect to mongoDB")
    }
} 


const disconnectDB = async () =>{
    try{
        await mongoose.disconnect();
    }catch(err){
        throw new Error("could not disconnect to mongoDB");
    }
}

export default {connectDB, disconnectDB};