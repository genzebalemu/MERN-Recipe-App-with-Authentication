import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { UserModel } from "../models/User.js";

export const register = async (req, res) => {
    const { username, password } = req.body;
    const oldUser = await UserModel.findOne({ username });

    if (oldUser) {
        return res.status(409).json({ message: "User already has an account" });
    }

    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await UserModel({
        username,
        password: hashedPassword
    });
    await user.save();
    res.status(200).json(user);
};

export const login = async (req, res) => {
    const secret = "secret";
    const { username, password } = req.body;
    const existedUser = await UserModel.findOne({ username });

    if (!existedUser) {
        return res.status(404).json({ message: "User not registered" });
    }

    const matchedPassword = await bcrypt.compare(password, existedUser.password);
    if ( matchedPassword) {
        const token = jwt.sign({ id: existedUser._id, username: existedUser.username }, secret);
        // console.log('Token:', token);
        res.status(200).json({ token ,userID:existedUser._id});
    } else {
        res.status(401).json({ message: "Invalid password" });
    }
};

