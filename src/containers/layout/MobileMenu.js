import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router-dom";
import {
  closeIconAnimate,
  fromBelow,
  menuFromLeft,
  menuFromRight,
  mobileMenu,
} from "../../app/utils/animationsHelper";
import { Menu } from "../../app/utils/data";
import { ImGlass, ImGlass2, ImMug } from "react-icons/im";
import useWindowSize from "../../hooks/useWindowSize";

const MobileMenu = ({ onClose, show }) => {
  const navigate = useNavigate();
  const size = useWindowSize();

  const navigateRoute = (route) => {
    navigate(route);
    onClose();
  };
  return ReactDOM.createPortal(
    <AnimatePresence exitBeforeEnter>
      {show && (
        <motion.div
          key="mobile"
          variants={mobileMenu}
          initial="initial"
          animate="animate"
          exit="exit"
          className="fixed inset-0 bg-app-cadet backdrop-blur-sm z-[100]"
        >
          <div className="w-full h-full relative">
            <ul className="w-full h-full flex flex-col justify-center items-center gap-6">
              {Menu.map((item, index) => (
                <motion.li
                  key={index}
                  variants={index % 2 === 0 ? menuFromLeft : menuFromRight}
                  initial="initial"
                  animate="animate"
                  onClick={() => navigateRoute(item.link)}
                  className="font-app-text text-xl text-white basic-transition cursor-pointer"
                >
                  {item.menu}
                </motion.li>
              ))}
            </ul>
            <motion.div
              variants={fromBelow}
              initial="initial"
              animate="animate"
              transition={{
                ease: "easeInOut",
                duration: 0.5,
                delay: 1.2,
              }}
              className="w-full flex justify-center py-1 absolute bottom-0"
            >
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
            </motion.div>
            <motion.div
              variants={closeIconAnimate}
              initial="initial"
              animate="animate"
              onClick={() => onClose()}
              className="h-6 w-6 md:h-8 md:w-8 absolute top-4 left-4 active:scale-95"
            >
              <svg
                className="drop-shadow-lg stroke-app-flame basic-transition md:hover:stroke-app-white animate-expand cursor-pointer"
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
            </motion.div>
            <motion.div
              animate={{
                x: [0, (-1.1 * size.width) / 2, -1.3 * size.width],
                y: [0, (-1.3 * size.height) / 2, 0],
                rotate: [25, 270, 0],
              }}
              transition={{ repeat: Infinity, duration: 30 }}
              className="text-white/[0.15] absolute -bottom-8 -right-8"
            >
              <ImGlass className="w-14 h-14" />
            </motion.div>
            <motion.div
              animate={{
                x: [0, (1.1 * size.width * 0.5), (1.3 * size.width)],
                y: [0, (-1.2 * size.height) /3 , (-1.3 * size.height)],
                rotate: [45, 270, 0],
              }}
              transition={{ repeat: Infinity, duration: 20, delay: 3 }}
              className="text-white/[0.15] absolute -bottom-24 -left-20"
            >
              <ImGlass2 className="w-16 h-16" />
            </motion.div>
            <motion.div
              animate={{
                x: [0, (1.1 * size.width * 0.8), (2 * size.width)],
                y: [0, (1.2 * size.height) / 4, (1.1 * size.height) / 2],
                rotate: [180, 270, 0],
              }}
              transition={{ repeat: Infinity, duration: 25, delay: 6 }}
              className="text-white/[0.15] absolute -top-24 -left-64"
            >
              <ImMug className="w-10 h-10" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.getElementById("portal")
  );
};

export default MobileMenu;
