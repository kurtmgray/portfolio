
// import { NextRequest, NextResponse } from 'next/server';
import { sendEmail } from './lib/sendgrid';

export async function POST(req: Request, res: Response) {
  console.log(req)
  const { email, fullname, subject, message } = await req.json();

  try {
    await sendEmail(email, fullname, subject, message);
    console.log("tried to send")
    return Response.json({ message: 'Email sent' });
  } catch (error) {
    console.error(error);
    // res.status(500).json({ message: 'Internal Server Error' });
    Response.json({ message: 'Internal boop Error' });
  }
};
