import styled from "styled-components";
import ReactModal from "react-modal";

export const SModal = styled(ReactModal)`
    &.ReactModal__Content {
        position: absolute;
        top: 50%;
        left: 50%;
        right: auto;
        bottom: auto;
        margin-right: -50%;
        transform: translate(-50%, -50%);
        background: #F0F0F5;
        color: #000000;
        border-radius: 8px;
        width: 100%;
        max-width: 736px;
        border: none;
    };
`
