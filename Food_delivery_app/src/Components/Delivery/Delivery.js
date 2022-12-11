import React from "react";
import DeliveryCollection from "./DeliveryCollection";
import "./Delivery.css";
import TopBrands from "./topBrands/topBrands";
import ExploreSection from "./ExploreSection/ExploreSection";
import { restaurants } from "./Data/Resturant";

const resturantList = restaurants;

const Delivery = () => {
  return (
    <div className="max-width">
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection
        restaurants={resturantList}
        collectionName="Delivery Resturants in Mumbai"
      />
    </div>
  );
};

export default Delivery;
