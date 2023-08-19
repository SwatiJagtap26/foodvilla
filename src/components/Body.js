import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
const Body = () => {
    return (
      <div className="restaurantList">
          {/* spraed operator */}
        {/* <RestaurantCard  {...restaurantList[0].info} />
        <RestaurantCard {...restaurantList[1].info} />
        <RestaurantCard {...restaurantList[2].info} />
        <RestaurantCard {...restaurantList[3].info} />
        <RestaurantCard {...restaurantList[4].info} />
        <RestaurantCard {...restaurantList[5].info} />
        <RestaurantCard {...restaurantList[6].info} />
        <RestaurantCard {...restaurantList[7].info} />
        <RestaurantCard {...restaurantList[8].info} /> */}
  
        {/* Map function */}
        {restaurantList.map((restaurant) =>{
          return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
        })}
        
      </div>
    );
  };
  export default Body;