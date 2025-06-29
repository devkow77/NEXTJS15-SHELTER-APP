"use server";

import nodemailer from "nodemailer";
import Email from "@/emails/index";
import { render } from "@react-email/components";

interface Props {
  email: string;
  message: string;
}

export const sendMessage = async (data: Props) => {
  const user = process.env.NEXT_USER_EMAIL as string;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass: process.env.NEXT_USER_PASSWORD as string,
    },
  });

  try {
    const emailHtml = render(
      Email({ email: data.email, message: data.message }),
    );
    await transporter.sendMail({
      from: user,
      to: "kowalsky429@gmail.com",
      subject: `Contact form submission (fendie shop) from ${data.email}`,
      html: emailHtml,
    });

    console.log("Message has been sent successfully");
  } catch (err) {
    console.log(`Messag failed to send: ${err}`), console.log(err);
  }
};
