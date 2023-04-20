import { getDb } from "../utils/db.js";
import { createToken } from "../utils/token.js";

const cookieConfig = {
	httpOnly: true,
	secure: true,
	sameSite: "none",
};

export const register = async (req, res) => {
	const db = await getDb();
	const result = await db.collection("user").insertOne(req.body);
	res.json(result);
};

export const login = async (req, res) => {
	const db = await getDb();
	const dbUser = await db
		.collection("user")
		.findOne({ user: req.body.user, password: req.body.password });
	if (dbUser === null) {
		res.status(401).end();
	} else {
		const token = createToken(dbUser);
		res.cookie("token", token, cookieConfig);
		res.end();
	}
};

export const logout = async (req, res) => {
	return res
		.clearCookie("token")
		.status(200)
		.json({ message: "Successfully logged out" });
};
