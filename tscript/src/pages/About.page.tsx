import React from "react";

type Props = {
  children: string;
};

const AboutPage = (props: Props) => {
  return (
    <div>
      <h3>AboutPage</h3>
      <h3>{props.children}</h3>
    </div>
  );
};

export default AboutPage;
