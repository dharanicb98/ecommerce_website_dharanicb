// import React from "react";

// const variants = {
//   primary: "checked:border-gray-800 checked:border-[0.1px] checked:border-solid checked:bg-misc-white-0 checked:focus:bg-misc-white-0 checked:focus:border-gray-800 checked:hover:bg-misc-white-0 checked:hover:border-gray-800",
// };

// const sizes = {
//   xs: "",
//   sm: "h-[18px] w-[18px]",
//   md: "h-[22px] w-[22px]",
// };

// const Checkbox = React.forwardRef(
//   ({
//     className = "",
//     name = "",
//     label = "",
//     id = "checkbox_id",
//     onChange,
//     variant = "primary",
//     size = "xs",
//     ...restProps
//   }, ref) => {
//     const handleChange = (e) => {
//       if (onChange) onChange(e.target.checked);
//     };

//     return (
//       <div className={`${className} flex items-center gap-[5px] cursor-pointer`}>
//         <input
//           className={`${size && sizes[size]} ${(variant && variants[variant]) || ''}`}
//           ref={ref}
//           type="checkbox"
//           name={name}
//           onChange={handleChange}
//           id={id}
//           {...restProps}
//         />
//         {label && <label htmlFor={id}>{label}</label>}
//       </div>
//     );
//   }
// );

// export { Checkbox };

import React from "react";

const variants = {
  primary:
    "checked:border-gray-800 checked:border-[0.1px] checked:border-solid checked:bg-misc-white-0 checked:focus:bg-misc-white-0 checked:focus:border-gray-800 checked:hover:bg-misc-white-0 checked:hover:border-gray-800",
};

const sizes = {
  xs: "",
  sm: "h-[18px] w-[18px]",
  md: "h-[22px] w-[22px]",
};

const Checkbox = React.forwardRef(
  (
    {
      className = "",
      name = "",
      label = "",
      id = "checkbox_id",
      onChange,
      variant = "primary",
      size = "xs",
      ...restProps
    },
    ref
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e.target.checked);
    };

    return (
      <div
        className={`${className} flex items-center gap-[5px] cursor-pointer`}
      >
        <input
          className={`${size && sizes[size]} ${
            (variant && variants[variant]) || ""
          }`}
          ref={ref}
          type="checkbox"
          name={name}
          onChange={handleChange}
          id={id}
          {...restProps}
        />
        {label && <label htmlFor={id}>{label}</label>}
      </div>
    );
  }
);

// Add displayName to the component
Checkbox.displayName = "Checkbox";

export { Checkbox };

