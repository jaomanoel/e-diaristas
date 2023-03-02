import { ListItem } from '@mui/material'
import React from 'react'

export interface CardProps {
    title: string,
    desc: string,
    img: string
}


import { 
    AvatarStyled,
    ListItemTextStyled
} from './Card.style'

import {ListItemAvatar} from '@mui/material'


const Card: React.FC<CardProps> = ({title, desc, img}) => {

    return (
        <>
            <ListItemAvatar>
                <AvatarStyled>
                    <i className={img} />
                </AvatarStyled>
            </ListItemAvatar>

            <ListItemTextStyled primary={title} secondary={desc} />
        </>
    )
}

export default Card;