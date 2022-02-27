import { useState, useEffect } from "react";
import { ModalProps } from "../../Hooks/types";
import {SModal} from "./styles";

export function Modal({ isOpen, setIsOpen, children }: ModalProps) {
    const [modalStatus, setModalStatus] = useState(isOpen);
    useEffect(() => {
    setModalStatus(isOpen);
    }, [isOpen]);

    const overlayModal = {
        overlay: {
            backgroundColor: "#121214e6",
        }
    }

    return (
    <SModal
        shouldCloseOnOverlayClick={!false}
        onRequestClose={setIsOpen}
        isOpen={modalStatus}
        ariaHideApp={false}
        style={overlayModal}
        >
        {children}
        </SModal>
    );
}