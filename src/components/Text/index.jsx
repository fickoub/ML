import React from "react";

const variantClasses = {
  h1: "font-normal sm:text-4xl md:text-[38px] text-[40px]",
  h2: "font-bold text-4xl sm:text-[32px] md:text-[34px]",
  h3: "font-bold md:text-3xl sm:text-[28px] text-[32px]",
  h4: "font-bold text-3xl sm:text-[26px] md:text-[28px]",
  h5: "font-bold sm:text-2xl md:text-[26px] text-[28px]",
  h6: "text-2xl md:text-[22px] sm:text-xl",
  body1: "text-xl",
  body2: "text-[15px]",
  body3: "font-bold text-sm",
  body4: "font-bold text-xs",
};

const Text = ({ children, className, variant, as, ...restProps }) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
