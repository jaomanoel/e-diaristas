import { styled } from "@mui/material/styles";
import {} from "@mui/material";
// import { SideInformationProps } from "./SideInformation";

export const SideInformationContainer = styled("aside")`
    background-color: ${({ theme }) => theme.palette.grey[50]};
    color: ${({ theme }) => theme.palette.text.primary};
    font-size: ${({ theme }) => theme.typography.body2};
    max-width: 320px;
    h3,
    h4 {
        margin: 0;
    }
    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
`;

export const SideInformationHeader = styled("header")`
    background-color: ${({ theme }) => theme.palette.grey[100]};
    padding: ${({ theme }) => theme.spacing(3)};
    text-align: center;
    font-size: ${({ theme }) => theme.typography.h6.fontSize};
`;

export const SideInformationFooter = styled("footer")`
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(3)};
    background-color: ${({ theme }) => theme.palette.primary.main};
    color: ${({ theme }) => theme.palette.primary.contrastText};
    font-size: ${({ theme }) => theme.typography.h5.fontSize};
    padding: ${({ theme }) => theme.spacing(3)};
    text-align: center;

    i {
        font-size: 26px;
    }
`;

export const SideInformationItem = styled("li")`
    position: relative;
    display: flex;
    align-items: center;
    gap: ${({ theme }) => theme.spacing(3)};
    padding: ${({ theme }) => theme.spacing(3)};
    color: black;

    h4 {
        padding-bottom: ${({ theme }) => theme.spacing()};
    }

    ul {
        color: ${({ theme }) => theme.palette.text.secondary};
    }

    i {
        font-size: 24px;
        & ~ div {
            h4 {
                padding-bottom: 0;
            }
        }
    }

    &:not(:last-of-type)::after {
        content: "";
        height: 1px;
        background-color: ${({ theme }) => theme.palette.grey[200]};
        position: absolute;
        bottom: 0;
        left: ${({ theme }) => theme.spacing(3)};
        right: ${({ theme }) => theme.spacing(3)};
    }
`;
