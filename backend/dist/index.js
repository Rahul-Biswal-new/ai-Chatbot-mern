// console.log(
//   "This is a starter kit for this amazing project. With 💓 "
// );
import express from 'express';
import { config } from 'dotenv';
config();
const app = express();
// middleware
app.use(express.json());
// get
app.get('/', (req, res, next) => {
    return res.send("hello world");
});
// put
// post
// delete 
// listening port
app.listen(5000, () => {
    console.log(`running on port localhost:${5000}`);
});
//# sourceMappingURL=index.js.map