import React from "react";
import { CDN_URL } from "../utils/constant";
import fallbackImage from "../assests/fallbackImage.jpg";
import ImageWithFallback from "./ImageWithFallback";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const ItemList = ({ item }) => {
  console.log((item));

  const dispatch = useDispatch();

  const handleAddItems = (item) => {
    //dispatch and action
    dispatch(addItem(item));
  };
  return (
    <div>
      {item.map((item) => {
        return (
          <div
            className=" text-left flex border-b-2 py-5"
            key={item.card.info.id}
          >
            <div className="w-9/12">
              <span className=" text-justify">{item.card.info.name}</span>
              <span>
                -₹
                {item.card.info.price
                  ? item.card.info.price / 100
                  : item.card.info.defaultPrice / 100}
              </span>
              <div>
                <span className=" font-serif font-extralight text-xs text-justify">
                  {item.card.info.description}
                </span>
              </div>
            </div>
            <div className="w-3/12  ">
              <div className="h-auto w-auto  flex ">
                <div className=" absolute  mx-20  bg-black text-white p-2 rounded-lg  items-center">
                  <button className="" onClick={()=>handleAddItems(item)}>
                    Add+
                  </button>
                </div>

                <div>
                  <ImageWithFallback
                    src={CDN_URL + item.card.info.imageId}
                    alt="Main Image"
                    fallbackImage={fallbackImage}
                  />
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ItemList;
