import React from "react";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-[200px] m-auto">
      <div className="animate-spin rounded-full h-12 w-32 border-t-2 border-b-2 border-blue-900"></div>
    </div>
  );
};

export default Loading;
