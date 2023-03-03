import React from "react";
//import { } from '@mui/material';

import {
    SideInformationHeader,
    SideInformationContainer,
    SideInformationFooter,
    SideInformationItem,
} from "./SideInformation.style";

export interface SideInformationProps {
    title?: string;
    footer?: {
        title: string;
        icon?: string;
    };
    items: {
        title: string;
        description: string[];
        icon?: string;
    }[];
}

const SideInformation: React.FC<SideInformationProps> = ({
    title,
    footer,
    items,
    ...props
}) => {
    return (
        <SideInformationContainer>
            {title && (
                <SideInformationHeader>
                    <h3>{title}</h3>
                </SideInformationHeader>
            )}

            <ul>
                {items.map((item, index) => (
                    <SideInformationItem key={index}>
                        {item.icon && <i className={item.icon} />}

                        <div>
                            <h4>{item.title}</h4>
                            <ul>
                                {item.description.map((topic, index) => (
                                    <li key={index}>
                                        <span>{topic}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </SideInformationItem>
                ))}
            </ul>

            {footer && (
                <SideInformationFooter>
                    {footer.icon && <i className={footer.icon} />}

                    <h3>{footer.title}</h3>
                </SideInformationFooter>
            )}
        </SideInformationContainer>
    );
};

export default SideInformation;
