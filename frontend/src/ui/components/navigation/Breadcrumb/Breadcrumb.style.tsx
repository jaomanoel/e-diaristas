import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";
// import { } from "@mui/material";
// import { BreadcrumbProps } from "./Breadcrumb";

export const BreadCrumbContainer = styled("ul")`
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    background-color: white;
    padding: 0;
    color: ${({ theme }) => theme.palette.text.secondary};
    counter-reset: breadcrumb-counter;
    position: relative;

    ${({ theme }) => theme.breakpoints.down("md")} {
        font-size: 12px;
        text-align: center;
        margin: 0;

        span {
            display: none;
        }
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
        gap: ${({ theme }) => theme.spacing(2)};
        margin: ${({ theme }) => theme.spacing(2) + " " + theme.spacing(1)};
    }
`;

export const BreadCrumbItem = styled("li", {
    shouldForwardProp: (prop) => prop !== "isSelected",
})<{ isSelected?: boolean }>`
    ${({ theme }) => theme.breakpoints.down("md")} {
        flex: auto;
        padding: ${({ theme }) => theme.spacing() + " " + theme.spacing(3)};
        background-color: ${({ theme, isSelected }) =>
            theme.palette.grey[isSelected ? 200 : 100]};
    }

    ${({ theme }) => theme.breakpoints.down("sm")} {
        padding: ${({ theme }) => theme.spacing() + " " + theme.spacing()};
    }

    ${({ theme }) => theme.breakpoints.up("md")} {
        counter-increment: breadcrumb-counter;

        font-weight: ${({ isSelected }) => (isSelected ? "bold" : "normal")};

        &::before {
            content: counter(breadcrumb-counter);
            padding-right: ${({ theme }) => theme.spacing(1)};
        }
    }
`;
