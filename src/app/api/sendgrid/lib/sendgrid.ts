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
  // try {
  //   console.log(msg)
  //   console.log(response)
  //   console.log("Email sent to 'kurtgray@gmail.com'");
  // } catch (error) {
  //   console.error("sendgriderr", error);
  // }
}
// // };
// const sgMail = require('@sendgrid/mail')
// export const sendEmail = async (email: string, fullname: string, subject: string, text: string) => {
//   sgMail.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY)
//   // console.log(sgMail)
// const msg = {
//   to: 'test@example.com', // Change to your recipient
//   from: 'test@example.com', // Change to your verified sender
//   subject: 'Sending with SendGrid is Fun',
//   text: 'and easy to do anywhere, even with Node.js',
//   html: '<strong>and easy to do anywhere, even with Node.js</strong>',
// }
// sgMail
//   .send(msg)
//   .then(() => {
//     console.log('Email sent')
//   })
//   .catch((error: any) => {
//     console.error(error)
//   })
// }