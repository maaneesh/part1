import { useState } from "react";

const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const Statistics = ({ good, neutral, bad }) => {
  const feedbackCount = good + bad + neutral;
  const positive = (good / feedbackCount) * 100;
  const average = good - bad / feedbackCount;
  if (feedbackCount > 0) {
    return (
      <>
        <h3>Statistics</h3>
        <StatisticLine text="good" value={good} />
        <StatisticLine text="bad" value={bad} />

        <StatisticLine text="neutral" value={neutral} />

        <StatisticLine text="All" value={feedbackCount} />

        <StatisticLine text="Average: " value={average} />

        <StatisticLine text="Positive" value={positive} />
      </>
    );
  }
  return (
    <>
      <h3>Statistics</h3>
      <p>No feedback given</p>
    </>
  );
};

const StatisticLine = ({ text, value }) => {
  if (text === "Positive") {
    return (
      <>
        <p>
          {text} {value} %
        </p>
      </>
    );
  }
  return (
    <>
      <p>
        {text} {value}
      </p>
    </>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGood = () => {
    const newCount = good + 1;
    setGood(newCount);
  };
  const handleBad = () => {
    const newCount = bad + 1;
    setBad(newCount);
  };
  const handleNeutral = () => {
    const newCount = neutral + 1;
    setNeutral(newCount);
  };

  return (
    <div>
      <h1>Give feedback</h1>
      <Button text="Good" handleClick={handleGood} />
      <Button text="Bad" handleClick={handleBad} />
      <Button text="Neutral" handleClick={handleNeutral} />

      <Statistics good={good} bad={bad} neutral={neutral} />
    </div>
  );
};

export default App;
