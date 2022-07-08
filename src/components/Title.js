import React from "react";

const Title = ({ title, className }) => {
  return (
    <div
      className={`mt-8 mb-6 md:mt-10 md:mb-8 lg:mt-12 mx-4 w-fill flex justify-center ${
        className ?? ""
      }`}
    >
      <div className="w-max h-max">
        <h1 className="text-xl md:text-2xl lg:text-3xl capitalize text-app-flame font-extrabold font-app-heading relative xs:title-text">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Title;
