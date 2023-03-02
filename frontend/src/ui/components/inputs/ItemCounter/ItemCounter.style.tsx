import { styled } from "@mui/material/styles";
import { IconButton } from "@mui/material";
// import { ItemCounterProps } from "./ItemCounter";

export const ItemCounterContainer = styled("div")`
    display: inline-grid;
    grid-template-columns: repeat(3, auto);
    gap: ${({ theme }) => theme.spacing(3)};
    align-items: center;
    position: relative;

    span {
        position: relative;
        color: ${({ theme }) => theme.palette.text.secondary};
    }

    &::before {
        content: "";
        position: absolute;
        top: 2px;
        bottom: 2px;
        left: 50%;
        transform: translateX(-50%);
        background-color: ${({ theme }) => theme.palette.grey[50]};
        border: 2px solid ${({ theme }) => theme.palette.grey[100]};
        width: 80%;
    }
`;

export const CircleButton = styled(IconButton)`
    &.MuiIconButton-root {
        border: 2px solid ${({ theme }) => theme.palette.secondary.main};
        background-color: ${({ theme }) => theme.palette.background.paper};
        padding: 8px 6px;

        &:hover {
            background-color: ${({ theme }) =>
                theme.palette.background.default};
        }

        i {
            color: ${({ theme }) => theme.palette.secondary.main};
            font-size: 16px;
        }
    }
`;
