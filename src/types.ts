import { ReactNode } from "react";


export interface ModalProps {
    isOpen: boolean;
    setIsOpen: () => void;
    children: ReactNode;
  }