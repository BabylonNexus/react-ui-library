import React from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.div`
    padding: 1rem;
    position: absolute;
    top: 70px;
    left: 0;
    overflow: auto;
    width: 90%;
    max-height: calc(100% - 190px);

`

export default function SideModalContent({ children }: any) {
    return (
        <Wrapper className='side-modal-content'>{children}</Wrapper>
    )
}
