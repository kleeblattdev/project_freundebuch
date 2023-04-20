import { createHmac } from "crypto";

/**
 * Middleware function to encrypt the password provided in a request body
 * using HMAC-SHA256 algorithm.
 */

export const encryptPassword = (req, res, next) => {
	const hmac = createHmac("sha256", req.body.password);
	req.body.password = hmac.digest("hex");
	next();
};
