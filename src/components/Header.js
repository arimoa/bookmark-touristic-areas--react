import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const places = useSelector((state) => state.places);
  const bookmarked_Items = places.filter((item) => item.bookmarked === true);

  const [path, setPath] = useState(window.location.href);
  useEffect(() => {
    setPath(window.location.href);
  }, []);
  return (
    <header className={styles["header-container"]}>
      <p className={styles["header-title"]}>Top Touristic Places</p>
      <ul className={styles["header-actions"]}>
        <li>
          <Link
            to="/"
            className={
              !path.includes(`bookmarks`)
                ? styles[`active-link`]
                : styles[`header-links`]
            }
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/bookmarks"
            className={
              path.includes(`bookmarks`)
                ? styles[`active-link`]
                : styles[`header-links`]
            }
          >
            <span>Bookmarks</span>
            <span className={styles["bookmarks-number"]}>
              {bookmarked_Items.length}
            </span>
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
