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
      <div className="space-y-5">
        {/* {console.log("parent render")} */}
        <div className="rounded-2xl border border-border bg-surface p-5 shadow-sm">
          <h1 className="text-xl font-bold tracking-tight text-text">About</h1>
          <p className="mt-2 text-sm text-muted">
            A small learning project built while practicing React fundamentals.
          </p>
        </div>
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
      </div>
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
