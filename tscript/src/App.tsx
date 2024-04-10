import React from "react";
import HomePage from "./pages/Home.page";
import AboutPage from "./pages/About.page";
import ContactUsPage from "./pages/ContactUs.page";
import Button from "./components/Button";
import Input from "./components/Input";

function App() {
  // const parents = {
  //   father: "U Zaw Naing Win",
  //   mother: "Daw Aye",
  // };
  // const skills = ["php", "js", "css"];
  // const languages = [
  //   {
  //     language: "Myanmar",
  //     level: "native",
  //   },
  //   {
  //     language: "English",
  //     level: "e-skill",
  //   },
  // ];

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
  };

  return (
    <div className="App">
      {/* <HomePage
        // name="ko htet"
        age={22}
        isAuth={false}
        parents={parents}
        languages={languages}
        skills={skills}
        status="jobless"
      /> */}

      {/* <AboutPage>hello children</AboutPage> */}
      {/* <ContactUsPage>
        <AboutPage>hello children</AboutPage>
      </ContactUsPage> */}

      {/* <Button handleClick={handleClick} /> */}

      <Input value="" onChangeHandler={(e) => console.log(e.target.value)} />
    </div>
  );
}

export default App;
