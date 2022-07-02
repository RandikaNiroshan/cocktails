import React from "react";

const StatCard = ({ title, count, icon1, icon2 }) => {
  return (
    <div className="m-1 p-4 xl:py-6 bg-app-cadet rounded-lg shadow-lg overflow-hidden">
      <div className="w-full h-full relative  flex flex-col justify-center items-center">
        <div className="text-white/30 absolute -bottom-6 -right-4 -rotate-45">
          {icon1}
        </div>
        <div className="text-white/30 absolute top-0 left-0 lg:top-4 lg:left-4 rotate-[135deg]">
          {icon2}
        </div>
        <h2 className="text-white font-app-main text-6xl font-bold mt-1">{count}</h2>
        <h3 className="text-app-olivine font-app-heading text-2xl mt-1">{title}</h3>
      </div>
    </div>
  );
};

export default StatCard;
