import { CDN_URL } from "../utils/config";
const Card =( props )=>
{ 
    const {Data} =props;
    const {name,cuisines,cloudinaryImageId, costForTwoString, avgRating } = Data.info
    const{deliveryTime} = Data.info.sla;
    return(
        <div className= "w-[200px] px-3 py-2 mx-2 my-3 h-[300px] bg-gray-200 rounded-lg hover:bg-gray-400">
            <img 
            src = { CDN_URL + 
                   cloudinaryImageId}
            alt ="Card Image Error in Rendering"
            className="w-[180px] rounded-md pb-3"></img>
            <div className="flex flex-col items-start justify-stretch">
            <h4 className="font-bold mb-3">{name}</h4>
            <h5 className="flex-wrap text-xs">{(cuisines).join( ", " )} </h5>
            <div className= "flex items-center gap-4 mt-5">
                <h5 className= "text-sm">{avgRating}</h5>
                <h5>{deliveryTime + " mins" } </h5>
            </div>
            </div>
            
        </div>
    )
}

export const withOpenRestaurant =(Card) =>
{
    return(props) =>{
        return(
            <div>
                <label className="bg-black px-2 py-1 ml-2 rounded-md absolute text-white">Open now</label>
                <Card {...props}/>
            </div>

        )
    }
}
export default Card;