import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3';
const api_key = '909ccbc69516e61edf4779d04245f368';

const movieByGenreBaseURL = `${movieBaseUrl}/discover/movie?api_key=${api_key}`;

// ✅ Fetch movies by genre (using Axios for consistency)
const getMovieByGenreId = async (id) => {
  if (!id) return { data: { results: [] } }; // Avoids unnecessary API calls

  try {
    const response = await axios.get(`${movieByGenreBaseURL}&with_genres=${id}`);
    return response; // Returns full Axios response
  } catch (error) {
    console.error("Error fetching movies:", error);
    return { data: { results: [] } }; // Returns empty data on error
  }
};

// ✅ Get trending movies
const getTrendingVideos = async () => {
  try {
    const response = await axios.get(`${movieBaseUrl}/trending/all/day?api_key=${api_key}`);
    return response;
  } catch (error) {
    console.error("Error fetching trending videos:", error);
    return { data: { results: [] } };
  }
};

export default {
  getTrendingVideos,
  getMovieByGenreId,
};
