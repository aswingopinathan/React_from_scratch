import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor() {
    super();
    console.log("Parent constructor");
  }
  componentDidMount() {
    console.log("Parent didmount");
  }
  render() {
    console.log("Parent render");

    return (
      <div>
        <h3>About us page</h3>
        <UserClass name={"Aswin SG"} />
      </div>
    );
  }
}

export default About;
