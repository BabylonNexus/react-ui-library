import React from 'react'
import { styled } from 'styled-components'
import { ContainerProps } from './Container.types'
import classNames from 'classnames'



const ContainerWrapper = styled.div`
  
`

const Container = React.forwardRef<HTMLElement, ContainerProps>((props: ContainerProps, ref: any) => {

    const { size, className, ...rest } = props

    return <ContainerWrapper {...rest} className={classNames(className, size ? `container-${size}` : 'container')}></ContainerWrapper>

})

export default Container