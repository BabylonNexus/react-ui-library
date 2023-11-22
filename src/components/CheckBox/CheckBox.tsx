import React, { useMemo } from 'react'
import { CheckBoxProps } from './CheckBox.types';
import { styled } from 'styled-components';
import { useState } from 'react';
import classNames from 'classnames';


const Container = styled.div`
     &.disabled{
    pointer-events: none;
    opacity: 0.6;
  }
`

const Label = styled.label<any>`
    margin-left: 0.5rem;
    font-weight: bold;
    cursor: pointer;
    &:after{
        content: ${(props) => (!props.$hasvalue && props.$isrequired ? "'*'" : "")};
        color:var(--input-asterisk-color);
 }
`
const Description = styled.span`
    display: flex;
    flex-grow: 1;
    font-size:0.9em;
    font-weight: bold;
    margin-right: 1rem;
`


const InfoContainer = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 0.2rem;
    margin-left: 0.2rem;
    align-items: center;
`

const InputContainer = styled.div`
    display: flex;
    align-items: center;
`

const ErrorMsg = styled.span`
   display: flex;
    flex-grow: 1;
    font-size:0.9em;
    font-weight: bold;
    margin-right: 1rem;
    color:var(--input-error-color);
`


const CheckBoxWrapper = styled.input`
    width: 25px;
    height: 25px;
    cursor: pointer;
    accent-color: var(--checkbox-accent-color);
    
    transition: 0.15s ease-in-out;
    
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    
     &:hover{
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }

`

const CheckBox = React.forwardRef<HTMLElement, CheckBoxProps>((props: CheckBoxProps, ref: any) => {

    const { className, label, name, onChange, errorMsg, description, disabled, required, checked, ...rest } = props

    const [value, setValue] = useState<boolean>(checked ?? false)

    const change = (e: any) => {
        setValue(prev => !prev)
        onChange && onChange(e)
    }

    const idRef = useMemo(() => `checkbox-input-${Math.random().toString(36).substr(2, 9)}`, [])

    return <Container {...rest} className={classNames(className, "input-group", disabled && "disabled")} ref={ref}>
        <InputContainer className="input-wrapper">
            <CheckBoxWrapper id={idRef} name={name} className={classNames("checkbox-input")} type="checkbox" aria-invalid={!!errorMsg} checked={value} onChange={change} aria-checked={value} aria-disabled={disabled} disabled={disabled} />
            {label && <Label className='checkbox-input-label' $hasvalue={checked} $isrequired={required} htmlFor={idRef}>{label}</Label>}
        </InputContainer>
        {(description || errorMsg) ? <InfoContainer className="info-container">
            {description && !errorMsg && <Description className="info-description">{description}</Description>}
            {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
        </InfoContainer> : null}
    </Container>
})

export default CheckBox;