import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import Tooltip from "@mui/material/Tooltip";

const DarkModeToggle: React.FC<{
  darkMode: boolean;
  darkModeHandler: () => void;
}> = ({ darkMode, darkModeHandler }) => {
  return (
    <div
      className={`p-4 rounded-lg cursor-pointer flex items-center justify-center 
        ${
          darkMode
            ? "bg-gray-800 text-white border border-gray-600"
            : "bg-white text-gray-800 border border-gray-300"
        }`}
      onClick={darkModeHandler}
    >
      {darkMode ? (
        <Tooltip title="Light Mode" placement="right">
          <LightModeIcon className="text-yellow-500" />
        </Tooltip>
      ) : (
        <Tooltip title="Dark Mode" placement="right">
          <DarkModeIcon className="text-gray-800" />
        </Tooltip>
      )}
    </div>
  );
};

export default DarkModeToggle;
