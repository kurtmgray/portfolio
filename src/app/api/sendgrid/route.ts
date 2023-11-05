import { sendEmail } from './lib/sendgrid';

export async function POST(req: Request, res: Response) {
  const { email, fullname, subject, message } = await req.json();

  try {
    await sendEmail(email, fullname, subject, message);
    return Response.json({ message: 'Email sent' });
  } catch (error) {
    console.error(error);
    Response.json({ message: 'Internal Server Error' });
  }
};
