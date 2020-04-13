import React, { useState } from "react";

import "./App.css";

import lessons from "./lessons.js";

import Nav from "./Components/Nav";
import Lesson from "./Components/Lesson";

export default function App() {
  const [currentLesson, setCurrentLesson] = useState(null);
  const [NavIsHidden, setNavIsHidden] = useState(false);

  function changeLesson(index) {
    setCurrentLesson(lessons[index]);
    console.log(currentLesson);
  }

  function toggleNav() {
    const nav = document.getElementsByClassName("Nav")[0];
    if (NavIsHidden) {
      nav.style.display = "block";
      setNavIsHidden(false);
    } else {
      nav.style.display = "none";
      setNavIsHidden(true);
    }
  }

  return (
    <div className="App">
      <Nav lessons={lessons} changeLesson={changeLesson}></Nav>
      <button id="navButton" className="btn-light" onClick={() => toggleNav()}>
        <i className="navButtonText fas fa-angle-double-left"></i>
      </button>
      <Lesson lesson={currentLesson}></Lesson>
    </div>
  );
}
