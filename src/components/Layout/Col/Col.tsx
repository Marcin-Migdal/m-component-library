import React, { CSSProperties, PropsWithChildren } from "react";

import { Optionalize } from "../../global-interfaces";

import "./Col.css";

type ColProps = {
    className?: string;
    style?: CSSProperties;
} & Optionalize<{ sm: number }, { smFlex: number }> &
    Optionalize<{ md: number }, { mdFlex: number }> &
    Optionalize<{ lg: number }, { lgFlex: number }> &
    Optionalize<{ xl: number }, { xlFlex: number }>;

const Col = ({
    className = "",
    style = {},
    children,

    //! Sizes
    sm,
    md,
    lg,
    xl,

    //! Flex Sizes
    smFlex,
    mdFlex,
    lgFlex,
    xlFlex,
}: PropsWithChildren<ColProps>) => {
    const sizes = { sm, md, lg, xl };
    const flexSizes = { smFlex, mdFlex, lgFlex, xlFlex };

    const colClasses = getColClasses(sizes);
    const colFlexClasses = getFlexColClasses(flexSizes);

    return (
        <div style={style} className={`m-grid-col ${colClasses} ${colFlexClasses} ${className}`}>
            {children}
        </div>
    );
};

export default Col;

const getColClasses = (sizes: { sm?: number; md?: number; lg?: number; xl?: number }): string => {
    let colClasses: string = "";

    for (const size in sizes) {
        const value = (sizes as any)[size];
        if (value) colClasses = colClasses.concat(`col-${size}-${value} `);
    }

    return colClasses.slice(0, colClasses.length - 1);
};

const getFlexColClasses = (flexSizes: { smFlex?: number; mdFlex?: number; lgFlex?: number; xlFlex?: number }): string => {
    let colFlexClasses: string = "";

    for (const size in flexSizes) {
        const value = (flexSizes as any)[size];
        if (value) colFlexClasses = colFlexClasses.concat(`col-flex-${size.slice(0, 2)}-${value} `);
    }

    return colFlexClasses.slice(0, colFlexClasses.length - 1);
};
