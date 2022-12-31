import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
// import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import BlogRoute from "./routes/BlogRoute.js";
dotenv.config();

const app = express();

// (async()=>{
//     await db.sync();
// })();

/* MIDDLEWARE */
app.use(cors({
    //mengizinkan frontend untuk mengirim request/cookie ke server 
    credentials: true,
    //domain yang diizinkan
    origin: 'http/localhost:3000'
}));

app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        secure: 'auto'
    }
}));
app.use(UserRoute);
app.use(BlogRoute);

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...');
});