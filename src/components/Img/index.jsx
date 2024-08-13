// "use client";
// import React from "react";
// import Image from "next/image";

// const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "/images/";

// const Img = ({
//   className,
//   src = "defaultNoData.png",
//   alt = "testImg",
//   isStatic = false,
//   width,
//   height,
//   ...restProps
// }) => {
//   // const [imgSrc, setImgSrc] = React.useState(src);

//   // React.useEffect(() => {
//   //   setImgSrc(src);
//   // }, [src]);

//   return (
//     <Image
//       className={className}
//       // src={isStatic ? imgSrc : BASE_URL + src}
//       src={src}
//       alt={alt}
//       width={width}
//       height={height}
//       {...restProps}
//       // onError={() => {
//       //   setImgSrc("defaultNoData.png");
//       // }}
//     />
//   );
// };

// export { Img };

"use client";
import React from "react";
import Image from "next/image";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL || "/images/";

const Img = ({
  className = "",
  src = "defaultNoData.png",
  alt = "testImg",
  isStatic = false,
  width,
  height,
  ...restProps
}) => {
  // Uncomment this if you plan to handle image errors
  // const [imgSrc, setImgSrc] = React.useState(src);

  // React.useEffect(() => {
  //   setImgSrc(src);
  // }, [src]);

  return (
    <Image
      className={className}
      src={isStatic ? src : `${BASE_URL}${src}`}
      alt={alt}
      width={width}
      height={height}
      {...restProps}
      // Uncomment if handling image errors
      // onError={() => {
      //   setImgSrc("defaultNoData.png");
      // }}
    />
  );
};

export { Img };

