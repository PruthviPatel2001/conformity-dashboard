import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SummarizeIcon from "@mui/icons-material/Summarize";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import Tooltip from "@mui/material/Tooltip";
import { DarkModeToggle } from "../components";

const Sidebar = () => {
  const location = useLocation();

  const [darkMode, setdarkMode] = useState(false);

  const darkModeHandler = () => {
    setdarkMode(!darkMode);
    document.body.classList.toggle("dark");
  };

  const icons = [
    { id: 1, icon: <DashboardIcon />, name: "Dashboard", path: "/" },
    { id: 2, icon: <SummarizeIcon />, name: "Audit Record", path: "/audit" },
    { id: 3, icon: <MenuBookIcon />, name: "Reports", path: "/reports" },
    {
      id: 4,
      icon: <HistoryEduIcon />,
      name: "Compliance History",
      path: "/compliance",
    },
    {
      id: 5,
      icon: <NotificationsActiveIcon />,
      name: "Alerts",
      path: "/alerts",
    },
    { id: 6, icon: <SupportAgentIcon />, name: "Support", path: "/support" },
  ];

  return (
    <div className="mt-48 text-[#a9a9a9]">
      <div className=" space-y-6 flex flex-col items-center">
        {icons.map((item) => {
          const isActive = location.pathname === item.path;
          return (
            <Tooltip key={item.id} title={item.name} placement="right">
              <div
                className={`p-4 rounded-lg cursor-pointer flex items-center justify-center 
                  ${
                    isActive
                      ? "bg-blue-500 text-white"
                      : "hover:bg-blue-100 hover:text-blue-500"
                  }
                `}
              >
                {item.icon}
              </div>
            </Tooltip>
          );
        })}

        <div>
          <DarkModeToggle
            darkMode={darkMode}
            darkModeHandler={darkModeHandler}
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
