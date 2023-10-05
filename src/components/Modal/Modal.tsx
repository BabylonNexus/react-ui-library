import React from "react";
import { ModalProps } from "./Modal.types";
import { styled } from "styled-components";
import Card from "../Card";
import classNames from "classnames";


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

const Modal = React.forwardRef<HTMLElement, ModalProps>((props: ModalProps, ref: any) => {
    const { children, isOpen, className, ...rest } = props

    return <>
        {isOpen && <ModalWrapper {...rest} ref={ref} className={classNames(className, "modal-overlay")}>
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </ModalWrapper>}
    </>
})

export default Modal;