import React from "react";

type Props = {
  name?: string;
  age: number;
  isAuth: boolean;
  parents: {
    father: string;
    mother: string;
  };
  skills: string[];
  languages: {
    language: string;
    level: string;
  }[];
  status: "student" | "jobless" | "onJob";
};

const HomePage = (props: Props) => {
  let name = props.name ? props.name : "user";
  let userType = props.isAuth ? "Member" : "Guest";
  let statusMsg;
  switch (props.status) {
    case "student":
      statusMsg = "dependent";
      break;
    case "jobless":
      statusMsg = "beggar";
      break;
    case "onJob":
      statusMsg = "worker";
      break;
  }

  return (
    <div>
      <h3>Your name is {name}</h3>
      <h3>Your age is {props.age}</h3>
      <h3>Your are {userType}</h3>
      <h3>
        Your father is {props.parents.father} and your mother is{" "}
        {props.parents.mother}.
      </h3>
      <h3>Your skills</h3>
      <ul>
        {props.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      <h3>Your languages</h3>
      <ul>
        {props.languages.map((lan) => (
          <li key={lan.level}>
            {lan.language} : {lan.level}
          </li>
        ))}
      </ul>
      <h3>You are {statusMsg}</h3>
    </div>
  );
};

export default HomePage;
