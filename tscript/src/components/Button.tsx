import React from "react";

type Props = {
  // handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style: React.CSSProperties;
};

const Button = (props: Props) => {
  // return <button onClick={props.handleClick}>Click Me</button>;
  return <button style={props.style}>Click me</button>;
};

export default Button;
