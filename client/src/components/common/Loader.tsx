import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="loader mb-4">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
      </div>
      <p className="text-lg text-gray-700">Loading, please wait...</p>
    </div>
  );
};

export default Loader;
