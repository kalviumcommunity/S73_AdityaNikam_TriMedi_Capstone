import mongoose from "mongoose";
import crypto from "crypto";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        default: ""
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    passwordHash: {
        type: String,
        required: true
    },
    passwordSalt: {
        type: String,
        required: true
    }
}, { timestamps: true });

userSchema.methods.setPassword = function(password) {
    this.passwordSalt = crypto.randomBytes(16).toString("hex");
    this.passwordHash = crypto
        .pbkdf2Sync(password, this.passwordSalt, 100000, 64, "sha512")
        .toString("hex");
};

userSchema.methods.validatePassword = function(password) {
    const hash = crypto
        .pbkdf2Sync(password, this.passwordSalt, 100000, 64, "sha512")
        .toString("hex");

    return crypto.timingSafeEqual(Buffer.from(this.passwordHash, "hex"), Buffer.from(hash, "hex"));
};

const User = mongoose.model('User', userSchema);

export default User;
