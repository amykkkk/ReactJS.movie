import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slide from "../components/Slide";
import Loading from "../components/Loading";
import navList from "../atom/NavList";
import styles from "./Home.module.css";

function Home() {
  const [movieContents, setMovieContents] = useState([]);
  
  useEffect(() => {
    const request = navList.map(({ title, path }) => {
      return axios.get("https://yts.mx/api/v2/list_movies.json?" + path, {
        params: {
          limit: 10,
          sort_by: "year",
        }
      })
    })

    axios.all(request).then(
      axios.spread(async (...response) => {
        const data = await response.map((res) => {
          if (res.status === 200) {
            return res.data.data.movies;
          }
        });

        setMovieContents(data);
      })
    );
  }, []);

  return (
    <div className={styles.container}>
      {navList.map((slide, idx) => {
        return (
          <div className={styles.slide__box} key={idx}>
            <h3 className={styles.title}>
              <Link to={`/page/${slide.path}/1`}>
                <i className="fas fa-external-link-alt"></i>
                <span>{slide.title} Movie</span>
              </Link>
            </h3>
            {movieContents && movieContents.length === 0 ? (
              <Loading />
            ) : (
              <Slide movieContents={movieContents[idx]} />
            )}
          </div>
        );
      })}
      <div className={styles.footer}>
        <div className={styles.copyright}>
          <h3 className={styles.copyright_letter}>
            Copyright belongs to Amy K
          </h3>
        </div>
      </div>
    </div>
  );
}

export default Home;
