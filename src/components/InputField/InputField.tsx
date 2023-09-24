import React, { useRef, useState } from "react"
import { InputFieldProps } from "./InputField.types"
import { styled } from 'styled-components';
import Icon from "../Icon/Icon";
import classNames from "classnames";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { IconType } from "../Icon";


const Container = styled.div`
  display: inline-block;
  width: 100%;
    
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
        background-color:var(--light);
        min-width:235px;
        font-weight:600;
        border:1px solid var(--dark);
        outline:none;
        &:hover{
            cursor:pointer;
              border:1px solid var(--accent);
        }
        transition:all 0.15s ease-in-out;

        +label{
            left:0px;
        }

        &.with-icon{
            padding-inline-start: 2.5rem;
            min-width: 180px;
           

            +label{
                left:25px;
            }
        }

        &:focus + label, &:not(:placeholder-shown) + label{
            font-size: 12px;
            top: -13px;
            &.with-icon{
                left:23px;
            }
            
        } 
`

const IconWrapper = styled(Icon)`
    position: absolute;
    top:13px;
    left:10px;
    font-size: 1.4em;
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
  top: ${(props) => (props.hasValue ? "-13px" : "0")};
  font-weight: bold;
  padding: 14px;
  font-size: ${(props) => (props.hasValue ? "12px" : "18px")};
  color: grey;
  transition: 0.15s ease-in-out all;
  pointer-events: none;
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
    color:var(--danger);
`


const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>((props: InputFieldProps, ref: any) => {

    const { icon, errorMsg, maxLength, placeholder, description, className, onChange, value, type = "text" } = props

    const eraseIcon = { type: IconType.FontAwesome, icon: faXmark, onClick: (e: any) => setValue(""), className: 'erase-icon' }

    const inputRef = useRef<HTMLInputElement>(null);

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
    return (
        <Container ref={ref} className="input-group">
            <InputContainer className="input-wrapper">
                {icon && <IconWrapper {...icon} className={classNames(icon.className, 'icon-prepend')} />}
                <InputWrapper {...props} ref={inputRef} className={classNames(className, 'input-field', icon && "with-icon")} placeholder="" onChange={change} value={val} type={type} />
                {placeholder && <Label hasValue={!!val} className='input-placeholder'>{placeholder}</Label>}
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

