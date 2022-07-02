import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { MdClose } from "react-icons/md";

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
    <>
      <div className="fixed inset-0 bg-app-cadet/[0.65] backdrop-blur-sm z-[100]" />
      <div className="fixed inset-0 flex justify-center items-center p-4 md:p-6 z-[150]">
        <div className="bg-app-bg rounded-lg drop-shadow-lg p-2 md:p-4 w-auto h-auto relative">
          {children}
          <div
            onClick={onCloseModal}
            className="rounded-full p-1 bg-white ring-2 ring-app-flame absolute drop-shadow-md -top-2 -right-2 cursor-pointer group md:hover:bg-app-flame basic-transition"
          >
            <MdClose className="h-4 w-4 text-app-flame group-hover:text-white group-hover:animate-expand basic-transition" />
          </div>
        </div>
      </div>
    </>,
    document.getElementById("portal")
  );
};

export default Modal;
