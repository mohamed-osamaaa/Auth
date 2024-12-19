import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for port 465, false for other ports
    auth: {
        user: process.env.USER,
        pass: process.env.APP_PASSWORD,
    },
});
export const sendMail = async (transporter, mailOptions) => {
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");
};
