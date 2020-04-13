import React from "react";

export default function Nav(props) {
  return (
    <div className="Nav col-2">
      <h2>Javascript Fundamentals</h2>
      {props.lessons.map((item, index) => (
        <p
          className="navLesson"
          key={index}
          onClick={() => props.changeLesson(index)}
        >
          {index + 1}. {item.question}
        </p>
      ))}
    </div>
  );
}
