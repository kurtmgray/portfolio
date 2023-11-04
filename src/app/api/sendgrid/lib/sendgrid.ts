import sgMail from '@sendgrid/mail';

if (process.env.NEXT_PUBLIC_SENDGRID_API_KEY) {
  sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
} else {
  console.error("SENDGRID_API_KEY is not defined");
}

export const sendEmail = async (email: string, fullname: string, subject: string, text: string) => {
  console.log("sendEmail called")
  const msg = {
    to: 'kurtgray@gmail.com',
    from: email,
    subject,
    text: `Message from ${fullname}: ${text}`,
    html: '<strong>and easy to do anywhere, even with Node.js</strong>'
  };

  try {
    const response = await sgMail.send(msg);
    console.log(response)
    console.log("Email sent to 'kurtgray@gmail.com'");
  } catch (error) {
    console.error("sendgriderr", error);
  }
};