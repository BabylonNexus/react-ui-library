import React from 'react'
import { styled } from 'styled-components'
import { SideModalHeaderProps } from './SideModal.types'

const Wrapper = styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
`

const CloseButtonWrapper = styled.button`
    margin-right: 0.5rem;
    padding: 0.3;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
    transition: .15s ease-in-out;
    border-radius: 50%;
    font-size: 1.3rem;
    color:var(--modal-close-icon-color);
    &:hover{
        background-color: var(--modal-close-buton-bg)
    }
`

const HeaderTitle = styled.h2`
    font-size: 1.2em;
`


const SideModalHeader = (props: SideModalHeaderProps) => {

    const { children, onClose, closeBtn } = props
    return (
        <Wrapper className="side-modal-header"><HeaderTitle className='side-modal-header-title'>{children}</HeaderTitle> {closeBtn && <CloseButtonWrapper className="side-modal-close-button" onClick={(e) => onClose && onClose(e)} type="button" aria-label="Close Side Modal Window" title="Close">&#10006;</CloseButtonWrapper>}</Wrapper>
    )
}

SideModalHeader.displayName = "SideModalHeader"

export default SideModalHeader