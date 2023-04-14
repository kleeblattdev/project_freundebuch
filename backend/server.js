import express from "express";
import cors from "cors";
import multer from "multer";
import "./config/config.js";
import {
	addFriend,
	getFriends,
	getOneFriend,
	removeFriend,
} from "./controller/friendController.js";

const app = express();
const PORT = process.env.PORT || 8989;

app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

const upload = multer();

//Overview of friends
app.get("/api/v1/friends", getFriends);
//get one friend
app.get("/api/v1/friends/:friendId", getOneFriend);
//Post new friend
app.post("/api/v1/friends", upload.none(), addFriend);
//delete friend
app.delete("/api/v1/friends", removeFriend);

app.listen(PORT, () => console.log("Server listening on port:", PORT));
