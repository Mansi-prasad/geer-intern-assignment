import React from "react";

const loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin h-16 w-16 rounded-full border-4 border-gray-600 border-b-transparent"></div>
    </div>
  );
};

export default loading;
