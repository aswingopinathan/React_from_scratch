import RestaurantCard from "./RestaurantCard"

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard resName="Sreenandhas Foods" cuisine="Biriyani"/>
                <RestaurantCard resName="KFC" cuisine="Fast Food"/>
            </div>
        </div>
    )
}

export default Body;