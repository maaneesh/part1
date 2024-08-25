import React from "react";

export const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return parts.map((part, index) => (
    <Part name={part.name} exercises={part.exercises} key={index} />
  ));
};

export default Content;
