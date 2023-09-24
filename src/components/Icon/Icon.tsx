import React from 'react'
import { IconProps, IconType } from './Icon.types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBan } from '@fortawesome/free-solid-svg-icons'


const Icon = React.forwardRef<HTMLElement, IconProps>((props: IconProps, ref: any) => {

    const { type, icon, color, className, style } = props
    switch (type) {
        case IconType.FontAwesome:
            return <FontAwesomeIcon {...props} icon={icon ?? faBan} color={color} className={className} style={style} ref={ref} />
    }

})

export default Icon