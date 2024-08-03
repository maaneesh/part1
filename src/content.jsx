import React from "react";

const Content = ({ course }) => {
  const name = course.name;
  const parts = course.parts;

  return (
    <div>
      {parts.map(({ name, exercises }, index) => (
        <p key={index}>
          {name}: {exercises}
        </p>
      ))}
    </div>
  );
};

export default Content;
