import React from 'react'
import { styled } from 'styled-components'


const Wrapper = styled.div`
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    min-height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem;
    position: absolute;
    bottom: 0;
    width: 100%;
    z-index: 30;
    background-color: #ffff;
`

export default function SideModalFooter({ children }: any) {
    return (
        <Wrapper className='side-modal-footer'>{children}</Wrapper>
    )
}
