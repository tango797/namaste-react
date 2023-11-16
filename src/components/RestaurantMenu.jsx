import React from "react";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {MENU_API} from "../utils/constant";
import {  Link} from "react-router-dom";

const RestaurantMenu = () => {
  useEffect(() => {
    fetchMenu();
  }, []);

  const [data, setData] = useState(null);
  const { resId } = useParams();
  console.log(resId);

  async function fetchMenu() {
    try {
      const res = await fetch(MENU_API + resId);
      const json = await res.json();
      setData(json.data); // this json is now json.data because the data of res is in data obj inside json.
      console.log(json.data);
    } catch (error) {
      console.log(error.message);
      return null;
    }
  }

  if (data === null) return <Shimmer />;

  const { name, cuisines, areaName, avgRating, totalRatingsString } =
    data?.cards[0]?.card?.card?.info;
  const { itemCards } =
    data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return (
    <div className="menu">
      <div className="res_info">
        <div className="res_name">
          <h3>{name}</h3>
          <h4>{cuisines.join(",")}</h4>
          <h4>{areaName}</h4>
        </div>

        <div className="rating">
          <h4>{avgRating}</h4>
          <h4>{totalRatingsString}</h4>
        </div>
      </div>

      <hr />
      <h4>{data?.cards[0]?.card?.card?.info?.sla?.lastMileTravelString}</h4>
      <h4>{data?.cards[0]?.card?.card?.info?.costForTwoMessage}</h4>

      <h2>menu</h2>
      <ul>
        {itemCards.map((item) => {
          return (
            <li key={item.card.info.id}>
              {item.card.info.name} - Rs
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          );
        })}
        {/* what to iterate: itemcards , the map has callback fn, items for each items, i want card.info.name , make is list */}
        {/* <li>{itemCards[0].card.info.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
