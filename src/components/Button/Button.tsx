import React from 'react'
import { ButtonProps, ButtonTypeEnum } from './Button.types'
import classNames from 'classnames'
import { Position, Size, Variant } from '../Types/types'
import { styled } from 'styled-components';
import Icon from '../Icon/Icon'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner'


const ButtonWraper = styled.button`
    margin:0.5rem 0rem;
    position:relative;
    min-width:150px;
    display: flex;
    min-height: 48px;
    align-items: center;
    justify-content: center;
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
    line-height: 1.5;
    border-radius: 0.25rem;
    transition: color .15s ease-in-out,
    background-color .15s ease-in-out,
    border-color .15s ease-in-out,
    box-shadow .15s ease-in-out,
    filter .15s ease-in-out;
    font-size:1.1em;

    &:hover{
        cursor:pointer;
        filter:brightness(0.8)
    }

    &.btn-small{
        font-size: 0.9em;
        min-width:130px;
        min-height: 38px;
    }

    &.btn-large{
        font-size:1.3em;
        min-width:170px;
         min-height: 58px;
    }

    &:disabled{
        pointer-events:none;
        opacity:0.5
    }

    &.rounded{
        border-radius:99em;
    }

    &.icon-button{
        padding:0.5rem;
        min-width:unset;
        border-radius:50%;
        width:unset !important;


        &.btn-large{
            padding:0.8rem;
        }

        &.btn-medium{
            padding:0.6rem;
            font-size:1.2em;
        }
         &.btn-small{
            font-size:1.1em;
        }
    }


    &.btn-width-auto{
        width:auto;
    }

    &.btn-width-full{
        width:100%;
    }
    &.btn-width-half{
        width:50%;
    }
`

const IconWrapper = styled.div`
    margin:0rem 0.4rem;

    &.position-left{
        order:1
    }

    &.position-right{
        order:3;
    }
`

const Span = styled.span`
        order:2;
`

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>((props: ButtonProps, ref: any) => {

    const { role, children, className, variant, outlined, icon, iconPosition, size, disabled, isRounded, type, iconButton, isLoading, width, ...rest } = props

    return (

        <ButtonWraper type={type ?? ButtonTypeEnum.Button}{...rest} className={classNames(
            className,
            `btn-${variant || "primary"}`,
            outlined && `btn-outlined-${variant || "primary"}`,
            iconButton && "icon-button",
            `btn-${size || "small"}`,
            `btn-width-${width || "default"}`,
            isRounded && "rounded"
        )} ref={ref} aria-disabled={disabled} aria-role={role ?? "button"}>
            {icon && !isLoading && <IconWrapper className={`position-${iconPosition ?? "left"}`}><Icon {...icon} /></IconWrapper>}
            {!iconButton && (isLoading ? <LoadingSpinner /> : <Span>{children}</Span>)}
        </ButtonWraper>

    )
})

export default Button