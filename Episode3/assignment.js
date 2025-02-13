import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; 

const Header = function () {
 return  (  
    <div className="header">
            <img className="logo" src="https://imgs.search.brave.com/asXr7BoFuUH9wlh9IJuWFByv_nQlFme_eujm8vFBzzo/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2FpLmNvbS9v/c3MvaWNvbnMvMjAy/MS8xMi8wMS9nbWwt/NjljRWV4TDJwODIu/cG5n" />
          <input type="text" placeholder="Serch..." className="search-bar"></input>
          <img className="user-icon" src="https://imgs.search.brave.com/c-ZkmWHi90ABMwIgXuOM9t7PIR6CWntGKT6GhpwE32A/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzAwLzY1Lzc3LzI3/LzM2MF9GXzY1Nzcy/NzE5X0ExVVY1a0xp/NW5DRVdJMEJOTExp/RmFCUEVrVWJ2NUZ2/LmpwZw" />
    </div>
 )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);

