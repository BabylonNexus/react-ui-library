import React from "react"
import { InputFieldProps } from "./InputField.types"
import { styled } from 'styled-components';



const InputWrapper = styled.input`
        // padding:1rem 2.5rem 0rem 1rem;
        padding:0.8rem;
        height:35px;
        border-radius:0.3rem;
        background-color:var(--light);
        min-width:180px;
        font-weight:600;
        border:1px solid var(--dark);
        outline:none;
        &:hover{
            cursor:pointer;
              border:1px solid var(--accent);
        }
        transition:all 0.15s ease-in-out;
`


const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>((props: InputFieldProps, ref: any) => {

    return <InputWrapper {...props} ref={ref} />
})

export default InputField

