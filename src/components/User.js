import { use, useEffect, useState } from "react";

const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  useEffect(() => {
    // API call to fetch user info
  }, []);
  
  return (
    <div className="user-card">
      <h1>Count : {count}</h1>
      <h1>Count2 : {count2}</h1>
      <p>Name: {name}</p>
      <p>Location: {location}</p>
      <p>Contact: {contact}</p>
    </div>
  );
};

export default User;
