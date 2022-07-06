import React from "react";
import { Link } from "react-router-dom";
import { HTTP_STATUS } from "../../app/utils/constants";

const LinkButton = ({ link, text, loading = HTTP_STATUS.FULFILLED }) => {
  return (
    <Link to={link}>
      <button
        disabled={loading !== HTTP_STATUS.FULFILLED ? true : ""}
        className={`w-max h-max mx-2 px-[6px] py-[2px] lg:px-[8px] lg:py[3px] basic-transition rounded-md text-white text-center text-[14px] lg:text-[15px] font-app-heading tracking-wider drop-shadow-md ${loading !== HTTP_STATUS.FULFILLED ? "bg-app-flame/40" : "bg-app-flame active:scale-[0.95] md:hover:scale-[1.05]"}`}
      >
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
