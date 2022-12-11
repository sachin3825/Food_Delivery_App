import React from "react";
import buffet from "../../assets/buffetImage.jpg";
import classes from "./Header.module.css";

import { HeaderCartButton } from "./HeaderCartButton";
export const Header = (props) => {
  return (
    <React.Fragment>
      <header className={classes.header}>
        <h1>FoodDeed</h1>
        <HeaderCartButton onClick={props.onShowCart} />
        <div className={classes.profileWrapper}>
          <img
            src="https://b.zmtcdn.com/data/user_profile_pictures/2ec/4c2fb82b0a2d671acf25b127547a32ec.jpg?fit=around%7C100%3A100&crop=100%3A100%3B%2A%2C%2A"
            alt="Profile"
            className={classes.headerProfileImage}
          />
          <span className={classes["header-username"]}>Sachin</span>
          <i class="fa-solid fa-chevron-down profile-options-icon"></i>
        </div>
      </header>
      <button>Cart</button>
      <div className={classes["main-image"]}>
        <img src={buffet} alt="table full delicious food" />
      </div>
    </React.Fragment>
  );
};
