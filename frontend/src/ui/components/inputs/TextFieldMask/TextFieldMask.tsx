import React from 'react';
import InputMask from "react-input-mask";
import TextField from "../TextField/TextField";
import { OutlinedInputProps } from '@mui/material';

export interface TextFieldMaskProps extends Omit<OutlinedInputProps, 'variant'> {
    mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({ 
    mask, 
    value, 
    onChange, 
    onBlur, 
    ...props
}) => {
    return (
        <InputMask
            mask={mask}
            value={value as string}
            onChange={onChange}
            onBlur={onBlur}
        >
            <TextField {...props} variant={'outlined'} />
        </InputMask>
    )
};

export default TextFieldMask;