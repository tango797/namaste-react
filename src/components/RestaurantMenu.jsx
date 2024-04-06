import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { Link } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  //When a component is rendered by such a <Route> with dynamic segments, React Router injects the matched parameters as properties into the component.

//To access these parameters inside the component, you use the useParams() hook, which returns an object containing all the parameters extracted from the URL.
  const { resId } = useParams();

  const data = useRestaurantMenu(resId);
  console.log(data);
  const [showIndex, setShowIndex] = useState(null); //useState(0);
  // console.log(resId);
  // console.log(data);

  if (data === null) return <Shimmer />;

  console.log(data.cards[2].card.card.info.name);
  const {
    name = "Default Name",
    cuisines = [],
    areaName = "Unknown Area",
    avgRating = 0,
    totalRatingsString = "0 ratings",
  } = data?.cards[2]?.card?.card?.info || {};
  //console.log(data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  //let { itemCards } = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards||[];
  //cards[4].groupedCard.cardGroupMap.REGULAR.cards
 console.log(data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((category) => {
    const cardType = category?.card?.card?.["@type"];
    console.log(cardType);
    return (
      cardType ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });

  

  return (
    <div className="menu items-center  w-9/12 text-center bg-slate-100 mx-auto rounded-lg">
      <div className="res_info flex justify-between items-center border-b-2 ">
        <div className="res_name">
          <h3 className=" text-xl font-bold">{name}</h3>
          <h4>{cuisines.join(",")}</h4>
          <h4>{areaName}</h4>
          <h4>{data?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString}</h4>
          <h4>{data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h4>
        </div>

        <div className="rating bg-slate-100 p-3 rounded-lg text-center border border-solid">
          <h4 className="border-b">{avgRating}</h4>
          <h4>{totalRatingsString}</h4>
        </div>
      </div>

      <h2>Menu</h2>
      <div className="border">
        {categories.map((category, index) => {
          return (
            //pass props as to the category page
            <div>
              <RestaurantCategory
                key={category.card.card.title}
                data={category?.card?.card}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
                setShowIndexClose={() => setShowIndex(null)}
              />
            </div>
          );
        })}
      </div>

      {/* what to iterate: itemcards , the map has callback fn, items for each items, i want card.info.name , make is list */}
      {/* <li>{itemCards[0].card.info.name}</li> */}
    </div>
  );
};

export default RestaurantMenu;
