import { useEffect, useState } from "react";
import Movie from "./Movie";
import Loading from "../components/Loading";
import styles from "./Slide.module.css";

// Home Slide show!
function Slide({ ytsApi }) {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [trans, setTrans] = useState(0);
  const onClickL = () => {
    if (trans >= 0) {
      return;
    }
    setTrans((current) => current + 350);
  };
  const onClickR = () => {
    if (trans <= -2450) {
      return;
    }
    setTrans((current) => current - 350);
  };

  // get ytsApi from Home.js seperated by group name.
  const getMovies = async () => {
    const json = await (await fetch(ytsApi)).json();
    setMovies(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.slide__show}>
        {loading ? (
          <Loading />
        ) : (
          <div
            className={styles.slide}
            style={{ transform: `translateX(${trans}px)` }}
          >
            {movies.map((movie) => {
              if (movie.medium_cover_image != null) {
                return (
                  <Movie
                    key={movie.id}
                    id={movie.id}
                    year={movie.year}
                    coverImg={movie.medium_cover_image}
                    title={movie.title}
                    summary={""}
                    genres={movie.genres}
                    movie_style={{
                      minWidth: "350px",
                      height: "300px",
                    }}
                  />
                );
              }
            })}
          </div>
        )}
      </div>
      {loading ? null : (
        <div>
          <button className={styles.left} onClick={onClickL}>
            <i className="fas fa-caret-square-left"></i>
          </button>
          <button className={styles.right} onClick={onClickR}>
            <i className="fas fa-caret-square-right"></i>
          </button>
        </div>
      )}
    </div>
  );
}

export default Slide;
