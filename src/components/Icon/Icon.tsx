import React from 'react'
import { IconProps, IconType, IconTypeEnum } from './Icon.types'
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'


const Icon = React.forwardRef<HTMLElement, IconProps>((props: IconProps, ref: any) => {

    const { type, icon, color, ...rest } = props
    switch (type) {
        case IconTypeEnum.FontAwesome:
            return <FontAwesomeIcon {...rest as FontAwesomeIconProps} icon={icon ?? faBan} color={color} ref={ref} />
    }

})

export default Icon