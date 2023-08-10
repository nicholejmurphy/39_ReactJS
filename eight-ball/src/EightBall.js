import React, { useState } from "react";

const answers = [
  { msg: "Think of a Question", color: "black" },
  { msg: "It is certain.", color: "green" },
  { msg: "It is decidedly so.", color: "green" },
  { msg: "Without a doubt.", color: "green" },
  { msg: "Yes - definitely.", color: "green" },
  { msg: "You may rely on it.", color: "green" },
  { msg: "As I see it, yes.", color: "green" },
  { msg: "Most likely.", color: "green" },
  { msg: "Outlook good.", color: "green" },
  { msg: "Yes.", color: "green" },
  { msg: "Signs point to yes.", color: "goldenrod" },
  { msg: "Reply hazy, try again.", color: "goldenrod" },
  { msg: "Ask again later.", color: "goldenrod" },
  { msg: "Better not tell you now.", color: "goldenrod" },
  { msg: "Cannot predict now.", color: "goldenrod" },
  { msg: "Concentrate and ask again.", color: "goldenrod" },
  { msg: "Don't count on it.", color: "red" },
  { msg: "My reply is no.", color: "red" },
  { msg: "My sources say no.", color: "red" },
  { msg: "Outlook not so good.", color: "red" },
  { msg: "Very doubtful.", color: "red" },
];
// 0-19

const EightBall = (props) => {
  const genRandomAnswer = () => answers[Math.floor(Math.random() * 20) + 1];
  const getAnswer = () => setAnswer(genRandomAnswer());
  const restart = () => {
    setAnswer(answers[0]);
  };
  const [answer, setAnswer] = useState(answers[0]);
  return (
    <div onClick={getAnswer} className="EightBall">
      <div
        className="EightBall-container"
        style={{ backgroundColor: answer.color }}
      >
        <h2 className="EightBall-answer">{answer.msg}</h2>
      </div>
      <button onclick={restart}>Restart</button>
    </div>
  );
};

export default EightBall;
