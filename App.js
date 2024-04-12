import React from "react"
import ReactDOM from "react-dom"

/**
 * Header
 * -Logo
 * -Nav items
 * Body
 * -Search
 * -Restaurant container
 *  -Restaurantcard
 *      -Img
 *      -Name of res, star rating, cuisine, delvery time
 * Footer
 * -Copyright
 * -Links
 * -Address
 * Contact
 * 
 */

const Header = ()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCard = ()=>{
    return (
        <div className="res-card" style={styleCard}>
            <img className='res-logo' alt='res-logo' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/d1e7c643a685fb3413fab51f30d1e95d"></img>
            <h3>Sreenandhaas Foods</h3>
            <h4>Biriyani</h4>
            <h4>4.4 rating</h4>
            <h4>30 minutes</h4>
        </div>
    )
}

const Body = ()=>{
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />

            </div>
        </div>
    )
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root1"));

root.render(<AppLayout />);

