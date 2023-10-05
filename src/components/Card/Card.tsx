import React from 'react'

import { styled } from 'styled-components'
import { CardProps } from './Card.types'



const CardWrapper = styled.div`
    padding: 1rem;
    min-width: 100px;
    min-height: 100px;
    max-width: fit-content;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    background-color: var(--card-bg-color);
    border:1px solid var(--card-border-color);

    &:hover{
        cursor: pointer;
    }

    border-radius: 0.3rem;
`

const Card = React.forwardRef<HTMLElement, CardProps>((props: CardProps, ref: any) => {

    const { children, ...rest } = props

    return <CardWrapper {...rest} ref={ref}>{children}</CardWrapper>

})

export default Card