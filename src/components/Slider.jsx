import React, { useState, useEffect, useRef } from "react";
import GlobalAPI from "../services/GlobalAPI";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/original";
const screenWidth = window.innerWidth;

const Slider = () => {
  const [movieList, setMovieList] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    getTrendingMovies();
  }, []);

  const getTrendingMovies = () => {
    GlobalAPI.getTrendingVideos().then((resp) => {
      setMovieList(resp.data.results);
    });
  };

  const slideRight = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft += screenWidth - 40;
    }
  };

  const slideLeft = () => {
    if (elementRef.current) {
      elementRef.current.scrollLeft -= screenWidth - 40;
    }
  };

  return (
    <div className="relative w-full h-[350px]"> {/* Increased height */}

     <h2 className="text-3xl italic text-white text-center mb-4">
        ✨ Where Every Night is a Binge Night!! 🍿
      </h2>

      <HiChevronLeft
        className="hidden md:block text-white text-[30px] absolute mx-8 mt-[200px] cursor-pointer"
        onClick={slideLeft}
      />
      <HiChevronRight
        className="hidden md:block text-white text-[30px] absolute mt-[200px] mx-8 cursor-pointer right-0"
        onClick={slideRight}
      />
      <div
        ref={elementRef}
        className="flex overflow-x-scroll scrollbar-none scroll-smooth w-full h-full space-x-8 px-6"
      >
        {movieList.map((item) => (
          item.backdrop_path && (
            <img
              key={item.id}
              src={IMAGE_BASE_URL + item.backdrop_path}
              alt={item.title || "Movie Image"}
              className="w-full h-full object-cover object-left-top
               flex-shrink-0 mr-5 rounded-md hover:border-[4px] border-gray-400
               transition-all duration-100 ease-in-out"
            />
          )
        ))}
      </div>
    </div>
  );
};

export default Slider;
