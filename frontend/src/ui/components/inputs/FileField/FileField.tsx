import React, { ChangeEvent, useState } from "react";
import TextField from "../TextField/TextField";
import { TextFieldProps } from "@mui/material";

import { FileFieldContainer, UploadIcon } from "./FileField.style";

export interface FileFieldProps extends Omit<TextFieldProps, "onChange"> {
    onChange: (files: FileList) => void;
}

const FileField: React.FC<FileFieldProps> = ({ onChange, ...props }) => {
    const [filePath, setFilePath] = useState<string>("");

    const handleFileChange = (e: ChangeEvent) => {
        const target = e.target as HTMLInputElement,
            files = target.files;

        if (files !== null && files.length) {
            setFilePath(files[0]?.name || "");
            onChange(files);
        }
    };

    return (
        <FileFieldContainer>
            <TextField
                label={"Selecione um arquivo"}
                value={filePath}
                InputProps={{
                    endAdornment: <UploadIcon className={"twf-upload"} />,
                }}
                fullWidth
                {...props}
            />

            <TextField
                type={"file"}
                {...props}
                fullWidth
                onChange={handleFileChange}
            />
        </FileFieldContainer>
    );
};

export default FileField;
