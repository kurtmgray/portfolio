import type { NextApiRequest, NextApiResponse } from 'next';
import { sendEmail } from './lib/sendgrid';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { email, fullname, subject, message } = req.body;

  try {
    await sendEmail(email, subject, `From: ${fullname}, Email: ${email}, Message: ${message}`);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
