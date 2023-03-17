import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { listPageReLoading, focusNav } from "../atom/Atoms";
import Movie from "../components/Movie";
import Loading from "../components/Loading";
import styles from "./List.module.css";

const listNums = [...Array(10)].map((_, i) => i + 1);

function List() {
  const { num, detail } = useParams();
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [reloading, setReloading] = useRecoilState(listPageReLoading);
  const focusPage = useSetRecoilState(focusNav);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?page=${num}&${detail}&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
  };
  useEffect(() => {
    setReloading(false);
    setLoading(true);
    focusPage(detail);

    getMovies();
  }, [reloading]);

  return (
    <div>
      <div className={styles.container}>
        {loading ? (
          <Loading />
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
        <ul className={styles.footer}>
          {loading
            ? null
            : listNums.map((listNum) => (
                <li>
                  <Link
                    to={`/page/${detail}/${listNum}`}
                    onClick={() => setReloading(true)}
                    className={listNum == num ? styles.focusing : null}
                  >
                    {listNum}
                  </Link>
                </li>
              ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
