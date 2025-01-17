import React from "react";

const index = ({ image, header, paragraph, className }) => {
  return (
    <div
      className={`relative bg-left h-80 md:h-[70vh] bg-no-repeat text-white flex items-center justify-center ${className}`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "100% 100%",
      }}
    >
      <div className="absolute inset-0 bg-[#00000080] bg-opacity-40"></div>
      <div className="p-4 text-center rounded z-10 flex flex-col items-center">
        <h1 className="text-3xl md:text-5xl font-bold md:mb-[3%] font-axiforma">
          {header}
        </h1>
        <p className="text-lg md:text-xl md:w-[60%]">{paragraph}</p>
      </div>
    </div>
  );
};

export default index;
