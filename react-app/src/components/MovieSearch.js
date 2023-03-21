import PropTypes from "prop-types";
import {Link} from "react-router-dom";
import styles from "./Movie.module.css";
import default_Img from "./Img/default_Img.jpeg";

const onErrorImg = (e) => {
  e.target.src = default_Img;
};

function MovieSearch({
  id,
  coverImg,
  title,
  rating,
  runtime,
  year,
  summary,
  genres,
  movie_style,
}) {
  if (coverImg == "") {
    return null;
  }
  return (
    <Link to={`/movie/${id}`}>
      <div className={styles.movie} style={movie_style}>
        <img
          src={coverImg}
          alt={title}
          className={styles.movie_img}
          onError={onErrorImg}
        />
        <div>
          <h2 className={styles.movie_title}>
            {title && title.length > 25 ? `${title.slice(0, 25)}...` : title}
          </h2>
          <br />
          <p className={styles.movie_year}>
            <strong>Year:</strong> {year}
          </p>
          <p>
            <strong>Raing:</strong> {rating}
          </p>
          <p>
            <strong>Runtime:</strong> {runtime}
          </p>
          <p className={styles.movie_genres}>
            <strong>Genres: &nbsp;</strong>
            {/* genres 없거나 && genres가 [array]이기 때문에 map으로 가져옴 */}
            {genres &&
              genres.map(
                (g) => <span key={g}>{g} / </span> // key❌ > 고유한 값(g)를 key로 써줌
              )}
          </p>
          <br />
          <p className={styles.movie__summary}>
            {summary && summary.length > 180
              ? `${summary.slice(0, 180)}...`
              : summary}
          </p>
        </div>
      </div>
    </Link>
  );
}
MovieSearch.prototype = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  runtime: PropTypes.number,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieSearch;