import bcryptjs from "bcryptjs";
// import crypto from "crypto";

import { User } from "../models/user.model.js";
import { generateTokenAndSetCookie } from "../utils/generateTokenAndSetCookie.js";
import { sendVerificationEmail } from "../mailers/mailer.service.js";

export const signup = async (req, res) => {
  const { email, password, name } = req.body;

  try {
    if (!email || !password || !name) {
      throw new Error("ALl fields are required");
    }
    
    const userAlreadyExits = await User.findOne({ email });
    if (userAlreadyExits) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashedPassword = await bcryptjs.hash(password, 10);
    const verificationCode = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    const user = new User({
      email,
      password: hashedPassword,
      name,
      verificationCode,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    await user.save();

    await sendVerificationEmail(user.email, verificationCode);

    // jwt
    generateTokenAndSetCookie(res, user._id);
    const { password: userPassword, ...userResult } = user._doc;

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...userResult,
      },
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyEmail = async (req, res) => {
  res.send("verifyEmail Auth!!!");
};

export const login = async (req, res) => {
  res.send("login Auth!!!");
};

export const logout = async (req, res) => {
  res.send("logout Auth!!!");
};

export const forgotPassword = async (req, res) => {
  res.send("forgotPassword Auth!!!");
};

export const resetPassword = async (req, res) => {
  res.send("resetPassword Auth!!!");
};

export const checkAuth = async (req, res) => {
  res.send("checkAuth Auth!!!");
};
