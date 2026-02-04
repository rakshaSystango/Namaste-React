import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(props);

    this.state = {
    //   count: 0,
    //   count2: 2,
      userInfo:{
        name: "Dummy Name",
        location: "Dummy Location",
      }
    };

    // console.log("child constructor");
  }

  async componentDidMount(){
    // console.log("child component did mount")

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate(){
    console.log("component did update");
  }

  componentWillUnmount(){
    // cleanup activities
    console.log("component will unmount");
  } 

  render() {
    // const { name, location, contact } = this.props;
    // const { count } = this.state;
    const {name, location} = this.state.userInfo;
    //   console.log("child render");
    
    return (
      <div className="mt-5 rounded-2xl border border-border bg-surface p-5 text-sm text-muted shadow-sm">
        {/* <h1>Count : {count}</h1> */}
        {/* <button
          type="button"
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Count Increase
        </button> */}
        <p>
          <span className="font-semibold text-text">Name:</span> {name}
        </p>
        <p>
          <span className="font-semibold text-text">Location:</span> {location}
        </p>
        {/* <p>Contact: {contact}</p> */}
      </div>
    );
  }
}

export default UserClass;

/* 
-- Mounting cycle --
constructor (dummy data)
render (dummy data)
    <HTML Dummy >
component did mount
    <api call>
    <this.setState (api data)>

-- Updating cycle --
    render (api data)
    <HTML loaded with new api data>
component did update

 */
