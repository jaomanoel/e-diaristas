import { styled, Container } from "@mui/material";

import LivingRoom from '../../../assets/img/home/living-room.svg';

import Link, {LinkProps} from "../../../ui/components/navegations/Link/Link";
import RoundedButton from "../../../ui/components/inputs/RoundedButton/RoundedButton";

export const SectionContainer = styled('section')`
    width: 100%;
    min-height: 250px;
    position: relative;
    
    background-image: url(${LivingRoom});
    background-position: right center;
    background-repeat: no-repeat;
    background-size: cover;

    ${({ theme }) => theme.breakpoints.up('md')}{
        background-position: center;
    }

    ${({ theme }) => theme.breakpoints.down('md')}{
        display: flex;
        text-align: center;
    }
`;

export const ContainerStyled = styled(Container)`
    display: grid;
    grid-template-rows: repeat(3, auto);
    grid-template-areas: 'title' 'description' 'button';

    ${({ theme }) => theme.breakpoints.down('md')}{
        align-content: center;
        max-width: 350px;
    }

    ${({ theme }) => theme.breakpoints.up('md')}{
        grid-template-columns: 450px minmax(200px, 450px);
        grid-template-rows: 125px 55px 60px;
        grid-template-areas: 
            "title picture" 
            "description picture" 
            "button picture";

        gap: ${({ theme }) => theme.spacing(4)};
        align-items: center;
        align-content: center;
        justify-content: space-between;
        justify-items: center;
        min-height: 450px;
    }
`;

export const SectionTitle = styled('h1')`
    position: relative;
    margin: 0 !important;
    grid-area: title;

    span{
        color: inherit;
    }

    .twf-search{
        display: none;
    }

    ${({theme}) => theme.breakpoints.up('md')}{
        border: 4px solid ${({theme}) => theme.palette.grey[200]};
        border-radius: 65px;
        max-width: 300px;
        line-height: 30px;
        padding: ${({theme}) => theme.spacing(4) + ' ' + theme.spacing(8)};

        span{
            color: ${({theme}) => theme.palette.primary.main};
        }

        .twf-search{
            position: absolute;
            display: block;
            top: 0;
            left: 90%;
            transform: translateY(-15px);
            z-index: 2;
            background-color: ${({ theme }) => theme.palette.grey[200]};
            border-radius: 50px;
            padding: ${({ theme }) => theme.spacing(2)};
        }
    }

    ${({theme}) => theme.breakpoints.down('md')}{
        font-size: ${({ theme }) => theme.typography.body1.fontSize};
        color: ${({ theme }) => theme.palette.grey[200]};
        text-align: center;
        font-weight: normal;
    }


`;

export const SectionDescription = styled('p')`
    grid-area: description;
    margin: 0 0 ${({ theme }) => theme.spacing(5)};

    ${({theme}) => theme.breakpoints.up('md')}{
        width: 350px;
        margin: ${({ theme }) => theme.spacing(2)};
    }
`;

export const SectionButton = styled((props: LinkProps) => (
    <Link Component={RoundedButton} {...props} />
))`
    grid-area: button;
    ${({ theme }) => theme.breakpoints.up('md')}{
        width: 405px;
        height: 100%;
    }
`;

export const SectionPictureContainer = styled('div')`
    display: none;
    grid-area: picture;
    position: relative;

    img{
        position: relative;
        top: 35px;
        width: 100%;

    }

    &::before,
    &::after{
        content: '';
        position: absolute;
        border-radius: 999px;
        z-index: 2;
    }
    
    &::before{
        top: 20%;
        right: -5%;
        width: 130px;
        height: 130px;
        background-color: ${({ theme }) => theme.palette.primary.main};
    }

    &::after{
        bottom: 0;
        right: 0;
        width: 40px;
        height: 40px;
        background-color: ${({ theme }) => theme.palette.grey[200]};
    }


    ${({ theme }) => theme.breakpoints.up('md')}{
        display: block;
    }
`;

export const BottomButton = styled('span')`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 50%);

    background-color: ${({ theme }) => theme.palette.secondary.main};

    border-radius: 50px;
    padding: 12px;
    color: ${({ theme }) => theme.palette.common.white};
    border: 5px solid currentColor;

    i{
        position: relative;
        left: -2px;
    }
`;
