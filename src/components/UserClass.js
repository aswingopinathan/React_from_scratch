import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("constructor processed");

    super(props);
    this.state = {
      userInfo: { name: "getName", location: "getLoc", bio: "getBio" },
    };
  }

  async componentDidMount() {
    // console.log("componentDidMount processed");

    const data = await fetch("https://api.github.com/users/aswingopinathan");
    const json = await data.json();
    this.setState({ userInfo: json });
    this.timer = setInterval(() => {
      // console.log("Hi aswin");
    }, 1000);
  }

  componentDidUpdate() {
    // console.log("componentDidUpdate processed");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    // console.log("componentWillUnmount processed");
  }
  render() {
    // debugger;
    // console.log("render processed");

    const { name, location, bio, avatar_url } = this.state.userInfo;
    return (
      <div className="user-card">
        <img src={avatar_url} alt="aswin_img" style={{ width: "250px" }}></img>
        <h2>Name: {name}</h2>
        <h3>Place: {location}</h3>
        <h4>Bio: {bio}</h4>
      </div>
    );
  }
}
export default UserClass;
