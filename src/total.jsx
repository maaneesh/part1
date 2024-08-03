import React from "react";

const Total = ({ course }) => {
  const parts = course.parts;
  const total = parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <p>Total of exercises: {total}</p>
    </div>
  );
};

export default Total;
