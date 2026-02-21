import React from "react";

function MovieCard({ title, genre, poster }) {
  return (
    <div className="card">
      <img src={poster} alt={title} />
      <h3>{title}</h3>
      <p>{genre}</p>
      <button>Подробнее</button>
    </div>
  );
}

export default MovieCard;