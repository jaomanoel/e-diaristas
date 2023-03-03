import React, { useEffect, useState } from "react";
import { passwordStrength } from "check-password-strength";
import { Typography } from "@mui/material";

import {
    PasswordStrengthBar,
    PasswordStrengthLabel,
} from "./PasswordStrength.style";

export interface PasswordStrengthProps {
    password: string;
    grid: string;
}

const PasswordStrength: React.FC<PasswordStrengthProps> = ({
    password,
    grid,
}) => {
    const [strengText, setStrengText] = useState<string>("Fraca");
    const streng = password ? passwordStrength(password).id : 0,
        strengValue = ((streng + 1) / 4) * 100;

    useEffect(() => {
        if (streng === 0) {
            setStrengText("FRACA");
        } else if (streng === 1) {
            setStrengText("MÉDIA");
        } else {
            setStrengText("FORTE");
        }
    }, [strengValue]);

    return (
        <div style={{ gridArea: grid }}>
            <Typography
                variant={"body2"}
                component={"span"}
                color={"textSecondary"}
            >
                Nivel da Senha:&nbsp;
                <PasswordStrengthLabel value={strengValue}>
                    {strengText}
                </PasswordStrengthLabel>
            </Typography>
            <PasswordStrengthBar value={strengValue} variant={"determinate"} />
        </div>
    );
};

export default PasswordStrength;
