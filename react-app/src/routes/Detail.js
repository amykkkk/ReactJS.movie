import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MovieDetail from "../components/MovieDetail";
import Loading from "../components/Loading";
import styles from "./Home.module.css";

function Detail() {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [datas, setDatas] = useState([]);
    useEffect(() => {
      fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        .then((response) => response.json())
        .then((json) => {
          setDatas(json.data.movie);
          setLoading(false);
        });
    }, []);

    return (
      <div className={styles.container}>
        {loading ? (
          <Loading />
        ) : (
          <MovieDetail
            key={datas.id}
            id={datas.id}
            coverImg={datas.medium_cover_image}
            rating={datas.rating}
            runtime={datas.runtime}
            description_full={datas.description_full}
            background_image_original={datas.background_image_original}
            title={datas.title}
            genres={datas.genres}
            style_tag="Detail"
          />
        )}
      </div>
    );
};

export default Detail;