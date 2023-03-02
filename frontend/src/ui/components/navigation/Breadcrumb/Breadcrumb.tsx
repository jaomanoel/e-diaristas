import React from "react";
//import { } from '@mui/material';

import { BreadCrumbContainer, BreadCrumbItem } from "./Breadcrumb.style";

export interface BreadcrumbProps {
    selected: string;
    items: string[];
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ selected, items }) => {
    return (
        <BreadCrumbContainer>
            {items.map((item, index) => (
                <React.Fragment key={index}>
                    <BreadCrumbItem
                        isSelected={item === selected ? true : false}
                    >
                        {item}
                    </BreadCrumbItem>
                    {index !== items.length - 1 && <span> &gt; </span>}
                </React.Fragment>
            ))}
        </BreadCrumbContainer>
    );
};

export default Breadcrumb;
