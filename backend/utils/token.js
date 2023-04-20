import jwt from "jsonwebtoken";

export const createToken = (user) => {
	const token = jwt.sign({ user: user._id }, process.env.JWT_SECRET, {
		expiresIn: "1h",
	});
	return token;
};

export const authorization = (req, res, next) => {
	const token = req.cookies.token;
	if (!token) {
		return res.status(403);
	}
	try {
		const data = jwt.verify(token, process.env.JWT_SECRET);

		return next();
	} catch (err) {
		return res.status(403);
	}
};
