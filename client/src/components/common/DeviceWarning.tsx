import React from "react";
import DesktopMacOutlinedIcon from "@mui/icons-material/DesktopMacOutlined";

const DeviceWarning: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="p-6 md:p-8 flex flex-col justify-center items-center">
        <DesktopMacOutlinedIcon
          fontSize="large"
          className="text-blue-600 text-4xl mr-4"
        />
        <h2 className="text-md font-bold mt-4 text-center">
          For optimal viewing, switch to a larger device.
        </h2>
      </div>
    </div>
  );
};

export default DeviceWarning;
