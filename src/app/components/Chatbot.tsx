import React, { useState } from 'react';
import { Message } from '../../../types';

function Chatbot() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async () => {
    if (input.trim()) {
      const userMessage = { text: input, sender: 'user' };
      setMessages([...messages, userMessage]);

      const response = await fetch('https://api.dialogflow.com/v1/query', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_DIALOGFLOW_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: input, lang: 'en' }),
      });

      const responseData = await response.json();
      const botMessage = {
        text: responseData.result.fulfillment.speech,
        sender: 'bot',
      };
      setMessages([...messages, userMessage, botMessage]);
      setInput('');
    }
  };

  return (
    <div>
      <div id="chat-box">
        {messages.map((message, index) => (
          <p key={index} className={message.sender}>
            {message.text}
          </p>
        ))}
      </div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default Chatbot;
