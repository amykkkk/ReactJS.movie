import PropTypes from "prop-types";

function Movie({ coverImg, title, summary, genres }) {
  return (
    <div>
      <img src={coverImg} alt={title}/>
      <h2>{title}</h2>
      <p>{summary}</p>
      <ul>
        {/* genres 없거나 && genres가 [array]이기 때문에 map으로 가져옴 */}
        {genres &&
          genres.map(
            (g) => <li key={g}>{g}</li> // key❌ > 고유한 값(g)를 key로 써줌
          )}
      </ul>
    </div>
  );
}
Movie.prototype = {
    coverImg: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;