import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import { Link } from "react-router-dom";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const data = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null)//useState(0);
  // console.log(resId);
  // console.log(data);

  if (data === null) return <Shimmer />;

  const { name, cuisines, areaName, avgRating, totalRatingsString } =
    data?.cards[0]?.card?.card?.info;

  let { itemCards } = data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  console.log(data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories =
    data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (category) => {
        console.log(category.card?.card?.["@type"]);
        return (
          category?.card?.card["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );
      }
    );

  // console.log(itemCards);
  console.log(categories);

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
                showItems={index === showIndex ?true:false}
                setShowIndex={()=> setShowIndex(index)}
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
