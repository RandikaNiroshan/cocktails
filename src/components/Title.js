import React from "react";

const Title = ({ title, className }) => {
  return (
    <div className={`w-full flex justify-center ${className ?? ""}`}>
      <div className="w-max h-max">
        <h1 className="text-3xl capitalize text-app-flame font-extrabold font-app-heading relative title-text">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Title;
