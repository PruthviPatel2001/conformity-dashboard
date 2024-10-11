import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import SendIcon from "@mui/icons-material/Send";

interface ChatModalProps {
  closeChatbot: () => void;
}

const ChatModal: React.FC<ChatModalProps> = ({ closeChatbot }) => {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hello! I'm CompliBot, here to assist you with your Governance, Risk, and Compliance needs. How can I help you today?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      setMessages([...messages, { from: "user", text: inputValue }]);
      setInputValue("");
    }
  };

  return (
    <Modal open={true} onClose={closeChatbot}>
      <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg w-[400px] h-[600px] flex flex-col">
        <div className="mb-4 flex justify-between items-center border-b pb-3">
          <h2 className="text-xl font-bold">CompliBot</h2>
          <button onClick={closeChatbot} className="text-red-500 font-bold">
            X
          </button>
        </div>

        {/* Chat Messages Section */}
        <div className="flex-grow overflow-y-auto mb-4 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${
                message.from === "bot" ? "justify-start" : "justify-end"
              }`}
            >
              <div
                className={`p-3 rounded-lg text-white max-w-xs ${
                  message.from === "bot"
                    ? "bg-[#40534C]"
                    : "bg-gray-300 text-black"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="border-t pt-3 flex items-center space-x-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message..."
            className="flex-grow border rounded-lg p-2 focus:outline-none focus:border-[#40534C] transition"
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSendMessage();
            }}
          />
          <button
            className="border text-[#40534C] p-2 rounded-lg hover:bg-[#40534C] hover:text-white transition"
            onClick={handleSendMessage}
          >
            <SendIcon />
          </button>
        </div>
      </Box>
    </Modal>
  );
};

export default ChatModal;
