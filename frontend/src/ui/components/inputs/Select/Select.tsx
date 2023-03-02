import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";
import {
    FormControl,
    InputLabel,
    SelectProps as MuiSelectProps,
} from "@mui/material";

import { SelectStyled } from "./Select.style";

export interface SelectProps extends MuiSelectProps {
    label?: string;
}

const Select: React.FC<SelectProps> = ({
    label,
    children,
    value,
    style,
    ...props
}) => {
    const [element, setElemetId] = useState<string>("");

    useEffect(() => {
        setElemetId(uuid());
    }, []);

    return (
        <FormControl variant={"outlined"} style={style}>
            <InputLabel id={element}>{label}</InputLabel>
            <SelectStyled {...props} labelId={element} label={label}>
                {children}
            </SelectStyled>
        </FormControl>
    );
};

export default Select;
