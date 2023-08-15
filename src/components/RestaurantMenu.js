import { useState, useEffect } from "react"; 
import ShimmerUI from "./ShimmerUI";
import { useParams } from "react-router-dom";
import { Menu_API } from "../utils/config";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu =() =>
{
    const[showIndex, setShowIndex] = useState();
    const{resId} =useParams();

    const resInfo = useRestaurantMenu(resId);
   

    
    if(resInfo === null) return <ShimmerUI />;
    const {name, cuisines,costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;
    let {itemCards} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card ;
    if(!itemCards)
    {
        const{categories} = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
        itemCards = categories.map((category)=>category.itemCards).flat();
    }
    const categories2 = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c =>{
        return c.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })

   
    return(
        <div className="text-center">
            <h1 className="bold my-6 text-2xl">{name}</h1>
            <p className="bold">{cuisines?.join(',')} - {costForTwoMessage}</p>
            
            {
                categories2.map((category2, index) => <RestaurantCategory 
                    key = {category2.card.card.title} 
                    data ={category2?.card?.card}
                    showItems={index === showIndex? true: false}
                    setShowIndex={() =>setShowIndex(index)}/>)
            }
            {/*<h1>{name}</h1>
            <p>{cuisines?.join(',')} - {costForTwoMessage}</p>
            <h3></h3>
            <h2>Menu</h2>
             <ul>
                {itemCards.map((item) => (
                    <li key ={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
                ))}; 
             </ul>
                */}


        </div>

    )
}
export default RestaurantMenu;