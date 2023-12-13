import RestaurantCard, { vegOrNonVeg } from "./RestaurantCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useonlineStatus";

const Body = () => {
  // console.log(resObj);
  const [filteredList, setfilteredListResObj] = useState([]); // this variable used to update the filtered ui
  const [restaurant_grid_listing, setRestaurant_grid_listing] = useState([]); //original list used for filter
  const [search, setSearch] = useState("");

  const RestaurantCardVegNonVeg = vegOrNonVeg(RestaurantCard); // new restaurant card component with veg label on it
  console.log(restaurant_grid_listing);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.4089123&lng=77.3177894&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    const arrayOfCards = json.data.cards;
    const restaurant_list = "restaurant_grid_listing";

    for (const cardObj of arrayOfCards) {
      // console.log(cardObj.card.card);
      //console.log(cardObj.card.card.id);
      if (cardObj.card.card && cardObj.card.card.id === restaurant_list) {
        const resData =
          cardObj.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setfilteredListResObj(resData);
        setRestaurant_grid_listing(resData);
      }
    }
  };

  function keyPress() {
    // searchedResult it have new list of resturant based on search
    const searchedResult = filteredList.filter((res) => {
      //console.log(res.info.name.toLowerCase())

      return res.info.name.toLowerCase().includes(search.toLowerCase());
    });
    console.log(searchedResult);
    //we nee to set this to body so need to call useState function
    if (searchedResult.length === 0) {
      setfilteredListResObj(restaurant_grid_listing);
    } else {
      setfilteredListResObj(searchedResult);
    }
  }
  // creating loading effect if cards take time .
  // console.log(filteredList);
  // if (filteredList.length === 0) {
  //   // return <h1>Loading...</h1>;

  //   return <Shimmer />;
  // }

  //use ternary js syntax
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>you are offline please check internet </h1>;
  }

  return filteredList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center px-3">
        <button
          className="filter-btn rounded-lg border border-solid bg-gray-200 p-2"
          //click button event listener
          onClick={() => {
            let newFilteredList = filteredList.filter((res) => {
              return res.info.avgRating > 4;
            });
            console.log(newFilteredList);
            setfilteredListResObj(newFilteredList);
          }}
        >
          Top Rated Restaurants
        </button>

        <button
          className="clear-btn rounded-lg border border-solid bg-gray-200 p-2 m-1"
          onClick={fetchData}
        >
          clear
        </button>
        <div className="search">
          <input
            className="search-box p-1 m-3 border border-solid border-black rounded-lg"
            type="text"
            placeholder="search"
            value={search} //this search variable is bind to input and bcz it is local usestate variable it is empty by defualt we need to get the new value by onchange handler
            onChange={(event) => {
              setSearch(event.target.value);
              if (event.target.value === "") {
                setfilteredListResObj(restaurant_grid_listing);
              }
            }}
            onKeyDown={(event) => {
              console.log(event.target.value);
              setSearch(event.target.value);
              console.log(search);
              keyPress();

              if (event.target.value === "") {
                setfilteredListResObj(restaurant_grid_listing);
              }
            }}
          ></input>
          {/* //on click of this button we need to filter the data as per search and update the ui
             //search text  needed from input box and we had to bind the input to local state variable  */}
          <button
            className="search-btn bg-gray-200 border p-2 rounded-lg"
            onClick={() => {
              // searchedResult it have new list of resturant based on search
              const searchedResult = filteredList.filter((res) => {
                //console.log(res.info.name.toLowerCase())
                console.log(search);
                return res.info.name
                  .toLowerCase()
                  .includes(search.toLowerCase());
              });
              console.log(searchedResult);
              //we nee to set this to body so need to call useState function
              if (searchedResult.length === 0) {
                setfilteredListResObj(restaurant_grid_listing);
              } else {
                setfilteredListResObj(searchedResult);
              }
            }}
          >
            search
          </button>
        </div>
      </div>
      <div className="res-container flex flex-wrap ">
        {/* restuarant cards  render we need to use local state variable */}

        {filteredList.map((restaurant) => {
          return (
            
            <Link            
              key={restaurant.info.id}
              to={"/restaurant/" + restaurant.info.id}
            >
             
              {console.log(restaurant.info.isOpen)}
              {restaurant.info.isOpen? <RestaurantCardVegNonVeg resData={restaurant} />
               :<RestaurantCard resData={restaurant} />
              }
            </Link>
          );
        })}
        {/* <RestuarantCard resData={resObj[0]}/>
         /> */}

        {/* if we uncomment the below line it will break beacuse the resdata is used for the props but below line doesn't pass resData */}
        {/* <RestuarantCard resName="kfc" cuisines="fast food" distance="Sector 15 1.8 km" cost="₹400 for two"/> */}
      </div>
    </div>
  );
};

export default Body;
