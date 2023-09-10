import { restaurantList } from "../constants";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const Body = () => {
  function filterData(searchText, restaurants) {
    const filterData = restaurants.filter((restaurant) =>
      restaurant.info.name.includes(searchText)
    );
    return filterData;
  }
  const [restaurants, setRestaurants] = useState(restaurantList);
  const [searchText, setsearchText] = useState();
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, restaurants);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
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
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.info} key={restaurant.info.id} />
          );
        })}
      </div>
    </>
  );
};
export default Body;
