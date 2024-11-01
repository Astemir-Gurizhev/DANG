import React, { ReactNode, useEffect } from "react";
import { createPortal } from "react-dom";
import cn from "./Modal.module.css";

interface ModalProps {
  children: ReactNode;
  toggleMenu: () => void;
}

const modalElement = document.getElementById("modal");

const Modal: React.FC<ModalProps> = ({ children, toggleMenu }) => {
  useEffect(() => {
    
    document.body.style.overflow = "hidden";
    
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return modalElement
    ? createPortal(
        <div className={cn.overlay} onClick={toggleMenu}>
          <div className={cn.content} onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>,
        modalElement
      )
    : null;
};

export default Modal;