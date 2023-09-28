import React from "react";
import styles from "./TouristicItem.module.css";
import { BsBookmark } from "react-icons/bs";
import { BsBookmarkFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { bookmarkHandler } from "../store/store";
import { HiOutlineLocationMarker } from "react-icons/hi";

const TouristicItem = ({ item }) => {
  const dispatch = useDispatch();
  function clickHandler() {
    dispatch(bookmarkHandler(item.id));
  }

  return (
    <div className={styles["item-container"]}>
      <div className={styles["item-image"]}>
        <img src={`${item.photo}`} alt="place" />
      </div>
      <div className={styles["item-details"]}>
        <div className={styles["item-data"]}>
          <p className={styles["item-name"]}>{item.name}</p>
          <p className={styles["item-location"]}>
            <HiOutlineLocationMarker />
            {item.location}
          </p>
        </div>
        <div className={styles["item-action"]}>
          <p>
            {item.bookmarked ? (
              <BsBookmarkFill
                className={styles["bookmark-fill"]}
                onClick={clickHandler}
              />
            ) : (
              <BsBookmark
                className={styles["bookmark"]}
                onClick={clickHandler}
              />
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TouristicItem;
