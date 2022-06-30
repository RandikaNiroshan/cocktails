import React from "react";
import { Logo } from "../../components";
import {
  FaFacebookSquare,
  FaTwitterSquare,
  FaGithubSquare,
  FaLinkedin,
} from "react-icons/fa";

const FooterLogo = () => {
  return (
    <div className="flex flex-col">
      <Logo alt={true} />
      <div className="flex gap-1 mx-1 mb-2 mt-3 w-full justify-start">
        <a
          href="https://facebook.com/RandikaNiroshan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebookSquare className="w-5 h-5 text-white shadow-sm hover:text-app-flame hover:animate-expand hover:cursor-pointer" />
        </a>
        <a
          href="https://twitter.com/RandikaNiroshan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitterSquare className="w-5 h-5 text-white shadow-sm hover:text-app-flame hover:animate-expand hover:cursor-pointer" />
        </a>
        <a
          href="https://github.com/RandikaNiroshan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare className="w-5 h-5 text-white shadow-sm hover:text-app-flame hover:animate-expand hover:cursor-pointer" />
        </a>
        <a
          href="https://linkedin.com/in/randika-niroshan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="w-5 h-5 text-white shadow-sm hover:text-app-flame hover:animate-expand hover:cursor-pointer" />
        </a>
      </div>
    </div>
  );
};

export default FooterLogo;