import User from "./User";
import Header from "./Header";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor  called  ");
  }


  componentDidMount(){
    console.log("parent component did mount ");
  }
  render() {
    console.log("parent render called  ");
    return (
      <div>
        <h1>This is About Page</h1>

        <UserClass name={"Ravi it is from class props"} />
      </div>
    );
  }
}

// const About = () => {
//   return (
//     <div>

//       <h1>This is About Page</h1>

//       <UserClass name ={"Ravi it is from class props"}/>
//     </div>
//   );
// };

export default About;
