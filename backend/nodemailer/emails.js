import {
    PASSWORD_RESET_REQUEST_TEMPLATE,
    PASSWORD_RESET_SUCCESS_TEMPLATE,
    VERIFICATION_EMAIL_TEMPLATE,
    WELCOME_TEMPLATE,
} from "./emailTemplates.js";
import { sendMail, transporter } from "./nodemailer.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
    const recipient = [email];

    try {
        const mailOption = {
            from: {
                name: "Mohamed Osama",
                address: process.env.USER,
            },
            to: recipient,
            subject: "Verify your email",
            html: VERIFICATION_EMAIL_TEMPLATE.replace(
                "{verificationCode}",
                verificationToken
            ),
        };
        await sendMail(transporter, mailOption);
        console.log("Email sent successfully");
    } catch (error) {
        console.error(`Error sending verification`, error);

        throw new Error(`Error sending verification email: ${error}`);
    }
};

export const sendWelcomeEmail = async (email, name) => {
    const recipient = [email];

    try {
        const mailOption = {
            from: {
                name: "Mohamed Osama",
                address: process.env.USER,
            },
            to: recipient,
            subject: "Welcome email",
            html: WELCOME_TEMPLATE.replace(
                /{company_info_name}/g,
                " Auth Company "
            ).replace("{name}", name),
        };
        await sendMail(transporter, mailOption);
        console.log("Welcome email sent successfully");
    } catch (error) {
        console.error(`Error sending welcome email`, error);

        throw new Error(`Error sending welcome email: ${error}`);
    }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [email];

    try {
        const mailOption = {
            from: {
                name: "Mohamed Osama",
                address: process.env.USER,
            },
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace(
                "{resetURL}",
                resetURL
            ),
        };
        await sendMail(transporter, mailOption);
    } catch (error) {
        console.error(`Error sending password reset email`, error);

        throw new Error(`Error sending password reset email: ${error}`);
    }
};

export const sendResetSuccessEmail = async (email) => {
    const recipient = [email];

    try {
        const mailOption = {
            from: {
                name: "Mohamed Osama",
                address: process.env.USER,
            },
            to: recipient,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
        };
        await sendMail(transporter, mailOption);
    } catch (error) {
        console.error(`Error sending password reset success email`, error);

        throw new Error(`Error sending password reset success email: ${error}`);
    }
};
