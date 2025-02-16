import React from 'react';
import ReactDOM from 'react-dom/client';
import zomatoData from './zomato-data';

const root = ReactDOM.createRoot(document.getElementById("root"));

const Header = () => {
    return (
        <div id="header-container">
            <h1>My Food App</h1>
            <div id="nav-list">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Cart 🛒</a></li>
                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = ({ restaurant }) => {
    const { name, image, rating, locality } = restaurant.info;

    return (
        <div className="card">
            <img src={image?.url} alt="Restaurant" />
            <h2>{name}</h2>
            <p>⭐ {rating?.rating_text} ({rating?.votes} Reviews)</p>
            <p>{locality?.name}</p>
        </div>
    );
};

const Search = () => {
    return (
        <div className="search-container">
            <input type="text" placeholder="Search your Dish" />
            <button>Search</button>
        </div>
    );
};

const Body = () => {
    return (
        <div id="body-container">
            {zomatoData.map((curRestaurant, index) => (
                <RestaurantCard key={index} restaurant={curRestaurant} />
            ))}
        </div>
    );
};

const Footer = () => <footer className="footer">© 2025 My Food App</footer>;

const AppLayout = () => {
    return (
        <div>
            <Header />
            <Search />
            <Body />
            <Footer />
        </div>
    );
};

root.render(<AppLayout />);
