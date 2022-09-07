import React from "react";

interface ButtonProps {
  children?: string;
}

const Button = (props: ButtonProps) => {
  const { children } = props;

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
  };

  return <button onClick={handleClick}>{children}</button>;
};

export default Button;
