import { restaurants , IMG_CDN_LINK } from "../contant";
const ResturantCard=(info)=>{
    const {name,cloudinaryImageId,cuisines,avgRating,sla}=info;
      return(
          <div className="card">
          <img src={IMG_CDN_LINK+cloudinaryImageId} alt="images" />
          <h2>{name}</h2>
          <h5>{cuisines?.join(", ")}</h5>
          <h4 className='stars'> <span>★{avgRating}</span> {sla.slaString}</h4>
          </div>
      );
  };
  const ResturantList=(restaurant)=>{
      return (
        
        <div className="cards">
        {restaurant[0].map((rest)=>{
          return <ResturantCard {...rest.info} />
        })}
        </div>
      );
  }

  export default ResturantList;