import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState("1");

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("hello friend");
    }, 1000);

    // the return function in useEffect works like a componentWillUnmount
    return () => {
      console.log("useEffect return called");
      clearInterval(timer);
    };
  }, [count]);

  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <h2>Name: {name} Function</h2>
      <h3>Place: Thrissur</h3>
      <h4>Job: Developer</h4>
    </div>
  );
};

export default User;
