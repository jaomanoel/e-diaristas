import { styled, ListItemText, Avatar  } from "@mui/material";

export const AvatarStyled = styled(Avatar)`
    background-color: transparent;
    border: 2px solid currentColor;
    padding: 2px;
    margin-right: ${({ theme }) => theme.spacing(2)};
    box-sizing: content-box;

    i{
        font-size: 25px;
    }

    ${({ theme }) => theme.breakpoints.up('md')}{
        padding: 20px;
        margin-right: ${({ theme }) => theme.spacing(4)};

        i{
            font-size: 50px;
        }
    }
`;

export const ListItemTextStyled = styled(ListItemText)`
    width: 200px;

    .MuiListItemText-primary {
        font-weight: bold;
    }

    .MuiListItemText-secondary{
        color: currentColor;
    }
`;
