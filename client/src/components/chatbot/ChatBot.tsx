import React from "react";
import ChatIcon from "@mui/icons-material/Chat";
import ChatModal from "./ChatModal";

interface ChatbotProps {
  isChatbotOpen: boolean;
  openChatbot: () => void;
  closeChatbot: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({
  isChatbotOpen,
  openChatbot,
  closeChatbot,
}) => {
  return (
    <div>
      <div
        className="fixed bottom-8 right-8 bg-[#243642] p-4 rounded-full cursor-pointer shadow-lg"
        onClick={openChatbot}
      >
        <ChatIcon style={{ color: "white", fontSize: 25 }} />
      </div>

      {isChatbotOpen && <ChatModal closeChatbot={closeChatbot} />}
    </div>
  );
};

export default Chatbot;
