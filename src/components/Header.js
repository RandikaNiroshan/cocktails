import React from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu } from "../utils/constants";

const Header = () => {
  return (
    <header className="flex justify-between items-center h-16">
      <div className="flex gap-1 h-8 relative group">
        <Link to="/">
          <svg
            className="h-8 w-8 cursor-pointer svg-icon-group group-hover:fill-app-flame"
            viewBox="0 0 64 64"
          >
            <g id="_logo" data-name="logo">
              <path d="M13.293,8.293a1,1,0,0,0,0,1.414l3,3a1,1,0,0,0,1.414-1.414l-3-3A1,1,0,0,0,13.293,8.293Z" />
              <path d="M56.786,15.618A1,1,0,0,0,56,14H45.565l.637-2H52a3.013,3.013,0,0,0,2.885-2.176l2-7A1,1,0,0,0,56.2,1.588L52.352.489a1,1,0,0,0-1.237.687L49.737,6H44a2.985,2.985,0,0,0-2.862,2.1L39.261,14H30.91A6,6,0,0,0,31,13a3.326,3.326,0,0,0-1.535-2.964A4.771,4.771,0,0,0,25.9,9.628a15.935,15.935,0,0,0-4.2-9.335,1,1,0,0,0-1.414,1.414,13.942,13.942,0,0,1,3.585,7.871,4.669,4.669,0,0,0-3.343.458A3.326,3.326,0,0,0,19,13a6,6,0,0,0,.09,1H13.256A6.98,6.98,0,0,1,12,10V7h3a6.988,6.988,0,0,1,4.629,1.749,1,1,0,1,0,1.324-1.5A8.989,8.989,0,0,0,15,5H11a1,1,0,0,0-1,1v4a9,9,0,0,0,.939,4H8a1,1,0,0,0-.786,1.618L29,43.345v14.79c-2.28.368-7.989,1.546-9.832,4.31A1,1,0,0,0,20,64H44a1,1,0,0,0,.832-1.555C42.989,59.681,37.28,58.5,35,58.135V43.345ZM14.564,21.736A26.661,26.661,0,0,1,25,19a12.787,12.787,0,0,1,6.026,1.277A19.293,19.293,0,0,0,40,22a56.587,56.587,0,0,0,10.015-1l-16.5,21H30.486ZM40,20c-.189,0-.367,0-.547-.006L40.723,16h2.105l-1.264,3.967C41.044,19.987,40.522,20,40,20Zm13.943-4-2.022,2.572a63.679,63.679,0,0,1-8.215,1.263L44.928,16Zm-10.9-7.3A1,1,0,0,1,44,8h6.491a1,1,0,0,0,.962-.725l1.311-4.588,1.923.549L52.961,9.275A1,1,0,0,1,52,10H45.471a1,1,0,0,0-.953.7L43.465,14H41.359ZM38.624,16l-1.239,3.894a15.646,15.646,0,0,1-5.565-1.453,17.021,17.021,0,0,0-2.8-1A6.008,6.008,0,0,0,30.188,16ZM25,17a3.966,3.966,0,0,1-2.618-1h5.236A3.966,3.966,0,0,1,25,17Zm-4-4a1.353,1.353,0,0,1,.586-1.263,2.254,2.254,0,0,1,1.169-.279,4.117,4.117,0,0,1,1.8.437c.009,0,.021,0,.031.007a.986.986,0,0,0,.387.091l.046,0a1,1,0,0,0,.4-.1c.009,0,.019,0,.028-.006a3.338,3.338,0,0,1,2.967-.158A1.353,1.353,0,0,1,29,13a3.939,3.939,0,0,1-.142,1H21.142A3.939,3.939,0,0,1,21,13Zm-8.71,3a9,9,0,0,0,3.335,2.345,1,1,0,1,0,.75-1.853A7.2,7.2,0,0,1,15.393,16h4.419A6.039,6.039,0,0,0,21,17.457a35.438,35.438,0,0,0-7.7,2.666L10.057,16ZM41.155,62H22.845a26.264,26.264,0,0,1,7.279-2.008A1,1,0,0,0,31,59V44h2V59a1,1,0,0,0,.876.992A26.264,26.264,0,0,1,41.155,62Z" />
              <path d="M27,23a3,3,0,1,0,3,3A3,3,0,0,0,27,23Zm0,4a1,1,0,1,1,1-1A1,1,0,0,1,27,27Z" />
              <path d="M38,32a3,3,0,1,0-3,3A3,3,0,0,0,38,32Zm-4,0a1,1,0,1,1,1,1A1,1,0,0,1,34,32Z" />
              <rect x="33" y="24" width="2" height="2" />
              <rect x="28" y="33" width="2" height="2" />
              <rect x="39" y="26" width="2" height="2" />
            </g>
          </svg>

          <span className="first-letter:text-app-flame first-letter:text-[33px] text-app-cadet font-bold font-app-heading text-3xl absolute -bottom-3 left-[10px] cursor-pointer basic-transition group-hover:text-app-flame group-hover:text-[31px] group-hover:left-6">
            Cocktails
          </span>
        </Link>
      </div>
      <nav className="flex justify-center">
        <ul className="flex justify-center gap-5">
          {Menu.map((item, index) => (
            <li key={index} className="font-app-text text-lg font-bold">
              <NavLink
                to={item.link}
                className={({ isActive }) =>
                  isActive
                    ? "text-app-flame double-transition"
                    : "text-app-cadet hover:text-app-flame basic-transition"
                }
              >
                {item.menu}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex gap-4 h-8 justify-center items-center">
        <div className="h-8 w-8 relative group cursor-pointer">
          <svg
            className="drop-shadow-lg fill-app-cadet group-hover:fill-app-flame stroke-app-cadet basic-transition group-hover:stroke-app-flame group-hover:animate-expand svg-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          <div className="w-8 h-8 flex justify-center items-center absolute top-0 left-0">
            <span className="text-white text-center text-[9px] font-app-main group-hover:tracking-widest basic-transition">0</span>
          </div>
        </div>
        <div className="h-8 w-8">
          <svg
            className="drop-shadow-lg stroke-app-cadet basic-transition hover:stroke-app-flame hover:animate-expand cursor-pointer svg-icon"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </header>
  );
};

export default Header;
