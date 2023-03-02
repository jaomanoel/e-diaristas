import { styled, Accordion } from "@mui/material";

export const SectionContainer = styled('section')`
    padding-bottom: ${({ theme }) => theme.spacing(7)};
`;

export const Wave = styled('img')`
    margin-top: -100px;
    z-index: 2;
    width: 100%;
`;

export const SectionTitle = styled('h2')`
    margin: 0;
    text-align: center;
    color: ${({ theme }) => theme.palette.common.black};
`;

export const SectionSubTitle = styled('p')`
    position: relative;
    text-align: center;
    color: ${({ theme }) => theme.palette.common.black};

    padding-top: ${({ theme }) => theme.spacing(2)};
    padding-bottom: ${({ theme }) => theme.spacing(10)};
    margin: 0;

    &::after{
        content: '';
        position: absolute;
        bottom: ${({ theme }) => theme.spacing(5)};
        left: 50%;
        transform: translateX(-50%);

        width: 96px;
        height: 3px;

        background-color: ${({ theme }) => theme.palette.grey[300]};
    }
`;

export const AccordionStyled = styled(Accordion)`
    &.MuiAccordion-root{
        box-shadow: none;
        border: 2px solid ${({ theme }) => theme.palette.grey[300]};

        &, &.Mui-expanded{
            margin: -2px 0 0 0;
        }

        &::before{
            background-color: transparent;
        }
    }

    .MuiAccordionSummary-content .MuiTypography-root{
        font-weight: bold;
    }

    .MuiAccordionDetails-root{
        margin-right: ${({ theme }) => theme.spacing(7)};
    }

    .MuiAccordionSummary-expandIconWrapper{
        color: ${({ theme }) => theme.palette.text.secondary};
    }
`;