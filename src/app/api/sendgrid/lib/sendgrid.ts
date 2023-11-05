import sgMail from '@sendgrid/mail';

export const sendEmail = async (email: string, fullname: string, subject: string, text: string) => {
  if (process.env.NEXT_PUBLIC_SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);
  } else {
    console.error("SENDGRID_API_KEY is not defined");
  }
    console.log("sendEmail called")
  const msg = {
    to: 'kurtgray@gmail.com',
    from: 'kurtgray@gmail.com',
    subject: 'Message from kurtgray.dev',
    text: `
      Subject: ${subject}
      Name: ${fullname} 
      Contact: ${email}
      Message: ${text}
    `,
  };

  sgMail.send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
  }