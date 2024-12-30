import { useContext, useEffect, useState } from "react";
import UserContext from "../utils/UserContext";

const User = ({ name }) => {
  const [count, setCount] = useState("1");
  const [userInfo, setUserInfo] = useState({});
  const { loggedInUser } = useContext(UserContext);

  useEffect(() => {
    const timer = setInterval(() => {}, 1000);

    async function fetchData() {
      const response = await fetch(
        "https://api.github.com/users/aswingopinathan"
      );
      const json = await response.json();
      json && setUserInfo(json);
    }
    fetchData();

    // the return function in useEffect works like a componentWillUnmount
    return () => {
      // console.log("useEffect return called");
      clearInterval(timer);
    };
  }, [count]);
  return (
    <div className="user-card">
      <h2>Count: {count}</h2>
      <img
        src={userInfo.avatar_url}
        alt="aswin_img"
        style={{ width: "250px" }}
      ></img>
      <h2>Name: {userInfo.name || "name"} </h2>
      <h2 className="font-bold">Logged user: {loggedInUser || "not found"}</h2>
      <h3>Place: {userInfo.location || "location"} </h3>
      <h4>Job: Software Engineer</h4>
    </div>
  );
};

export default User;
