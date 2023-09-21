import React from 'react'
// import { ButtonProps } from 'react-bootstrap'
import { ButtonProps, ButtonType } from './Button.types'
import classNames from 'classnames'
import { Variant } from '../types'
import styled from 'styled-components'


const ButtonWraper = styled.button`
    min-width:150px;
    display: inline-block;
    font-weight: bold;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    padding: 0.5rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out,
    filter .15s ease-in-out;

    &:hover{
        cursor:pointer;
        filter:brightness(0.9)
    }
`

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref: any) => {

    const { role, children, className, variant, outlined } = props

    return (

        <ButtonWraper role={role} {...props} className={classNames(
            className,
            `btn-${variant || Variant.Primary}`,
            outlined && `btn-outlined-${variant || Variant.Primary}`)} ref={ref}>
            {children}
        </ButtonWraper>

    )
})

export default Button