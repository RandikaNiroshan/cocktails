import React from "react";
import { HTTP_STATUS } from "../../app/utils/constants";

const PrimaryButton = ({ text, onClick, loading = HTTP_STATUS.FULFILLED }) => {
  return (
    <button
      disabled={loading !== HTTP_STATUS.FULFILLED ? true : ""}
      onClick={onClick}
      className={`w-max h-max mx-2 px-[6px] py-[3px] lg:px-[10px] basic-transition rounded-md  text-white text-center text-[14px] lg:text-[15px] font-app-heading tracking-wider drop-shadow-md ${loading !== HTTP_STATUS.FULFILLED ? "bg-app-flame/40" : "bg-app-flame active:scale-[0.95] md:hover:scale-[1.05]"}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
