import React from 'react';

const sizes = {
    textxs: "text-[12px] font-normal",
    texts: "text-[14px] font-normal",
    textmd: "text-[16px] font-normal",
    textlg: "text-[18px] font-normal",
    textxl: "text-[22px] font-normal",
    text2xl: "text-[60px] font-normal md:text-[52px] sm:text-[46px]",
};

const Text = ({ children, className = "", as, size = "textlg", ...restProps }) => {
    const Component = as || "p";

    return (
        <Component className={`text-misc-white-0 font-simplonnorm ${className} ${sizes[size]}`} {...restProps}>
            {children}
        </Component>
    );
};

export { Text };
