import React, { useState } from "react";
import { ModalProps } from "./Modal.types";
import { styled } from "styled-components";
import Card from "../Card";
import Icon from "../Icon";
import classNames from "classnames";
import { faX } from "@fortawesome/free-solid-svg-icons";

const ModalWrapper = styled.div`
   background-color: rgba(0, 0, 0, 0.2);
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
`

const ContentWrapper = styled(Card)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10001;
    background-color: var(--modal-bg-color);
`

const CloseButton = styled.button`
    position: absolute;
    top:10px;
    right: 10px;
    font-size: 0.8em;
    background-color: var(--modal-close-buton-bg);
    height: 25px;
    width: 25px;
    border: none;
    border-radius: 50%;
    z-index: 100;

    transition: all 0.3s ease-in-out;

    &:hover{
        cursor: pointer;
        filter: brightness(1.1);
    }
`

const StyledIcon = styled(Icon)`
    color:var(--modal-close-icon-color);
`

const Modal = React.forwardRef<HTMLElement, ModalProps>((props: ModalProps, ref: any) => {
    const { children, isOpen, className, showCloseBtn, onClose, ...rest } = props

    const closeModal = (e: any) => {
        onClose && onClose()
    }

    return <>
        {isOpen && <ModalWrapper {...rest} ref={ref} className={classNames(className, "modal-overlay")}>
            <ContentWrapper className="modal-content">
                {showCloseBtn && <CloseButton role="button" aria-label="close" className="close-btn" onClick={closeModal}>
                    <StyledIcon type="fontawesome" icon={faX} />
                </CloseButton>}
                {children}
            </ContentWrapper>
        </ModalWrapper>}
    </>
})

export default Modal;