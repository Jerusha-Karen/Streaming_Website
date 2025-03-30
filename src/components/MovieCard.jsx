import React from 'react';

function MovieCard({ movie }) {
  return (
    <div className="flex-shrink-0 w-[110px] md:w-[200px]  rounded-lg 
    hover:border-[3px] border-gray-400 transition-all duration-150 ease-in
    hover:scale-110" >
      <img
        src={movie.poster_path
          ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
          : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
        onError={(e) => e.target.src = 'https://via.placeholder.com/500'}
      />
    </div>
  );
}

export default MovieCard;
