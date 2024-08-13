import React from "react";

const shapes = {
  square: "rounded-[0px]",
};

const variants = {
  fill: {
    misc_white_0: "bg-misc-white-0 text-blue_gray-200",
  },
};

const sizes = {
  xs: "h-[46px] px-6 text-[18px]",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      label = "",
      prefix,
      suffix,
      onChange,
      shape,
      variant = "fill",
      size = "xs",
      color = "misc_white_0",
      ...restProps
    },
    ref
  ) => {
    return (
      <label
        className={`${className} flex items-center justify-center cursor-text text-blue_gray-200 text-[18px] bg-misc-white-0 flex-grow ${
          shape && shapes[shape]
        } ${variants[variant]?.color || variants[variant]} ${sizes[size]}`}
      >
        {!!label && label}
        {!!prefix && prefix}
        <input
          ref={ref}
          type={type}
          name={name}
          placeholder={placeholder}
          onChange={onChange}
          {...restProps}
        />
        {!!suffix && suffix}
      </label>
    );
  }
);

// Add displayName to the component
Input.displayName = "Input";

export { Input };
