import { ObjectId } from "mongodb";
import { getDb } from "../utils/db.js";

const COL = "friends";

export const getFriends = async (req, res) => {
	const db = await getDb();
	const docs = await db.collection(COL).find().toArray();
	if (docs === null) res.end();
	else {
		res.json(docs);
	}
};

export const addFriend = async (req, res) => {
	const db = await getDb();
	const result = await db.collection(COL).insertOne(req.body);
	res.json();
};

export const removeFriend = async (req, res) => {
	const db = await getDb();
	const del = await db
		.collection(COL)
		.findOneAndDelete({ _id: new ObjectId(req.body.id) });
	res.end();
};
