import express from "express";
import cors from "cors";
import multer from "multer";
import cookieParser from "cookie-parser";
import "./config/config.js";
import {
	addFriend,
	getFriends,
	getOneFriend,
	removeFriend,
} from "./controller/friendController.js";
import { encryptPassword } from "./middleware/authMiddleware.js";
import { login, logout, register } from "./controller/authController.js";
import { authorization } from "./utils/token.js";

const app = express();
const upload = multer();
const PORT = process.env.PORT || 8989;

app.use(cors({ origin: true, credentials: true }));
app.use(express.json());
app.use(cookieParser());

//registration and login
app.post("/register", encryptPassword, register);
app.post("/login", encryptPassword, login);

//authorization
app.get("proctected", authorization, (req, res) => {
	return res.json(200);
});

//logout
app.post("/logout", authorization, logout);

//Overview of friends
app.get("/api/v1/friends", getFriends);
//get one friend
app.get("/api/v1/friends/:friendId", getOneFriend);
//Post new friend
app.post("/api/v1/friends", upload.none(), addFriend);
//delete friend
app.delete("/api/v1/friends", removeFriend);

app.listen(PORT, () => console.log("Server listening on port:", PORT));
