import React from "react";

type Props = {
  value: string;
  onChangeHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({ value, onChangeHandler }: Props) => {
  return <input type="text" value={value} onChange={onChangeHandler} />;
};

export default Input;
