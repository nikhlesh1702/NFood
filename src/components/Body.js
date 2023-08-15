import Card from "./Card";
import DataObj from "../utils/DataObj";
import { useEffect, useState } from "react";
import { API_URL } from "../utils/config";
import ShimmerUI from "./ShimmerUI";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { withOpenRestaurant } from "./Card";

const Body = () => {
  const [input, setInput] = useState("");
  const [dataItems, setDataItems] = useState([]);
  const [searchedItems, setSearchedItems] =useState([]);

  const RestaurantCardOpen = withOpenRestaurant(Card);
    

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const ApiData = await fetch(API_URL);
    let json = await ApiData.json();
    //console.log(json);
    
    //setDataItems(json?.data?.cards[2]?.data?.data?.cards);
    setDataItems(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    console.log(dataItems);
    //setSearchedItems(json?.data?.cards[2]?.data?.data?.cards);
    setSearchedItems(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };  

  const onlineStatus = useOnlineStatus();
  if(onlineStatus === false) return <h2>Looks like you are offline, please check your internet connection</h2>

  return dataItems.length === 0 ?
  ( <ShimmerUI />) : (
    <div>
      <div className="flex items-center justify-start  mb-10 mx-[50px]">
      <input
        type="text"
        value={input}
        className="border border-black "
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button
        className="bg-green-200 px-3 py-1 mx-3 rounded-md "
        onClick={() => {
          const FilteredSearch = dataItems.filter((DataI) =>
            DataI.info.name.toLowerCase().includes(input.toLowerCase())
          );
          //console.log(FilteredSearch);
          setSearchedItems(FilteredSearch);
        }}
      >
        Search
      </button>

      <button
        className= "bg-gray-400 px-3 py-1 rounded-md"
        onClick={() => {
          const FilteredData = dataItems.filter(
            (DataItem) => DataItem.info.avgRating > 4      
          );
          //console.log(FilteredData);
          setSearchedItems(FilteredData);
        }}
      >
        Top Rated Restaurants
      </button>

      </div>
      <div className="flex flex-wrap">
        {searchedItems.map((DataEle) => (
            <Link 
            key={DataEle.info.id}
            to = {"/restaurants/" + DataEle.info.id}>
            {
              DataEle.info.isOpen ? (<RestaurantCardOpen Data ={DataEle} />) : (<Card Data={DataEle} />)
            }
              
           </Link>
        ))}
      </div>
    </div>
  );
};
export default Body;
