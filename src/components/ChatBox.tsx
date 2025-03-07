import React, { useState } from "react";


interface ChatBoxProps {
  messages: Array<{
    id: string;
    sender: string;
    text: string;
    timestamp: string;
  }>;
  onSendMessage: (message: string) => void;
}

const ChatBox: React.FC<ChatBoxProps> = ({ messages, onSendMessage }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSendMessage(message);
      setMessage("");
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg) => (
          <div key={msg.id} className="flex flex-col">
            <span className="text-sm font-medium text-gray-700">
              {msg.sender}
            </span>
            <p className="text-sm text-gray-600">{msg.text}</p>
            <span className="text-xs text-gray-500">{msg.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          className="w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          placeholder="Type a message..."
        />
      </div>
    </div>
  );
};

export default ChatBox;
