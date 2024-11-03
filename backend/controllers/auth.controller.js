import bcryptjs from "bcryptjs";
import crypto from "crypto";

import { User } from "../models/user.model.js";

export const signup = async (req, res) => {
  res.send("signup Auth!!!");
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
