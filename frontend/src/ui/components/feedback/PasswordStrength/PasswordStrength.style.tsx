import { styled } from "@mui/material/styles";
import { LinearProgress, Theme } from "@mui/material";

export const PasswordStrengthLabel = styled("span", {
    shouldForwardProp: (prop) => prop != "value",
})<{ value: number }>`
    background-color: white;
    color: ${({ theme, value }) => handleBarColor(theme, value)};
    font-weight: bold;
`;

export const PasswordStrengthBar = styled(LinearProgress)`
    margin-top: ${({ theme }) => theme.spacing()};

    .MuiLinearProgress-bar {
        background-color: ${({ theme, value }) => handleBarColor(theme, value)};
    }

    &.MuiLinearProgress-root {
        background-color: ${({ theme }) => theme.palette.grey[200]};
    }
`;

function handleBarColor(theme: Theme, value = 0) {
    if (value <= 25) {
        return theme.palette.error.main;
    } else if (value == 50) {
        return theme.palette.warning.main;
    }

    return theme.palette.success.main;
}
