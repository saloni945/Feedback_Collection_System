const express = require("express");
const app = express();

const userRoutes = require("./routes/User");


const database = require("./config/database");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const fileUpload = require("express-fileupload");
const feedbackRoutes = require('./routes/feedbackRoutes');

const dotenv = require("dotenv");
dotenv.config();

const PORT = process.env.PORT || 4000;

//database coonnect
database.connect();
//middleware
app.use(express.json());
app.use(cookieParser());

app.use(
    cors({
        origin:"*",
        credentials:true,
    })
)
app.use(
    fileUpload({
        useTempFiles:true,
        tempFileDir:"/tmp",
    })
)


//routes
app.use("/api/v1/auth",userRoutes);
app.use('/api/v1/feedback', feedbackRoutes);

//default route
app.get("/", (req,res) =>{
    return res.json({
        success:true,
        message:'Your server is up and running....'
    });
});

app.listen(PORT , () =>{
    console.log(`App is running at ${PORT}`) 
})