import React from "react";

type Props = {
  handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const Button = (props: Props) => {
  return <button onClick={props.handleClick}>Click Me</button>;
};

export default Button;
