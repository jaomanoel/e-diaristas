import React from 'react';
import { SystemProps } from '@mui/system';

import { 
    UserInformationContainer,
    UserName,
    UserDescription,
    UserAvatar,
    UserRating
} from './UserInformation.style';

export interface UserInformationProps { 
    name: string;
    description?: string;
    picture: string;
    rating: number;
    sx?: SystemProps;
    isRating?: boolean;
}

const UserInformation: React.FC<UserInformationProps> = ({
    name,
    description,
    picture,
    rating,
    sx,
    isRating
}) => {
    return (
        <UserInformationContainer sx={sx} isRating={isRating}>
            <UserAvatar src={picture}>{name[0]}</UserAvatar>
            <UserRating value={rating} readOnly />
            <UserName>{name}</UserName>
            {description && (
                <UserDescription>{description}</UserDescription>
            )}
        </UserInformationContainer>
    )
};

export default UserInformation;