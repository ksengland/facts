import React, { useEffect, useState } from "react";
import "./App.css";
import Movie from "./Movie";

const App = () => {
  const url =
    "https://api.themoviedb.org/3/movie/popular?api_key=bc243bbf57d0b71550a65828cdd9a0b1&language=en-US&page=1";

  const [popular, setPopular] = useState([]);
  useEffect(() => {
    fetchPopular();
  }, []);
  const fetchPopular = async () => {
    const data = await fetch(url);
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
  };
  return (
    <div className="App">
      <h1>Today's Popular Movies</h1>
      <div className="popular-movies">
        {popular.map((movie) => {
          return <Movie key={movie.id} movie={movie} />;
        })}
      </div>
    </div>
  );
};
export default App;
