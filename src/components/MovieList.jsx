import React, { useEffect, useState, useRef } from 'react';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';
import MovieCard from './MovieCard';
import GlobalApi from '../services/GlobalAPI';

function MovieList({ genreId }) {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const scrollRef = useRef(null); // Reference for scrolling

  useEffect(() => {
    if (!genreId) return;

    const fetchMovies = async () => {
      setLoading(true);
      const response = await GlobalApi.getMovieByGenreId(genreId);
      setMovies(response.data.results || []);
      setLoading(false);
    };

    fetchMovies();
  }, [genreId]);

  if (loading) return <p>Loading...</p>;
  if (movies.length === 0) return <p>No movies found.</p>;

  // Scroll Functions
  const slideLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft -= 500; // Adjust scroll distance as needed
    }
  };

  const slideRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft += 500; // Adjust scroll distance as needed
    }
  };

  return (
    <div className="relative w-full pt-5 px-3 pb-5">
      {/* Left Scroll Button */}
      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute left-0 top-[50%] transform -translate-y-1/2 mx-2 cursor-pointer z-10 bg-gray-900/50 rounded-full p-1"
        onClick={slideLeft}
      />

      {/* Movie List Container */}
      <div
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto gap-4 scrollbar-none scroll-smooth"
      >
        {movies.map((movie) => (
          <div key={movie.id} className="w-48 flex-shrink-0 group">
            <MovieCard movie={movie} />
            <p className="text-white text-center mt-2 pt-4 text-sm font-semibold transition duration-300 group-hover:shadow-text">
              {movie.title}
            </p>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute right-0 top-[50%] transform -translate-y-1/2 mx-2 cursor-pointer z-10 bg-gray-900/50 rounded-full p-1"
        onClick={slideRight}
      />
    </div>
  );
}

export default MovieList;
