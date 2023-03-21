import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import MovieSearch from "../components/MovieSearch";
import styles from "./Search.module.css"

function Search() {
  const { search, id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movArr, setMovArr] = useState([]);

  const getMovie = () => {
    // console.log(`getmovie`)
    for (let i = 1; i <= 100; i++) {
      setLoading(true);
      setMovies([]);
      fetch(`https://yts.mx/api/v2/list_movies.json?page=${i}&sort_by=rating`)
        .then((res) => res.json())
        .then((json) => setMovies(json.data.movies));
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    setMovArr([]);
    getMovie();

    return;
  }, [search]);
  
  useEffect(() => {
    setMovArr(
      [
        movArr,
        ...[
          movies.filter(
            (movie) =>
              movie.summary.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
              movie.title.toLowerCase().indexOf(search.toLowerCase()) !== -1 || 
              movie.description_full.toLowerCase().indexOf(search.toLowerCase()) !== -1
          ),
        ],
      ]
        .flat() //Infinity
        .map((movie, i, arr) => {
          for (let j = i + 1; j < arr.length; j++) {
            if (
              movie.id === arr[j].id &&
              arr[j] !== undefined &&
              movie !== undefined
            ) {
              arr.splice(j, 1);
              j -= 1;
            }
          }
          return movie;
        })
        .sort((a, b) => b["rating"] - a["rating"])
    );
  }, [movies]);
//   console.log(movArr);

  return (
    <div className={styles.container}>
      {loading ? (
        <Loading />
      ) : (
        <div className={styles.movies}>
          {movArr.map((movie) => (
            <MovieSearch
              key={movie.id}
              id={movie.id}
              title={movie.title}
              coverImg={movie.medium_cover_image}
              rating={movie.rating}
              runtime={movie.runtime}
              summary={movie.summary}
              year={movie.year}
            />
          ))}
        </div>
      )}
    </div>
  );
};
export default Search;