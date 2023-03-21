import { Link } from "react-router-dom";
import Slide from "../components/Slide";
import styles from "./Home.module.css";
import { Group_obj, Group_key_arr } from "../atom/NavList";

function Home() {
  return (
    <div className={styles.container}>
      {Group_key_arr.map((group) => {
        return (
          <div className={styles.slide__box} key={group}>
            <h3 className={styles.title}>
              <Link to={`/page/${Group_obj[group]}/1`}>
                <i className="fas fa-external-link-alt"></i>
                <span>{group} Movie</span>
              </Link>
            </h3>
            <Slide
              ytsApi={`https://yts.mx/api/v2/list_movies.json?limit=10&${Group_obj[group]}&sort_by=rating`}
            />
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
