import React from 'react'
import { LoadingSpinnerProps } from './LoadingSpinnert.types'
import { styled } from 'styled-components'

const Wrapper = styled.div`
        width:100%;
        height:100%;
        display:flex;
        align-items:center;
        justify-content:center;
`
const Spinner = styled.div<{ $size: string }>`
    transform: translate(0%, -150%);
    color: var(--loading-spinner-default-color);
    font-size: ${props => props.$size};
    text-indent: -9999em;
    animation-delay: -0.16s;
    border-radius: 50%;
    width: 1.5em;
    height: 1.5em;
    animation-fill-mode: both;
    animation: bblFadInOut 1.8s infinite ease-in-out;
    -webkit-animation: bblFadInOut 1.8s infinite ease-in-out;

    &:before, &:after{
        content: '';
        position: absolute;
        top: 0;
        border-radius: 50%;
        width: 1.5em;
        height: 1.5em;
        animation-fill-mode: both;
        animation: bblFadInOut 1.8s infinite ease-in-out;
        -webkit-animation: bblFadInOut 1.8s infinite ease-in-out;
    }

    &:before{
        left: -3.5em;
        animation-delay: -0.32s;
    }
    

    &:after{
        left: 3.5em;
    }


    @keyframes bblFadInOut {

    0%,
    80%,
    100% {
        box-shadow: 0 2.5em 0 -1.3em
    }

    40% {
        box-shadow: 0 2.5em 0 0
    }
}
`


const LoadingSpinner = React.forwardRef<HTMLElement, LoadingSpinnerProps>((props: LoadingSpinnerProps, ref: any) => {
    const { className, style, color, fontSize } = props

    const styles = {
        ...style,
        color,

    }

    return <Wrapper>
        <Spinner $size={fontSize && fontSize.length > 0 ? fontSize : "7px"} ref={ref} style={styles} className={className}></Spinner>
    </Wrapper>

})

export default LoadingSpinner