import React from "react";
import HomePage from "./pages/Home.page";
import AboutPage from "./pages/About.page";
import ContactUsPage from "./pages/ContactUs.page";

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
      <ContactUsPage>
        <AboutPage>hello children</AboutPage>
      </ContactUsPage>
    </div>
  );
}

export default App;
