const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/dbconfig");
const contactroute=require("./routes/contactRoutes");
dotenv.config();
connectDB();

const app = express();
app.use(cors({
    // origin:"http://localhost:3000",
    origin:["www.sparkelsui.tech","http://localhost:3000"],
    // origin:"future-mentor-education-z7bm.vercel.app",
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials:true,
}));
app.use(express.json());

// Routes
app.use("/api", contactroute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
