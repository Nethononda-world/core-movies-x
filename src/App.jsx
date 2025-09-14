
import React, { useEffect, useState } from 'react';
import NavigationBar from './components/navigationBar.jsx';
import Hero from './sections/hero.jsx';
import Search from './components/search.jsx';
import MovieCard from './components/movieCard.jsx';
import Footer from './sections/footer.jsx';

const DISCOVER_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc";
const SEARCH_URL = "https://api.themoviedb.org/3/search/movie?query=";
const GENRE_URL = 'https://api.themoviedb.org/3/genre/movie/list';

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0YjUzMmM2NTRlMTVjMzM3YzAzMTVmMDBlNTU2MjAxYiIsIm5iZiI6MTc1Nzc2OTA3OC40MTI5OTk5LCJzdWIiOiI2OGM1NmQ3NjVmMWI2NjVkNzJhODYwOTAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.yvkDjB8XFtB6egaHfdytivxg1UwgwnnXYvphJ3ElIAE",
  },
};

const App = () => {
  const [search, setSearch] = useState("");
  const [movieList, setMovieList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [genres, setGenres] = useState({}); 

  
  async function fetchGenres() {
    try {
      const response = await fetch(GENRE_URL, API_OPTIONS);
      if (!response.ok) throw new Error("Failed to fetch genres");
      const data = await response.json();
      const genreMap = {};
      data.genres.forEach((genre) => {
        genreMap[genre.id] = genre.name;
      });
      setGenres(genreMap);
    } catch (error) {
      console.error(error);
    }
  }

  
  async function fetchMovies(url) {
    setIsLoading(true);
    setErrorMessage("");
    try {
      const response = await fetch(url, API_OPTIONS);
      if (!response.ok) throw new Error("Failed to fetch movies");
      const data = await response.json();
      setMovieList(data.results || []);
    } catch (error) {
      console.error(error);
      setErrorMessage("Movies failed to load");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    fetchGenres();          
    fetchMovies(DISCOVER_URL);
  }, []);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (search.trim()) {
        fetchMovies(`${SEARCH_URL}${encodeURIComponent(search)}`);
      } else {
        fetchMovies(DISCOVER_URL);
      }
    }, 500);

    return () => clearTimeout(delayDebounce);
  }, [search]);

  return (
    <main className="min-h-screen flex flex-col bg-white text-center items-center p-0 gap-6">
      <NavigationBar />
      <section className="w-full"><Hero /></section>
      <section className="flex justify-center items-center w-full">
        <Search search={search} setSearch={setSearch} />
      </section>

      <section className="flex flex-col gap-6 w-full">
        <div className="text-start w-full">
          <h1 className="text-lg sm:text-xl ml-3 md:text-2xl font-bold mb-4 text-gray-500">
            {search.trim() ? `Search Results for "${search}"` : "Popular Movies"}
          </h1>

          {isLoading ? (
            <div role="status" className='justify-center item-center'>
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          ) : errorMessage ? (
            <p className="text-red-500 font-medium">{errorMessage}</p>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-6 w-full">
              {movieList.map((movie) => (
                <MovieCard
                  key={movie.id}
                  name={movie.title}
                  pic={movie.poster_path}
                  ratings={movie.vote_average}
                  date={movie.release_date}
                  genre={movie.genre_ids.length > 0 ? genres[movie.genre_ids[0]] : "Unknown"}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default App;
