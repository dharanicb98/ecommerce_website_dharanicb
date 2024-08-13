const sizes = {
    headings: "text-[14px] font-bold",
    headingsm: "text-[16px] font-bold",
    headingmd: "text-[18px] font-bold",
    headinglg: "text-[20px] font-bold",
    headingxl: "text-[24px] font-bold md:text-[22px]",
};
  
const Heading = ({ children, className = "", size = "headinglg", as, ...restProps }) => {
    const Component = as || "h6";
  
    return (
      <Component className={`text-text-text font-simplonnorm ${className} ${sizes[size]}`} {...restProps}>
        {children}
      </Component>
    );
};
  
export { Heading };
  