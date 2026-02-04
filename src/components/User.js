import { use, useEffect, useState } from "react";

const User = ({ name, location, contact }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(2);

  useEffect(() => {
    // API call to fetch user info
  }, []);
  
  return (
    <div className="mt-5 rounded-2xl border border-border bg-surface p-5 text-sm text-muted shadow-sm">
      <h1 className="text-base font-semibold text-text">Count : {count}</h1>
      <h1 className="text-base font-semibold text-text">Count2 : {count2}</h1>
      <p className="mt-2">
        <span className="font-semibold text-text">Name:</span> {name}
      </p>
      <p>
        <span className="font-semibold text-text">Location:</span> {location}
      </p>
      <p>
        <span className="font-semibold text-text">Contact:</span> {contact}
      </p>
    </div>
  );
};

export default User;
