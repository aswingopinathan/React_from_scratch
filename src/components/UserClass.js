import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    console.log("Child constructor");

    super(props);
    this.state = {
      count: 1,
    };
  }

  componentDidMount() {
    console.log("Child didmount");
  }
  render() {
    console.log("Child render");

    return (
      <div className="user-card">
        <h2>Count: {this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Count Increase
        </button>
        <h2>Name: {this.props.name} Class</h2>
        <h3>Place: Thrissur</h3>
        <h4>Job: Developer</h4>
      </div>
    );
  }
}
export default UserClass;
