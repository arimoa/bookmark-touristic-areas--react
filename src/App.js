import React from "react";
import Home from "./components/Home";
import BookmarkPage from "./components/BookmarkPage";
import GoToTopButton from "./components/UI/GoToTopButton";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/bookmarks" element={<BookmarkPage />}></Route>
      </Routes>
      <GoToTopButton />
    </React.Fragment>
  );
};

export default App;
