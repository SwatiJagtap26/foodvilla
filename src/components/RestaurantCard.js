import { IMG_CDN_URL } from "../constants";

const RestaurantCard = ({name, cuisines, areaName, cloudinaryImageId}) => {
    // desturcturing objects
    // const {name, cuisines, areaName, cloudinaryImageId} =restaurant.info;
  return (
    // // this is hardcoded
    // <div className="card">
    //     <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4" />
    //     <h2>BurgerKing</h2>
    //     <h3>Burgers, American</h3>
    //     <h4>4.2 stars</h4>
    // </div>
    // **********************************************************
    //    created using dynamically props

    <div className="card">
      <img src={IMG_CDN_URL+cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{areaName}</h4>
    </div>
  );
};
export default RestaurantCard