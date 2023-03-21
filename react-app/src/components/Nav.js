import { useState } from "react";
import { Link } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { listPageReLoading, focusNav } from "../atom/Atoms";
import { Group_obj, Group_key_arr } from "../atom/NavList";
import styles from "./Nav.module.css";

function Nav() {
    let last_known_scroll_position = 0;
    let ticking = false;
    const [changing, setChanging] = useState(false); // nav hover
    const [scrolling, setScrolling] = useState(false); // scroll

    const pageReLoading = useSetRecoilState(listPageReLoading); // re-loaing
    const [focusPath, setFocusPath] = useRecoilState(focusNav); // recoil
    const [search, setSearch] = useState(""); // search

    const searchClick = (event) => {
      setSearch(event.target.value);
    };

    const doSomething = (scroll_pos) => {
      if (scroll_pos >= 10) {
        setChanging(true);
        setScrolling(true);
      } else {
        setChanging(false);
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", function (e) {
        last_known_scroll_position = window.scrollY;
        if (!ticking) {
        window.requestAnimationFrame(function () {
            doSomething(last_known_scroll_position);
            ticking = false;
        });
        ticking = true;
        }
    });

    const optionOnClick = () => {
        pageReLoading(true);
    };
    const onMouseOverOut = () => {
        if (scrolling) return;
        setChanging((current) => !current);
    };

    return (
      <div>
        <nav
          onMouseOver={onMouseOverOut}
          onMouseOut={onMouseOverOut}
          className={styles.container}
          style={
            changing
              ? {
                  backgroundColor: "#58398c",
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,rgba(0, 0, 0, 0.3) 0px 8px 16px -8px",
                }
              : { backgroundColor: "transparent" }
          }
        >
          <h1 className={styles.title}>
            <Link to="/" onClick={() => setFocusPath("")}>
              <i className="fab fa-neos"></i>
              <strong>AKFLEX</strong>
            </Link>
          </h1>

          <ul className={styles.option__list}>
            {Group_key_arr.map((key) => {
              return (
                <li className={styles.Link} key={key}>
                  <Link
                    to={`/page/${Group_obj[key]}/1`}
                    onClick={
                      focusPath !== Group_obj[key] ? optionOnClick : null
                    }
                    style={
                      focusPath !== Group_obj[key]
                        ? null
                        : {
                            color: "#fff",
                            opacity: "1",
                            textTransform: "uppercase",
                          }
                    }
                  >
                    {key}
                  </Link>
                </li>
              );
            })}

            <div className={styles.searchBar}>
              <div>
                <form>
                  <input
                    type="text"
                    placeholder="Search Movie"
                    value={search}
                    onChange={searchClick}
                  />
                  <Link to={`/search/${search}`}>
                    <button
                      style={
                        changing ? { color: "#faccff" } : { color: "#fff" }
                      }
                    >
                      <i className="fas fa-search"></i>
                    </button>
                  </Link>
                </form>
              </div>
            </div>
          </ul>
        </nav>
      </div>
    );
}

export default Nav;
