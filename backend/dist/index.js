import app from './app.js';
import { connectDB } from "./db/connectDB.js";
connectDB();
// get
app.get('/', (req, res, next) => {
    return res.send("hello world");
});
// put
// post
// delete 
// listening port
app.listen(process.env.PORT || 5000, () => {
    console.log(`running on port localhost:${process.env.PORT || 5000}`);
});
//# sourceMappingURL=index.js.map