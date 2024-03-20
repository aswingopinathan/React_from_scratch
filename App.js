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
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root1"));

root.render(<AppLayout />);

