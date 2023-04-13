import express from "express";
import cors from "cors";
import multer from "multer";
import "./config/config.js";

const app = express();
const PORT = process.env.PORT || 8989;

app.use(cors());
app.use(express.json());

//Overview of friends
app.get("/api/friends", (req, res) => {});
//Post new friend
app.post("/api/friends", (req, res) => {});

//delete friend?

app.listen(PORT, () => console.log("Server listening on port:", PORT));
