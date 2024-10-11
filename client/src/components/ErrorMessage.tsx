import React from "react";

const ErrorComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <div className="flex items-center justify-center mb-4">
        <div className="animate-bounce rounded-full h-16 w-16 border-4 border-red-500 border-t-transparent"></div>
      </div>
      <h2 className="text-2xl font-bold text-red-600 mb-2">
        Something Went Wrong
      </h2>
      <p className="text-lg text-red-500 text-center px-4">
        Try refreshing the app
      </p>
      <button className="mt-4 px-6 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition duration-200">
        Retry
      </button>
    </div>
  );
};

export default ErrorComponent;
