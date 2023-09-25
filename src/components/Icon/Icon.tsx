import React from 'react'
import { IconProps, IconType, IconTypeEnum } from './Icon.types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'


const Icon = React.forwardRef<HTMLElement, IconProps>((props: IconProps, ref: any) => {

    const { type, icon, color, className, style, ...rest } = props
    switch (type) {
        case IconTypeEnum.FontAwesome:
            return <FontAwesomeIcon {...rest} icon={icon ?? faBan} color={color} className={className} style={style} ref={ref} />
    }

})

export default Icon