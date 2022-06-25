import React from "react";

const PrimaryButton = ({text, onClick}) => {
  return (
    <button onClick={onClick} className="w-max h-max mx-2 px-[6px] py-[3px] lg:px-[10px] active:scale-[0.95] hover:scale-[1.05] basic-transition rounded-md bg-app-flame text-white text-center text-base font-app-heading tracking-wider drop-shadow-md">
      {text}
    </button>
  );
};

export default PrimaryButton;
