import { useState, useEffect } from "react";
import { SkillsProps } from "./Skills.types";

export const Skills = (props: SkillsProps) => {
  const { skills } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [data, setData] = useState<string>();

  useEffect(() => {
    setTimeout(() => {
      setIsLoggedIn(true);
    }, 1001);

    setTimeout(() => {
      setData("I contain Data");
    }, 1500);
  }, []);
  return (
    <>
      {data && <div data-testid="d-data">{data}</div>}

      <ul>
        {skills.map((skill) => {
          return <li key={skill}>{skill}</li>;
        })}
      </ul>
      {isLoggedIn ? (
        <button data-testid="start-btn">Start learning</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </>
  );
};
