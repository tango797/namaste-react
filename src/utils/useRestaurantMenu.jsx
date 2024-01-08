import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constant";


const useRestaurantMenu = (resId) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData  = async () => {
    try {
      const res = await fetch(MENU_API + resId);
      const json = await res.json();
      setData(json.data);
      console.log(json.data)
    } catch (error) {
      console.log(error.message);
    }
  };
  return data;
};

export default useRestaurantMenu;
