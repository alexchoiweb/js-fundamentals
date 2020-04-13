import React from "react";

export default function Lesson(props) {
  return (
    <div className="Lesson">
      {props.lesson ? (
        <span className="lessonHeader">{props.lesson.question}</span>
      ) : (
        <></>
      )}
    </div>
  );
}
