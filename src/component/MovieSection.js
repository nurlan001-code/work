import React from "react";
import MovieCard from "./MovieCard";

function MovieSection({ movies }) {
  return (
    <section className="section">
      <h2>Популярные фильмы</h2>
      <div className="cards">
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            title={movie.title}
            genre={movie.genre}
            poster={movie.poster}
          />
        ))}
      </div>
    </section>
  );
}

export default MovieSection;