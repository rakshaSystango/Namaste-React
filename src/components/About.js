import React from "react";
import User from "./User";
import UserClass from "./UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("parent constructor");
  }
  componentDidMount() {
    // console.log("parent component did mount");
  }
  render() {
    return (
      <>
        {/* {console.log("parent render")} */}
        <h1>About</h1>
        <User
          name="Raksha Jain (function)"
          location="India"
          contact="raksha.jain@example.com"
        />

        <UserClass
          name="Raksha Jain (class component)"
          location="India"
          contact="raksha.jain@example.com"
        />
      </>
    );
  }
}
export default About;

/* 
- parent constructor
- parent rendor

    - first child constructor
    - first child rendor

    - second child constructor
    - second child rendor

    {DOM updated here}

    - first child component did mount
    - second child component did mount

- parent component did mount 
*/
