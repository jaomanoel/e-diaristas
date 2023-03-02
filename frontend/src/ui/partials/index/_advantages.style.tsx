import { styled, List, Avatar, ListItemText, Divider } from "@mui/material";

export const GradientBackground = styled('section')`
    background-image: ${({ theme }) => (
        'linear-gradient(180deg, ' + 
        theme.palette.secondary.main + ' 0%, ' + 
        theme.palette.primary.main + ' 100%);'
    )};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    padding-bottom: ${({ theme }) => theme.spacing(10)};

    ${({ theme }) => theme.breakpoints.up('md')}{
        padding-bottom: ${({ theme }) => theme.spacing(20)};
    }
`;

export const SectionTitle = styled('h2')`
    position: relative;
    text-align: center;
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
    font-weight: normal;
    margin: 0;
    padding-top: ${({ theme }) => theme.spacing(7)};
    padding-bottom: ${({ theme }) => theme.spacing(4)};

    &::after{
        content: '';
        position: absolute;
        bottom: ${({ theme }) => theme.spacing(2)};
        left: 50%;
        transform: translateX(-50%);
        width: 44px;
        height: 2px;
        background-color: currentColor;
    }

    ${({ theme }) => theme.breakpoints.up('md')}{
        font-size: ${({ theme }) => theme.typography.h5.fontSize};
        padding-top: ${({ theme }) => theme.spacing(15)};
        padding-bottom: ${({ theme }) => theme.spacing(13)};

        &::after{
            bottom: ${({ theme }) => theme.spacing(10)};
        }   
    }
`;

export const ListStyled = styled(List)`

    ${({ theme }) => theme.breakpoints.up('md')}{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
        gap: ${({ theme }) => theme.spacing(7)};
    }
`;

export const ListDivider = styled(Divider)`
    &.MuiDivider-root{
        border-color: rgba(255, 255, 255, .25);
        margin: 0 ${({ theme }) => theme.spacing(2)};
    
        ${({ theme }) => theme.breakpoints.up('md')}{
            display: none;
        }
    }
`;
