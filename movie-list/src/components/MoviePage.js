import React from "react";
import MyList from "./MyList";
import Recommendations from "./Recommendations";

const MoviePage = () => {
  return (
    <div className="movie-page-container">
      <MyList />
      <Recommendations />
    </div>
  );
};

export default MoviePage;
