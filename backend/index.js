import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => {
    res.send("Hello World!!!")
})

app.listen(PORT, () => {
	// connectDB();
	console.log("Server is running on port: ", PORT);
});