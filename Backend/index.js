import express from "express";
import dotenv from "dotenv"
import mongoose from "mongoose";
import cors from "cors";

import bookRoute from "./route/book.route.js"
import userRoute from "./route/user.route.js"

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT;
const URI = process.env.MONGO_URI || "mongodb://localhost:27017/bookstore";


//Connect to mongodb:
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Connected to MongoDB Successfully.!");
} catch(err){
    console.log("Error...", err);
}

//Defining Route
app.use("/book", bookRoute);

app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});