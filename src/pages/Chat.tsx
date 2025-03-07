import React, { useState } from "react";
import ChatBox from "../components/ChatBox";
import Navbar from "../components/Navbar";

const Chat: React.FC = () => {
  const [messages, setMessages] = useState([
    {
      id: "1",
      sender: "John Doe",
      text: "Hey team, let’s discuss the project.",
      timestamp: "10:00 AM",
    },
    {
      id: "2",
      sender: "Jane Smith",
      text: "Sure, I’ll share the updates.",
      timestamp: "10:05 AM",
    },
  ]);

  const handleSendMessage = (message: string) => {
    setMessages([
      ...messages,
      {
        id: String(messages.length + 1),
        sender: "You",
        text: message,
        timestamp: new Date().toLocaleTimeString(),
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
          Team Chat
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-6 border border-gray-200 h-[600px] flex flex-col">
          <ChatBox messages={messages} onSendMessage={handleSendMessage} />
        </div>
      </div>
    </div>
  );
};

export default Chat;
