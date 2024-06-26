import React from "react";

type Props = {
  children: React.ReactNode;
};

const ContactUsPage = (props: Props) => {
  return <div>{props.children}</div>;
};

export default ContactUsPage;
