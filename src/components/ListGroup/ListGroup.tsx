import React from 'react'

import { styled } from 'styled-components'
import { ListGroupProps } from './ListGroup.types'


const Wrapper = styled.ul`
    margin: 0;
    list-style-type: none;
    padding: 0.5rem;
`

const ListGroup = React.forwardRef<HTMLElement, ListGroupProps>((props: ListGroupProps, ref: any) => {
    return <Wrapper {...props} ref={ref}></Wrapper>

})

export default ListGroup