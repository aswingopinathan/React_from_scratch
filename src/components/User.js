import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState("1");
  const [count2] = useState("2");

  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Count2: {count2}</h2>
      <h2>Name: {name} Function</h2>
      <h3>Place: Thrissur</h3>
      <h4>Job: Developer</h4>
    </div>
  );
};

export default User;
