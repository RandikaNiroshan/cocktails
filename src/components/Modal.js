import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";
import { modalAnimation, modalBackDrop } from "../app/utils/animationsHelper";

const Modal = ({ children, onCloseModal, show = false }) => {
  useEffect(() => {
    if (show) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [show]);

  return ReactDOM.createPortal(
    <AnimatePresence exitBeforeEnter>
      {show && (
        <>
          <motion.div
            key="modal-backdrop"
            variants={modalBackDrop}
            initial="initial"
            animate="animate"
            exit="initial"
            transition={{ ease: "easeInOut", duration: 0.3, delay: 0.1 }}
            className="fixed inset-0 bg-app-cadet/[0.65] backdrop-blur-sm z-[100]"
          />
          <motion.div
            key="modal-bg"
            variants={modalAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            className="fixed inset-0 flex justify-center items-center p-4 md:p-6 z-[150]"
          >
            <div className="bg-app-bg rounded-lg drop-shadow-lg p-2 md:p-4 w-auto h-auto relative">
              {children}
              <div
                onClick={onCloseModal}
                className="rounded-full p-1 bg-white ring-2 ring-app-flame absolute drop-shadow-md -top-2 -right-2 cursor-pointer group md:hover:bg-app-flame basic-transition active:scale-95"
              >
                <MdClose className="h-4 w-4 text-app-flame group-hover:text-white group-hover:animate-expand basic-transition" />
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.getElementById("portal")
  );
};

export default Modal;
