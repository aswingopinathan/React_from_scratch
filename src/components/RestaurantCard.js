const RestaurantCard = (props)=>{
    return (
        <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
            <img className='res-logo' alt='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/d1e7c643a685fb3413fab51f30d1e95d"></img>
            <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4>
            <h4>4.4 rating</h4>
            <h4>30 minutes</h4>
        </div>
    )
}

export default RestaurantCard;