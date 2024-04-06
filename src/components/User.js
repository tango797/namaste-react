import React from "react";
import { useState } from "react";

const User = (props) => {
  const [count, setCount] = useState(0);
  return (
    
    <div className="user-card">
      <h3>count: {count}</h3>
      <h2>name:{props.name}</h2>
      <h3>location: faridabad</h3>
      <h3>contact:@rvai</h3>
    </div>
  );
};

export default User;
