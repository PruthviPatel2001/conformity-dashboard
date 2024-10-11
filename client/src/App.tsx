import { useState } from "react";
import { Sidebar } from "./layout";
import { DashboardPage } from "./pages";
import { Chatbot, DeviceWarning } from "./components";

function App() {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  const openChatbot = () => setIsChatbotOpen(true);
  const closeChatbot = () => setIsChatbotOpen(false);

  return (
    <div className="bg-[#f2f4f7] dark:bg-[#181F39]">
      <div className="block md:hidden">
        <DeviceWarning />
      </div>

      <div className="hidden md:grid grid-cols-12">
        <div className="col-span-1 mr-10 dark:bg-[#1E243F] shadow-lg">
          <Sidebar />
        </div>
        <div className="col-span-11">
          <DashboardPage />
        </div>
      </div>

      <Chatbot
        isChatbotOpen={isChatbotOpen}
        openChatbot={openChatbot}
        closeChatbot={closeChatbot}
      />
    </div>
  );
}

export default App;
