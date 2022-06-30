import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import { Menu } from "../../app/utils/data";

const MobileMenu = ({ onClose }) => {
  const navigate = useNavigate();

  const navigateRoute = (route) => {
    navigate(route);
    onClose();
  };
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-app-cadet backdrop-blur-sm z-[100]">
      <div className="w-full h-full relative">
        <ul className="w-full h-full flex flex-col justify-center items-center gap-6">
          {Menu.map((item, index) => (
            <li
              key={index}
              onClick={() => navigateRoute(item.link)}
              className="font-app-text text-xl text-white basic-transition cursor-pointer"
            >
              {item.menu}
            </li>
          ))}
        </ul>
        <div className="w-full flex justify-center py-1 absolute bottom-0">
          <p className="text-[15px] text-white font-app-heading tracking-wider">
            © 2022 <span className="font-bold">Cocktails</span>. By{"  "}
            <a
              className="font-bold"
              href="https://github.com/RandikaNiroshan"
              target="_blank"
              rel="noopener noreferrer"
            >
              Randika Niroshan
            </a>
          </p>
        </div>
        <div
          onClick={() => onClose()}
          className="h-6 w-6 md:h-8 md:w-8 absolute top-4 right-4"
        >
          <svg
            className="drop-shadow-lg stroke-white basic-transition hover:stroke-app-flame hover:animate-expand cursor-pointer svg-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default MobileMenu;
