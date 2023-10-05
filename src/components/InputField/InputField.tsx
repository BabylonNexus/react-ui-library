import React, { useEffect, useRef, useState } from "react"
import { InputFieldProps } from "./InputField.types"
import { styled } from 'styled-components';
import Icon from "../Icon/Icon";
import classNames from "classnames";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconTypeEnum } from "../Icon/Icon.types";


const Container = styled.div`
  display: inline-block;
  width: 100%;
  margin:0.5rem 0rem;


  &.disabled{
    pointer-events: none;
    opacity: 0.6;
  }
    
`

const InputContainer = styled.div`
    width: 100%;
    display: inline-block;
    position: relative;

`

const InputWrapper = styled.input`
        width: 100%;
        box-sizing: border-box;
        padding: 0.8rem;
        padding-inline-end: 2rem;
        font-size: 1.1em;
        border-radius:0.3rem;
        background-color: var(--input-bg-color);
        min-width:235px;
        font-weight:600;
        border:1px solid var(--input-border-color);
        color:var(--input-color);
        outline:none;
        &:hover{
            cursor:pointer;
              border:1px solid var(--input-hover-color);
        }

        &:focus{
            border-color:var(--input-focus-color);
            box-shadow:0 0 0 0.1rem var(--input-focus-color);
            outline:none;
        }
        transition:all 0.15s ease-in-out;

        +label{
            left:0px;
        }

        &.with-icon{
            padding-inline-start: 2.8rem;
            min-width: 180px;
           

            +label{
                left:32px;
            }
        }

        &:focus + label, &:not(:placeholder-shown) + label{
            font-size: 12px;
            top: -13px;
            &.with-icon{
                left:23px;
            }
            
        }
        
        &.invalid{
            border-color:var(--input-error-color);
            
            &:focus{
                box-shadow:0 0 0 0.1rem var(--input-error-color);
            }
        }

        &.rounded{
            border-radius: 99em;
        }
`

const IconWrapper = styled(Icon)`
    position: absolute;
    top:13px;
    left:10px;
    font-size: 1.4em;
    color:var(--input-icon-color);
`


const EraseIcon = styled(Icon)`
    position: absolute;
    top:13px;
    right: 10px;
     font-size: 1.2em;

     &:hover{
        cursor: pointer;
     }
`


const Label = styled.label<any>`
  position: absolute;
  top: ${(props) => (props.$hasvalue ? "-13px" : "0")};
 // font-weight: bold;
  padding: 14px;
  font-size: ${(props) => (props.$hasvalue ? "12px" : "18px")};
  color: var(--input-placeholder-color);
  transition: 0.15s ease-in-out all;
  pointer-events: none;

  &:after{
    content: ${(props) => (!props.$hasvalue && props.$isrequired ? "'*'" : "")};
    color:var(--input-asterisk-color);
  }
`


const InfoContainer = styled.div`
    display: flex;
   justify-content: space-between;
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    align-items: center;
`


const Description = styled.span`
    display: flex;
    flex-grow: 1;
    font-size:0.9em;
    font-weight: bold;
    margin-right: 1rem;
   
`

const MaxLengthMsg = styled.span`
    &.is-max{
        font-weight: bold;
    }
`

const ErrorMsg = styled.span`
   display: flex;
    flex-grow: 1;
    font-size:0.9em;
    font-weight: bold;
    margin-right: 1rem;
    color:var(--input-error-color);
`

const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>((props: InputFieldProps, ref: any) => {

    const { icon, isRounded, errorMsg, maxLength, placeholder, description, className, onChange, name, value, type = "text", required, disabled, onReset, ...rest } = props

    const [val, setValue] = useState<any>(value ?? "")

    const change = (e: any) => {
        setValue(e.target.value)
        onChange && onChange(e)
    }

    const cleanInput = (e: any) => {
        setValue("")
        onReset && onReset()
    }

    const getMaxLengthMsg = () => {
        if (val) {
            return `${val.length}/${maxLength}`
        }
    }

    const inputRef = useRef<any>(null)

    const listenForErase = (e: any) => {

        if ((e.keyCode === 27 || e.key === "Escape") && document.activeElement === e.srcElement) {
            cleanInput(e)
        }

    }

    useEffect(() => {

        if (inputRef && inputRef.current) {
            const input = inputRef.current
            input.addEventListener("keydown", listenForErase)
        }

        return () => inputRef?.current?.removeEventListener("keydown", listenForErase)
    }, [])

    const eraseIcon = { type: IconTypeEnum.FontAwesome, icon: faXmark, onClick: cleanInput, className: 'erase-icon' }

    return (
        <Container ref={ref} className={classNames(className, "input-group", disabled && 'disabled')}>
            <InputContainer className="input-wrapper">
                {icon && <IconWrapper {...icon} className={classNames(icon.className, 'icon-prepend')} />}
                <InputWrapper {...rest} ref={inputRef} name={name} className={classNames('input-field', icon && "with-icon", errorMsg && "invalid", isRounded && 'rounded')} placeholder="" onChange={change} value={val} type={type} maxLength={maxLength} />
                {placeholder && <Label htmlFor={name} $hasvalue={!!val} $isrequired={required} className='input-placeholder'>{placeholder}</Label>}
                {(val && type !== "number") && <EraseIcon {...eraseIcon} />}
            </InputContainer>
            {(description || maxLength || errorMsg) ? <InfoContainer className="info-container">
                {description && !errorMsg && <Description className="info-description">{description}</Description>}
                {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
                {maxLength && type !== "number" && <MaxLengthMsg className={classNames('max-length', maxLength === val.length && 'is-max',)}>{getMaxLengthMsg()}</MaxLengthMsg>}
            </InfoContainer> : null}
        </Container>
    )
})

export default InputField


