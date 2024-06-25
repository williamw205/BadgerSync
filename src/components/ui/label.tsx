import React, { HTMLProps } from "react";

interface LabelProps extends HTMLProps<HTMLLabelElement> {
  children: React.ReactNode;
}

const Label: React.FC<LabelProps> = ({ children, ...rest }) => {
  return <Label {...rest}>{children}</Label>;
};

export default Label;
