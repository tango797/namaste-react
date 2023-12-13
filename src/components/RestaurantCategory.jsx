import React from "react";
import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({
  data,
  showItems,
  setShowIndex,
  setShowIndexClose,
}) => {
  // console.log(data.itemCards);

  //use the useState to have the clicked logic initial state is false and when clicked it will set it to true

  // const [showItems,setShowItems]= useState(false);
  const handleClick = () => {
    // show N HIDE item list
    //true is open and down arrow
    //toggle if showItems is true make it false and when it false make it true
    // setShowItems(true)
    // setShowItems(!showItems)

    console.log(showItems);
    if (showItems === true) {
      setShowIndexClose();
      
    } else {
      setShowIndex();
    }

    console.log("clicked");
  };

  return (
    // this is header
    <div className=" w-full   border shadow-lg mb-2 p-3">
      <div
        className=" flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold">
          {data.title} ({data.itemCards.length})
        </span>
        {showItems ? <span>⬇️</span> : <span>⬆️</span>}
      </div>
      {/* {this is accordion body } */}
      <div>{showItems && <ItemList item={data.itemCards} />}</div>
    </div>
  );
};

export default RestaurantCategory;
