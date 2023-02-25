import React  from "react";
const LoadingSpinner = () => {
  return (
    <div className="absolute z-10 right-1/2 bottom-1/2  transform translate-x-1/2 translate-y-1/2 w-auto">
      <div className="border-t-transparent border-solid animate-spin  rounded-full border-blue-400 border-8 h-64 w-64"></div>
    </div>
  );
};

export default LoadingSpinner;
