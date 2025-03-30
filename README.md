# Movie Explorer

Movie Explorer is an interactive and responsive web application built using React with Vite. It fetches movie data from [TMDB (The Movie Database)](https://www.themoviedb.org/) API and provides users with an engaging experience to explore movies by genres, production houses, and more.

## Features

- **Movie Listings:** Displays a collection of movies categorized by genre.
- **Movie Details:** View detailed information about each movie.
- **Carousel/Slider:** Showcases trending or top-rated movies.
- **Responsive Design:** Optimized for different screen sizes and devices.
- **API Integration:** Fetches real-time movie data from TMDB API.

## Technologies Used

- **Frontend:** React, Vite, JSX
- **State Management:** Context API 
- **Styling:** Tailwind CSS 
- **API:** TMDB API
- **Hosting:** Vercel&#x20;

## Installation and Setup

### Prerequisites

Ensure you have the following installed:

- Node.js (latest LTS recommended)
- npm or yarn

### Steps to Run the Project

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/movie-explorer.git
   ```
2. Navigate to the project directory:
   ```sh
   cd movie-explorer
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```
4. Create a `.env` file in the root directory and add your TMDB API key:
   ```env
   VITE_TMDB_API_KEY=your_api_key_here
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```
6. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## Folder Structure

```
src/
├── assets/
│   ├── images/
│   ├── videos/
├── components/
│   ├── GenreMovieList.jsx
│   ├── Header.jsx
│   ├── HeaderItem.jsx
│   ├── MovieCard.jsx
│   ├── MovieList.jsx
│   ├── ProductionHouse.jsx
│   ├── Quiz.jsx
│   ├── Slider.jsx
├── services/
│   ├── GlobalAPI.jsx
├── Constant/
├── App.jsx
├── App.css
├── index.css
├── main.jsx
├── .env
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
├── README.md
```

## API Usage

The project utilizes TMDB API for fetching movie data.

- Sign up at [TMDB](https://www.themoviedb.org/) and obtain an API key.
- Store the API key in `.env` as mentioned in the setup.
- API requests are handled in `services/GlobalAPI.jsx`.

## Deployment

To deploy the project:

1. Build the project:
   ```sh
   npm run build
   ```
2. Deploy using Vercel, Netlify, or Firebase.

## Contributing

Feel free to fork the repository and create a pull request with improvements.

## License

This project is licensed under the MIT License.

---

### Author

Karen....

