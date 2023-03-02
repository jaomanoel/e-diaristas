import { styled } from "@mui/material/styles";
import { Paper } from "@mui/material";

export const FormContainer = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    gap: ${({ theme }) => theme.spacing(3)};

    max-width: 650px;
    margin: 0 auto ${({ theme }) => theme.spacing(2)};

    ${({ theme }) => theme.breakpoints.up('md')}{
        gap: ${({ theme }) => theme.spacing(5)};
    }
`;

export const ContainerPaper = styled(Paper)`
    padding: ${({ theme }) => theme.spacing(7)};
    margin: 0 auto ${({ theme }) => theme.spacing(10)};

    ${({theme}) => theme.breakpoints.down('md')}{
        padding: 0;
        box-shadow: none;
    }
`;

export const ContainerContentPaper = styled('div')`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${({ theme }) => theme.spacing(2)};

    ${({theme}) => theme.breakpoints.up('md')}{
        grid-template-columns: repeat(2, 1fr);
        gap: ${({ theme }) => theme.spacing(6)};
    }

    ${({theme}) => theme.breakpoints.down('md')}{
        margin-left: ${({theme}) => theme.spacing(-2)};
        margin-right: ${({theme}) => theme.spacing(-2)};

        > :nth-of-type(odd){
            background-color: ${({ theme }) => theme.palette.background.paper};
        }
    }

`;