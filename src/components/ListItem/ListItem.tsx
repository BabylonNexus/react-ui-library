import React from 'react'
import { ListItemProps } from './ListItem.types'
import { styled } from 'styled-components'
import Icon from '../Icon'
import classNames from 'classnames'



const ListItemWrapper = styled.li`

    width: 100%;
    display: inline-block;
    padding: 0.5rem 0rem;
    color:var(--text-color);
    &::marker{
        content: "";
    }
   
    border-radius: 0.2rem;
    transition: all 0.15s ease-in-out;

    &:hover{
         cursor: pointer;
         background-color: var(--list-item-hover-color); 
    }


    
`

const ContentWrapper = styled.span<any>`
    display: flex;
    font-weight: bold;
    font-size: 1.1em;
    transition: all 0.15s ease-in-out;
    color: inherit; 
    text-decoration: inherit; 
`

const IconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
     flex:1;
`

const IconWrapper = styled(Icon)`
    width: 20px;
`
const Span = styled.span`
    flex:3;
`

const ListItem = React.forwardRef<HTMLElement, ListItemProps>((props: ListItemProps, ref: any) => {
    const { children, icon, as, href, target, ...rest } = props

    return <ListItemWrapper {...rest} ref={ref} >
        <ContentWrapper className={classNames('list-item-content', icon && 'with-icon')} as={as || 'span'} href={href} target={target}>
            <IconContainer>
                {icon && <IconWrapper {...icon} />}
            </IconContainer>
            <Span>{children}</Span></ContentWrapper>
    </ListItemWrapper>

})

export default ListItem