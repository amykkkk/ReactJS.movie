import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";

function Movie({ id, coverImg, title, year, summary, genres, movie_style }) {
  if (coverImg == "") {
    return null;
  }
  return (
    <div className={styles.movie} style={movie_style}>
      <img src={coverImg} alt={title} className={styles.movie_img} />
      <div>
        <h2 className={styles.movie_title}>
          <Link to={`/movie/${id}`}>
            {title && title.length > 50 ? `${title.slice(0, 50)}...` : title}
          </Link>
        </h2>
        <h3 className={styles.movie_year}>{year}</h3>
        <p className={styles.movie__summary}>
          {summary && summary.length > 235
            ? `${summary.slice(0, 235)}...`
            : summary}
        </p>
        <ul className={styles.movie_genres}>
          {/* genres 없거나 && genres가 [array]이기 때문에 map으로 가져옴 */}
          {genres &&
            genres.map(
              (g) => <li key={g}>{g}</li> // key❌ > 고유한 값(g)를 key로 써줌
            )}
        </ul>
      </div>
    </div>
  );
}
Movie.prototype = {
    id: PropTypes.number.isRequired,
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;