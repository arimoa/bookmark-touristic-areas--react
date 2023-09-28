import React from "react";
import Header from "./Header";
import Card from "./UI/Card";
import styles from "./BookmarkPage.module.css";
import TouristicItem from "./TouristicItem";
import { useSelector } from "react-redux";

const BookmarkPage = () => {
  const alert = "Bookmark is Empty!";
  const places = useSelector((state) => state.places);
  const bookmarked_Items = places.filter((item) => item.bookmarked === true);
  return (
    <React.Fragment>
      <Header />
      <Card>
        {bookmarked_Items.length === 0 ? (
          <p className={styles["bookmark-alert"]}>{alert}</p>
        ) : (
          bookmarked_Items.map((place) => (
            <TouristicItem key={place.id} item={place} />
          ))
        )}
      </Card>
    </React.Fragment>
  );
};

export default BookmarkPage;
