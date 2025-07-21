import React from "react";

class Userclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userinfo: {
        name: "dumy",
        location: "dummy",
      },
    };
  }
  componentDidMount() {
    const getData = async () => {
      const data = await fetch("https://api.github.com/users/KishorKumarBabu?");
      const json = await data.json();
      this.setState({
        userinfo: json,
      });
      console.log(json, "git api");
    };
    getData();
  }
  render() {
    const { name, location, avatar_url } = this.state.userinfo;
    return (
      <div class="user-card">
        <img src={avatar_url} alt="avatar_url" />
        <h2>Name : {name}</h2>
        <h3>location : {location}</h3>
      </div>
    );
  }
}

export default Userclass;
