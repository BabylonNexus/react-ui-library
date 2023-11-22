import React, { useState } from "react"
import { TextAreaProps } from "./TextArea.types"
import { styled } from "styled-components"
import classNames from "classnames"
import Icon from "../Icon"

const Container = styled.div`
  display: inline-block;
  width: 100%;
  margin:0.5rem 0rem;


  &.disabled{
    pointer-events: none;
    opacity: 0.6;
  }
    
`

const IconWrapper = styled(Icon)`
    position: absolute;
    top:20px;
    left:10px;
    font-size: 1.4em;
    color:var(--input-icon-color);
     transition: 0.15s ease-in-out all;
`


const InputContainer = styled.div`
    width: 100%;
    display: inline-block;
    position: relative;

`

const TextAreaInput = styled.textarea`
        width: 100%;
        box-sizing: border-box;
        padding: 1.7rem 0.5rem;
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

        ~label{
            left:0px;
        }

        &.with-icon{
            padding-inline-start: 0.5rem;
            min-width: 180px;

            ~label{
                left:20px;
            }
        }


        &:focus + .icon-prepend,  &:not(:placeholder-shown) ~ .icon-prepend{
               top: 2px;
        }


        &:focus ~ label, &:not(:placeholder-shown) ~ label{
            font-size: 15px;
            top: -10px;
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

`
const Label = styled.label<any>`
  position: absolute;
  top: ${(props) => (props.$hasvalue ? "-13px" : "8px")};
  left: 20px;
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


const TextArea = React.forwardRef<HTMLElement, TextAreaProps>((props: TextAreaProps, ref: any) => {

    const { className, icon, disabled, rows, cols, value, name, errorMsg, maxLength, description, placeholder, onChange, required, ...rest } = props

    const [val, setValue] = useState<any>(value ?? "")


    const change = (e: any) => {
        setValue(e.target.value)
        onChange && onChange(e)
    }


    const getMaxLengthMsg = () => {
        if (val) {
            return `${val.length}/${maxLength}`
        }
    }

    return <Container ref={ref} className={classNames(className, "input-group", disabled && 'disabled')}>
        <InputContainer className="input-wrapper">
            <TextAreaInput {...rest} rows={rows} cols={cols} name={name} className={classNames('input-textarea', icon && "with-icon",)} placeholder="" value={val} onChange={change} maxLength={maxLength} />
            {icon && <IconWrapper {...icon} className={classNames(icon.className, 'icon-prepend')} />}
            {placeholder && <Label htmlFor={name} $hasvalue={!!val} $isrequired={required} className='input-placeholder'>{placeholder}</Label>}
        </InputContainer>
        {(description || maxLength || errorMsg) ? <InfoContainer className="info-container">
            {description && !errorMsg && <Description className="info-description">{description}</Description>}
            {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
            {maxLength && <MaxLengthMsg className={classNames('max-length', maxLength === val.length && 'is-max',)}>{getMaxLengthMsg()}</MaxLengthMsg>}
        </InfoContainer> : null}
    </Container>

})

export default TextArea