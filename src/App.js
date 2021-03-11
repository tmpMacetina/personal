/* eslint-disable no-unused-vars */
import React, { useState, useRef, forwardRef } from "react";
import {
  FaFacebook,
  FaDiscord,
  FaLinkedinIn,
  FaMoon,
  FaSun
} from "react-icons/fa";
import Chat from "./components/Chat/Chat";
import Projects from "./components/Projects/Projects";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import "./App.scss";
import "./Styles.scss";
import "./Spinner.scss";

function App() {
  const [mode, setMode] = useState("dark");

  const changeModeLight = () => {
    setMode("light");
  };
  const changeModeDark = () => {
    setMode("dark");
  };

  const aRef = useRef(null);
  const pRef = useRef(null);
  const cRef = useRef(null);
  const refs = {
    aRef,
    pRef,
    cRef
  };
  // scroll to functions
  const scrollToProjects = () => {
    //  const anchor = document.querySelector("#project");
    pRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollToAbout = () => {
    // const anchor = document.querySelector("#about");
    aRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const scrollToContact = () => {
    // const anchor = document.querySelector("#contact");
    cRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  return (
    <div className={`body-${mode}`}>
      <Chat
        mode={mode}
        scrollP={scrollToProjects}
        scrollA={scrollToAbout}
        scrollC={scrollToContact}
        ref={refs}
      />
      <div className={`page_${mode}`}>
        <div className={`mode-select-${mode}`}>
          <FaMoon
            className={`icon-moon_${mode}`}
            onClick={() => changeModeDark()}
          />
          <FaSun
            className={`icon-sun_${mode}`}
            onClick={() => changeModeLight()}
          />
        </div>
        <div className={`icons-${mode}`}>
          <FaLinkedinIn className={`icon_${mode}`} />
          <FaFacebook className={`icon_${mode}`} />
          <FaDiscord className={`icon_${mode}`} />
        </div>
      </div>
      <hr ref={aRef} />
      <About />
      <hr ref={pRef} />
      <Projects mode={mode} />
      <hr ref={cRef} />
      <Contact id="contact" />
      <p>Site design was inspired by user Westhofen M.</p>
    </div>
  );
}

export default App;
