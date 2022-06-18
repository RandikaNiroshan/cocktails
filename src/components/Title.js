import React from "react";

const Title = ({ title, className }) => {
  return (
    <div className={`mt-12 mb-8 mx-8 w-full flex justify-center ${className ?? ""}`}>
      <div className="w-max h-max">
        <h1 className="text-3xl capitalize text-app-flame font-extrabold font-app-heading relative title-text">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Title;
