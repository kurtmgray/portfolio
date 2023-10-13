import React, { useState, FormEvent } from 'react';
export default function Contact() {
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({
    fullname: false,
    email: false,
    subject: false,
    message: false,
    form: '',
  });
  const [buttonText, setButtonText] = useState('Send');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let isValidForm = handleValidation();
    if (isValidForm) {
      const res = await fetch('/api/sendgrid', {
        body: JSON.stringify({
          email: email,
          fullname: fullname,
          subject: subject,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText('Send');
        return;
      }
      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText('Send');
    }
    console.log(fullname, email, subject, message);
  };

  const handleValidation = () => {
    let tempErrors = {
      fullname: false,
      email: false,
      subject: false,
      message: false,
      form: '',
    };
    let isValid = true;

    if (fullname.length <= 0) {
      tempErrors['fullname'] = true;
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors['email'] = true;
      isValid = false;
    }
    if (subject.length <= 0) {
      tempErrors['subject'] = true;
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors['message'] = true;
      isValid = false;
    }

    setErrors({ ...tempErrors });
    console.log('errors', errors);
    return isValid;
  };

  return (
    <form className="contact" id="contact" onSubmit={handleSubmit}>
      <h1 className="contact__title">Send a message</h1>

      <label htmlFor="fullname">
        Full name <span className="">*</span>
      </label>
      <input
        type="text"
        name="fullname"
        className=""
        value={fullname}
        onChange={(e) => {
          setFullname(e.target.value);
        }}
      />

      <label htmlFor="email">
        E-mail<span className="">*</span>
      </label>
      <input
        type="email"
        name="email"
        className=""
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />

      <label htmlFor="subject">
        Subject<span className="">*</span>
      </label>
      <input
        type="text"
        name="subject"
        className=""
        value={subject}
        onChange={(e) => {
          setSubject(e.target.value);
        }}
      />

      <label htmlFor="message">
        Message<span className="">*</span>
      </label>
      <textarea
        name="message"
        className=""
        value={message}
        onChange={(e) => {
          setMessage(e.target.value);
        }}
      ></textarea>
      <div>
        <button>
          {buttonText}
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-cyan-500 ml-2"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.00967 5.12761H11.0097C12.1142 5.12761 13.468 5.89682 14.0335 6.8457L16.5089 11H21.0097C21.562 11 22.0097 11.4477 22.0097 12C22.0097 12.5523 21.562 13 21.0097 13H16.4138L13.9383 17.1543C13.3729 18.1032 12.0191 18.8724 10.9145 18.8724H8.91454L12.4138 13H5.42485L3.99036 15.4529H1.99036L4.00967 12L4.00967 11.967L2.00967 8.54712H4.00967L5.44417 11H12.5089L9.00967 5.12761Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </div>
      {showSuccessMessage && (
        <div className="">
          <p className="">Message sent!</p>
        </div>
      )}
      {showFailureMessage && (
        <div className="">
          <p className="">Message failed to send. Please try again.</p>
        </div>
      )}
    </form>
  );
}
