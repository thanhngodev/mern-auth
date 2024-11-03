import nodemailer from "nodemailer";
import { MAILER_CONFIG } from "./mailer.config.js";
import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./mailer.templates.js";

export const transporter = nodemailer.createTransport(MAILER_CONFIG);

export const sendMail = (mailOptions) => {
  return new Promise((resolve, reject) => {
    transporter.sendMail(
      { ...mailOptions, from: MAILER_CONFIG.auth.user },
      (error, info) => {
        if (error) {
          return reject(error);
        }
        resolve(info);
      }
    );
  });
};

export const sendVerificationEmail = async (email, verificationCode) => {
  const mailOptions = {
    to: email,
    subject: "Verify Your Email",
    html: VERIFICATION_EMAIL_TEMPLATE.replace(
      "{verificationCode}",
      verificationCode
    ),
  };
  return sendMail(mailOptions);
};

export const sendWelcomeEmail = async (email, name) => {
  const mailOptions = {
    to: email,
    subject: "Welcome to Our Service!",
    html: `<p>Hello ${name},</p><p>Welcome to our service! We are glad to have you.</p>`,
  };
  return sendMail(mailOptions);
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const mailOptions = {
    to: email,
    subject: "Reset Your Password",
    html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
  };
  return sendMail(mailOptions);
};

export const sendResetSuccessEmail = async (email) => {
  const mailOptions = {
    to: email,
    subject: "Password Reset Successful",
    html: PASSWORD_RESET_SUCCESS_TEMPLATE,
  };
  return sendMail(mailOptions);
};
