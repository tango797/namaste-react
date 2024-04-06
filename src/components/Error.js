import {  useRouteError} from "react-router-dom";
//it is hook to show error message more systematically .

const Error = ()=>{
const err = useRouteError();
console.log(err);
    return(
        <div className="center">
            <h1>oops you are lost!!</h1>
            <img src="https://www.amway.in/_next/static/assets/not_found-a57c87e12c47ce156e7107a9d820dce4.png"></img>
            <h2>something has been lost</h2>
            <h3 >{err.status} and {err.statusText}</h3>
        </div>
    )
}

export default Error;