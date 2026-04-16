import crypto from "crypto";
import express from "express";
import User from "../model/userSchema.js";

const router = express.Router();

const TOKEN_EXPIRY_SECONDS = 60 * 60 * 24;

const base64UrlEncode = (value) => {
    return Buffer.from(JSON.stringify(value))
        .toString("base64url");
};

const signToken = (payload) => {
    const secret = process.env.JWT_SECRET || "trimedi-development-secret";
    const header = { alg: "HS256", typ: "JWT" };
    const body = {
        ...payload,
        exp: Math.floor(Date.now() / 1000) + TOKEN_EXPIRY_SECONDS
    };
    const unsignedToken = `${base64UrlEncode(header)}.${base64UrlEncode(body)}`;
    const signature = crypto
        .createHmac("sha256", secret)
        .update(unsignedToken)
        .digest("base64url");

    return `${unsignedToken}.${signature}`;
};

const toAuthResponse = (user) => ({
    token: signToken({ id: user._id.toString(), username: user.username }),
    user: {
        id: user._id,
        name: user.name,
        username: user.username
    }
});

router.post("/register", async (req, res) => {
    try {
        const { name = "", username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required." });
        }

        if (password.length < 6) {
            return res.status(400).json({ message: "Password must be at least 6 characters." });
        }

        const normalizedUsername = username.trim().toLowerCase();
        const existingUser = await User.findOne({ username: normalizedUsername });

        if (existingUser) {
            return res.status(409).json({ message: "Username is already registered." });
        }

        const user = new User({
            name: name.trim(),
            username: normalizedUsername
        });
        user.setPassword(password);
        await user.save();

        return res.status(201).json(toAuthResponse(user));
    } catch (err) {
        console.error("Register failed:", err);
        return res.status(500).json({ message: "Unable to register user." });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required." });
        }

        const user = await User.findOne({ username: username.trim().toLowerCase() });

        if (!user || !user.validatePassword(password)) {
            return res.status(401).json({ message: "Invalid username or password." });
        }

        return res.status(200).json(toAuthResponse(user));
    } catch (err) {
        console.error("Login failed:", err);
        return res.status(500).json({ message: "Unable to login." });
    }
});

export default router;
