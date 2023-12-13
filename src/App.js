// const heading = React.createElement("h1",{id:"heading",xyz:"xyz"},"hello world");

// const root = ReactDOM.createRoot(document.getElementById("root"))

// root.render(heading)

//using JSX

// const jsxHeading = (<h1 className="head">
//     hello namaste react </h1>);
// console.log(jsxHeading)

// //functional component

// const Title =()=>(  <h1 className="title">hello Title</h1>);
// const reactComponent1= (
//     <h1>it is a react element</h1>
//   );

// const reactComponent = (

//     <h1>{reactComponent1}
//         it is a react element</h1>
//   );

// const HeadingComponent=()=>(

// <div id="container">
// {/* you can write js in {} */}
// {reactComponent}
// {Title()}
// <HeadingReturn></HeadingReturn>
// <HeadingReturn/>
// <Title/>
// <h1 className="heading">hello functional component</h1>
//     </div>

//    );

//    const HeadingReturn= ()=>{
//     return (<h1>hello from diffrent syntx of functional component</h1>
//    );
//    }

//Episode 04 building app
import React from "react"
import { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import ContactUS from "./components/ContactUS";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";

//dynamic bundling
//lazyloading

const Grocery = React.lazy(() =>   import("./components/Grocery"));

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      {/* {if my / then body} */}

      {/* {if path /about then about component so outlet comes to rescue } */}
      <Outlet />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <ContactUS />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },
      {
        path: "/grocery",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Grocery />
          </Suspense>
        ),
      },
    ],
    errorElement: <Error />,
  },
]);

const heading = React.createElement("h1", { id: "heading" }, "this is react ");
const root = ReactDOM.createRoot(document.getElementById("root"));

//wrapping a functional component in the render method to render component
root.render(<RouterProvider router={appRouter} />);
