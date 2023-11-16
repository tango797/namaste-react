import React from "react";


class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      count:0,
      count2:2
    }
    console.log("constructor is called");
  }

  render() {
    const {count,count2}=this.state
    console.log("render called ");
    return (
      <div className="user-card">
        <button onClick={()=>{
          this.setState({
            count:this.state.count+1,
          })
        }}>increase count</button>
         <h2>count:{count}</h2>
         <h2>count2:{count2}</h2>
        <h2>name:{this.props.name}</h2>
       
        <h3>location: faridabad</h3>
        <h3>contact:@rvai</h3>
      </div>
    );
  }
}

export default UserClass;