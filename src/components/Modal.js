import React from "react";
import { MdClose } from "react-icons/md";

const Modal = ({ children, onCloseModal }) => {
  return (
    <div className="fixed inset-0 bg-app-cadet/30 backdrop-blur-sm flex justify-center items-center">
      <div className="bg-white rounded-lg drop-shadow-lg p-4 w-auto h-auto relative">
        {children}
        <div
          onClick={() => onCloseModal()}
          className="rounded-full p-1 bg-white ring-2 ring-app-flame absolute drop-shadow-md -top-2 -right-2 cursor-pointer group hover:bg-app-flame basic-transition"
        >
          <MdClose className="h-4 w-4 text-app-flame group-hover:text-white group-hover:animate-expand basic-transition" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
