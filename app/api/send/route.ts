import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";
import EmailTemplate from "@/emails/email-template";

export async function OPTIONS() {
  return NextResponse.json(
    {},
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin":
          "https://nextjs-15-shelter-app-v3ei.vercel.app",
        "Access-Control-Allow-Methods": "POST",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    },
  );
}

export async function POST(req: NextRequest) {
  const { email, message } = await req.json();
  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: "AnimalShelter <animalshelter@resend.dev>",
      to: "kowalsky429@gmail.com",
      subject: "Message from the client!",
      react: EmailTemplate({
        email,
        message,
      }),
    });

    return NextResponse.json({ data });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}
