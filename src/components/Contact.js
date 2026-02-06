import React, { useContext } from "react";
import UserContext from "../utils/UserContext";

const Contact = () => {
  const { loggedInUser, setUserName } = useContext(UserContext);
  console.log("user name ==", loggedInUser)
  return (
    <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm">
      <h1 className="text-xl font-bold tracking-tight text-text">Contact Us</h1>
      <p className="mt-2 text-sm text-muted">
        This is a demo contact page for the learning project.
      </p>

      {/* update context data/value  */}
      <label className="block text-sm">User Name</label>
      <input
        type="text"
        value={loggedInUser}
        onChange={(e) => setUserName(e.target.value)}
        className="border border-gray-200 p-1 rounded-sm"
      />
    </div>
  );
};

export default Contact;
