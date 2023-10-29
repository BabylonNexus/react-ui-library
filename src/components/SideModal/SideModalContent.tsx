import React from 'react'
import { styled } from 'styled-components'

const Wrapper = styled.div`
    flex: 1 0 auto;
    padding: 1rem;
`

export default function SideModalContent({ children }: any) {
    return (
        <Wrapper className='side-modal-content'>{children}</Wrapper>
    )
}
