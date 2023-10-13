import { sendEmail } from '../../lib/sendgrid';

export default async (req, res) => {
  const { email } = req.body;

  try {
    await sendEmail(email, 'Test Email', 'This is a test email from Next.js!');
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}