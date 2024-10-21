import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_LINK } from "../contant";

const RestaurantMenu=()=>{
    let params=useParams();
    let {id}=params;

    const [restaurant,setRestaurant]=useState({});

    useEffect(()=>{
        console.log("hdg");
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo(){
        const deta=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.61450&lng=77.30630&restaurantId=538610&catalog_qa=undefined&submitAction=ENTER");
        const jsn=await deta.json();
        console.log("jsn");
        console.log(jsn.data);
        setRestaurant(jsn.data);
        console.log("hsh");
    }

   
    
    return(
            <div>
                <div>
                    <h4>Restaurant Id:{id}</h4>
                    {console.log(restaurant)}
                    <h2>{restaurant?.cards[2]?.name}</h2>
                    <h2>{restaurant?.cards[2]?.card?.card?.info?.name}</h2>
                    <img src={`${IMG_CDN_LINK+restaurant.cards[2].card.card.info.cloudinaryImageId}`}/>
                    <p>{restaurant.cards[2].card.card.info.locality + " "+ restaurant.cards[2].card.card.info.areaName}</p>
                    <span>{restaurant.cards[2].card.card.info.avgRating} ★</span>
                    <h2>{restaurant.cards[2].name}</h2>
                </div>
            </div>

    );
}

export default RestaurantMenu;