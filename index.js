import React from "react";
import  ReactDOM  from "react-dom/client";

const Title = () =>{
    return(
    <img className="logo"  
    alt="logo"
     src="https://foodvilla.no/src/img/logo.png"
     />
    )
}

const Header = () =>{
    return(
        <div className="header">
           
            <Title />
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>

            </div>

        </div>
    )
}
// lets create Dynamically
const restaurantList = {
    name: "Macdonalds",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4",
    cuisins : ["Burgers", "American"],
    rating: "4.2"
}

const RestaurantCard = () =>{
    return(
        // // this is hardcoded
        // <div className="card">
        //     <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/ee5f8e06b300efc07c9fe3f4df40dfc4" />
        //     <h2>BurgerKing</h2>
        //     <h3>Burgers, American</h3>
        //     <h4>4.2 stars</h4>
        // </div>
 // **********************************************************
       
       
       <div className="card">
            <img src={restaurantList.image} />
            <h2>{restaurantList.name}</h2>
            <h3>{restaurantList.cuisins.join(", ")}</h3>
            <h4>{restaurantList.rating}stars</h4>
        </div>
    )
}
const Body = () =>{
    return(
        <div>
            <RestaurantCard />
        </div>
    )
}
const Footer = () =>{
    return(
        <>
        <h1>Food Villa</h1>
        </>
    )
}
const AppLayout = () =>{
    return(
        <>
        <Header />
        <Body />
        <Footer />
        </>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />)