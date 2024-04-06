import { CDN_URL, LOGO_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  // console.log(props);
  const { resData } = props;
  // console.log(resData.info.avgRating) same as below
  const {
    key,
    name,
    cuisines,
    locality,
    costForTwo,
    cloudinaryImageId,
    avgRating,
  } = resData?.info;

  // console.log(name);
  // console.log(resData.info.avgRating);
  return (
    <div className="res-card m-2 p-2 h-[410px]  w-[235px] bg-slate-200 rounded-lg">
      <div className="img-container rounded-lg">
        <img
          className="img rounded-lg h-[250px]  w-[250px]"
          src={CDN_URL + cloudinaryImageId}
        />
      </div>
      <div className=" ">
        <span className="hide">{key}</span>
        <h3 className="font-bold">{name}</h3>
        <h4 className=" truncate text-ellipsis hover:text-clip ">
          {cuisines.join(",")}
        </h4>
        <h4>{locality} ▾</h4>
        <h4>{avgRating}</h4>
        <h4>{costForTwo}</h4>
      </div>
    </div>
  );
};

//higher order component  return a component and component will return jsx

export const OpenLabel = (RestaurantCard) => {
  
  return (props) => {
    return (
      <div className="">
        <label className="absolute m-1 p-2 text-white bg-black rounded-lg">Open</label>
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
