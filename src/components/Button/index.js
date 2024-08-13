const shapes = {
  circle: "rounded-full",
  round: "rounded-[50px]",
  square: "rounded-[0px]",
};

const variants = {
  outline: {
    misc_white_0: "border-misc-white-0 border-[0.6px] border-solid text-blue_gray-200",
  },
  fill: {
    misc_black: "bg-misc-black text-misc-white-0",
    misc_white_0: "bg-misc-white-0 text-text-secondary_text",
  },
};

const sizes = {
  sm: "h-[40px] text-[16px]",
  xs: "h-[32px] px-1",
  md: "h-[48px] px-6 text-[18px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "md",
  color = "misc_white_0",
  ...restProps
}) => (
  <button
    className={`${className} flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap ${shape && shapes[shape] || ''} ${size && sizes[size] || ''} ${variant && variants[variant][color] || ''}`}
    {...restProps}
  >
    {leftIcon && leftIcon}
    {children}
    {rightIcon && rightIcon}
  </button>
);

export { Button };
