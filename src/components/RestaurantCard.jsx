import { CDN_URL, LOGO_URL } from "../utils/constant";

const RestaurantCard = (props) => {
  // console.log(props);
  const {resData } = props;
   // console.log(resData.info.avgRating) same as below
  const { key, name, cuisines, locality, costForTwo, cloudinaryImageId ,avgRating} =
    resData?.info;

  // console.log(name);
  // console.log(resData.info.avgRating);
  return (
    <div className="res-card">
      <div className="img-container">
        <img className="img" src={CDN_URL + cloudinaryImageId} />
      </div>
      <span className="hide">{key}</span>
      <h3>{name}</h3>
      <h4>{cuisines.join(",")}</h4>
      <h4>{locality} ▾</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
