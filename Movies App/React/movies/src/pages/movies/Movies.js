import React, { useState } from "react";
import { useMovieContext } from "../../context/movieContext/movieContext";
import styles from "./movies.module.css";
function Movies(props) {
  const { movieData, loading, error } = useMovieContext();
  const [visibleMovies, setVisibleMovies] = useState(7);

  const handleShowMore = () => {
    setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + 5);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className={styles["movies-container"]}>
      <h1>Top 100 Movies</h1>
      <ul>
        {movieData.slice(0, visibleMovies).map((movie) => (
          <li key={movie.id} className={styles["movie-card"]}>
            <span className={styles["movie-title"]}>{movie.title}</span> -{" "}
            <span className={styles["movie-year"]}>{movie.year}</span>
            <p className={styles["movie-description"]}>{movie.description}</p>
            <img
              src={movie.image}
              alt={movie.title}
              className={styles["movie-poster"]}
            />
            <a
              href={movie.thumbnail}
              className={styles["imdb-link"]}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on IMDB
            </a>
          </li>
        ))}
      </ul>
      {visibleMovies < movieData.length && (
        <button className={styles["button"]} onClick={handleShowMore}>
          Show More
        </button>
      )}
    </div>
  );
}

export default Movies;
