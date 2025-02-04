'use client';
import { useState } from 'react';

export default function Chat() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');

  const handleAsk = async () => {
    const response = await fetch('/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question }),
    });
    const data = await response.json();
    setAnswer(data.answer);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleAsk();
    }
  };

  return (
    <section className="p-8 text-white w-full max-w-screen-lg mx-auto">
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        onKeyDown={handleKeyPress}
        className="w-full p-4 mb-4 h-20 text-green-500 placeholder-green-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 bg-black rounded-lg"
        placeholder="Ask me anything about him..."
      />
      {answer && (
        <div className="mt-4 p-4 bg-gray-800 rounded-lg">
          <p>{answer}</p>
        </div>
      )}
    </section>
  );
}

