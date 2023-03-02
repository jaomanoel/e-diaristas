import { styled } from "@mui/material/styles";
import { Select } from "@mui/material";
// import { SelectProps } from "./Select";

export const SelectStyled = styled(Select)`
    &.MuiInputBase-root {
        background-color: ${({ theme }) => theme.palette.grey[50]};
    }

    .MuiOutlineInput-notChedOutline {
        border-color: ${({ theme }) => theme.palette.grey[100]};
    }
`;
