import React, { useEffect, useImperativeHandle, useRef, useState } from "react"
import { SideModalProps } from "./SideModal.types"
import { keyframes, styled } from "styled-components"
import SideModalHeader from "./SideModalHeader"
import classNames from "classnames"
import SideModalFooter from "./SideModalFooter"
import SideModalContent from "./SideModalContent"


const fadeIn = keyframes`
    0%{
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const fadeOut = keyframes`
    0%{
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`


const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.3);
  width: 100vw;
  height: 100vh;
  z-index: 10000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: fixed;
  animation: ${fadeIn} .5s ease-in-out;

  &.fade-out{
      animation: ${fadeOut} .5s ease-in-out;
  }
`

const slideIn = keyframes`
    0%{
        transform: translateX(100%);
    }
    100% {
         transform: translateX(0%);
    }
`

const slideOut = keyframes`
    0%{
        transform: translateX(0%);
    }
    100% {
         transform: translateX(100%);
    }
`

const ContentWraper = styled.div<{ $width: string }>`
  background-color: var(--modal-bg-color);
  width: ${props => props.$width};
  height: 100vh;
  z-index: 10001;
  top: 0%;
  right: 0;
  transform: translateX(0%);
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
  position: absolute;
  display: flex;
  flex-direction: column;
  animation: ${slideIn} .5s ease-in-out;


  &.slide-out{
     animation: ${slideOut} .5s ease-in-out;
  }
 
`



const SideModal = React.forwardRef<HTMLElement, SideModalProps>((props: SideModalProps, ref: any) => {
    const { children, isOpen, staticBackdrop = false, width = "300px", className, onClose, beforeOpen, ...rest } = props

    const [isClosing, setIsClosing] = useState(false)
    const contentRef: any = useRef(null)



    const closeModal = () => {

        setIsClosing(true)

        setTimeout(() => {
            setIsClosing(false)
            onClose && onClose()
        }, 500)

    }

    const modifiedChildren = (children: any) => {
        return React.Children.map(children, (child) => {
            const name = child?.type?.displayName;

            if (name === "SideModalHeader") {
                return React.cloneElement(child, {
                    ...child.props,
                    onClose: closeModal
                })
            } else {
                return child
            }
        })
    }


    const handleClickOutside = (e: any) => {
        if (contentRef.current && !contentRef.current?.contains(e.target as Node)) {
            if (!staticBackdrop) {
                closeModal()
            }
        }
    }

    const listenKeyDown = (e: any) => {
        if (!staticBackdrop && (e.code === "Escape" || e.keyCode === 27)) {
            closeModal()
        }
    }
    useEffect(() => {
        document.body.style.overflow = isOpen ? "hidden" : "auto"

        if (isOpen && beforeOpen) {
            beforeOpen()
        }

    }, [isOpen])


    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true)
        document.addEventListener("keydown", listenKeyDown, true)
        return () => {
            document.removeEventListener("click", handleClickOutside, true)
            document.removeEventListener("keydown", listenKeyDown, true)
        }
    }, [])


    useImperativeHandle(ref, () => ({
        close: () => {
            closeModal()
        },
    }));


    return <>
        {isOpen && <ModalWrapper {...rest} ref={ref} className={classNames(className, "slide-modal-backdrop", isClosing && "fade-out")}>
            <ContentWraper ref={contentRef} $width={width} className={classNames("slide-modal", isClosing && "slide-out")}>
                {modifiedChildren(children)}
            </ContentWraper>
        </ModalWrapper>}
    </>
})

export default Object.assign(SideModal, {
    Header: SideModalHeader,
    Content: SideModalContent,
    Footer: SideModalFooter
})