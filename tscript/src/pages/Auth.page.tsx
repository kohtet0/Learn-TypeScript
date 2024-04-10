import React, { useState } from "react";

type Props = {};

const AuthPage = (props: Props) => {
  type userType = {
    name: string;
    age: number;
  };

  const [user, setUser] = useState<userType | null>(null);

  const userLogin = () => {
    setUser({
      name: "Mg Mg",
      age: 20,
    });
  };

  const userLogout = () => {
    setUser(null);
  };

  return (
    <>
      <h3>Your name is {user?.name}</h3>
      <h3>Your age is {user?.age}</h3>
      <button onClick={userLogin}>login</button>
      <button onClick={userLogout}>logout</button>
    </>
  );
};

export default AuthPage;
