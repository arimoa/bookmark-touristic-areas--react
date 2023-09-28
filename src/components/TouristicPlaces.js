import React from "react";
import TouristicItem from "./TouristicItem";
import Card from "./UI/Card";
import { useSelector } from "react-redux";

const TouristicPlaces = () => {
  const places = useSelector((state) => state.places);
  return (
    <Card>
      {places.map((place) => (
        <TouristicItem key={place.id} item={place} />
      ))}
    </Card>
  );
};

export default TouristicPlaces;
