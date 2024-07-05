import { useState, useEffect } from "react";
import ResturantList from "./Restaurant"
import { restaurants , IMG_CDN_LINK } from "../contant";
import Shimer from "./Shimer";

function filterData(searchText,restaurant){
  return  restaurant?.filter((restaurant)=>restaurant.info.name.toLowerCase().includes(searchText.toLowerCase()));
  
}




const Body=()=>{
  const [searchText,setSearchText]=useState("");
  const [allRestaurant,setAllRestaurant]=useState([]);
  const [filterRestaurant,setFilterRestaurant]=useState([]);

  useEffect(()=>{
    getResturant();
  },[]);

  async function getResturant(){
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.61450&lng=77.30630&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json=await data.json();
    setAllRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }



    return (allRestaurant.length===0)? <Shimer /> : (
      <>
      <input type="text" value={searchText} onChange={(e)=>setSearchText(e.target.value)} />
     <button  className="search-btn" onClick={()=>{
      setFilterRestaurant(filterData(searchText,allRestaurant));
     }
    }
     >Search</button>
      <ResturantList {...[filterRestaurant]}/>
      </>
    )
  }

  export default Body;