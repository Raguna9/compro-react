import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import session from "express-session";
import db from "./config/Database.js";
import SequelizeStore from "connect-session-sequelize";
import UserRoute from "./routes/UserRoute.js";
import BlogRoute from "./routes/BlogRoute.js";
import EmployeeRoute from "./routes/EmployeeRoute.js";
import PartnerRoute from "./routes/PartnerRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
dotenv.config();

const app = express();

const sessionStore = SequelizeStore(session.Store);

const store = new sessionStore({
    db: db
});

// (async()=>{
//     await db.sync();
// })();

/* MIDDLEWARE */
app.use(cors({
    //mengizinkan frontend untuk mengirim request/cookie ke server 
    credentials: true,
    //domain yang diizinkan
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store: store,
    cookie: {
        secure: 'auto'
    }
}));
app.use(UserRoute);
app.use(BlogRoute);
app.use(EmployeeRoute);
app.use(PartnerRoute);
app.use(AuthRoute);

//membuat tabel session
// store.sync();

app.listen(process.env.APP_PORT, () => {
    console.log('Server up and running...');
});