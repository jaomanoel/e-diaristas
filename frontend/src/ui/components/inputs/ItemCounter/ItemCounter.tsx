import React, { lazy } from "react";
//import { } from '@mui/material';

import { ItemCounterContainer, CircleButton } from "./ItemCounter.style";

export interface ItemCounterProps {
    counter: number;
    plural: string;
    onInc: () => void;
    onDec: () => void;
    label: string;
}

const ItemCounter: React.FC<ItemCounterProps> = ({
    counter = 0,
    plural,
    onDec,
    onInc,
    label,
}) => {
    return (
        <ItemCounterContainer>
            <CircleButton onClick={onDec}>
                <i className="twf-minus" />
            </CircleButton>

            <span>
                {counter} {counter > 1 ? plural : label}
            </span>

            <CircleButton onClick={onInc}>
                <i className="twf-plus" />
            </CircleButton>
        </ItemCounterContainer>
    );
};

export default ItemCounter;
