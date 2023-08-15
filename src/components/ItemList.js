import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/config";
import { addItem } from "../utils/cartSlice";


const ItemList =({ Items }) =>{


   //console.log(Items);
   const dispatch = useDispatch();

   const handleAdd = (item) =>{
        //Dispatch an action

        dispatch(addItem(item));
        console.log(addItem(item));


   }
    return(
        <div className="bg-gray-100">
            {/*console.log(Items)*/}
            {Items.map(Item => {
                return(
                    <div key={Item?.card?.info?.id} className="flex justify-between p-2 m-2 border border-gray-200 border-b-2 text-left">
                        <div className = "py-2">
                            <span className="mr-4">{Item?.card?.info?.name}</span>
                            <span>₹ {Item?.card?.info?.price/100 || Item?.card?.info?.defaultPrice/100}</span>
                        </div>
                        
                        <div>
                            <div className="absolute">
                                <button className="mb-1 p-1 bg-white shadow-lg rounded-lg mx-16" onClick={() =>handleAdd(Item)}>Add +</button>
                            </div>
                            <img src = {CDN_URL+Item?.card?.info?.imageId} className="w-[120px]"/>
                            
                        </div>

                    </div>
                )
            })}
        </div>
    );
};

export default ItemList;