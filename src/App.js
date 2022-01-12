import "./App.css";
import "./assests/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./pages/Header";
import { useEffect } from "react";
import axios from "axios";
import MovieList from "./pages/MovieList";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, setBanner } from "./redux/reducer/moviesSlice";
import Banner from "./pages/Banner";
import SelectedMovie from "./pages/SelectedMovie";
function App() {
  const dispatch = useDispatch();
  const moviesData = useSelector((state) => state.Movies.movies);
  const bannerData = useSelector((state) => state.Movies.banner);
  const selectedMovie = useSelector((state) => state.Movies.selectMovie);
  const moviesListUrl =
    "http://api.themoviedb.org/3/search/movie?api_key=48b43c71c226d58239efb833d05ab17c&language=en-US&query=NASA&page=1&include_adult=false/";
  const BannerUrl =
    "https://api.nasa.gov/planetary/apod?api_key=SPkLKA7bCBamNIY9kJ4ceIeWB67uFjxP5lXkQeNR";
  useEffect(() => {
    axios.get(BannerUrl).then((res) => {
      dispatch(setBanner(res.data));
    });
    axios.get(moviesListUrl).then((res) => {
      dispatch(fetchMovies(res.data.results));
    });
  }, [dispatch]);
  return (
    <div className="App">
      <Header />
      {selectedMovie ? <SelectedMovie /> : <Banner bannerData={bannerData} />}
      <MovieList moviesData={moviesData} />
    </div>
  );
}

export default App;
