import React from "react";
import { Link } from "react-router-dom";

const LinkButton = ({ link, text }) => {
  return (
    <Link to={link}>
      <button className="w-max h-max mt-3 mx-2 px-3 py-1 active:scale-[0.95] hover:scale-[1.05] basic-transition rounded-md bg-app-flame text-white text-center text-base font-app-heading tracking-wider drop-shadow-md">
        {text}
      </button>
    </Link>
  );
};

export default LinkButton;
