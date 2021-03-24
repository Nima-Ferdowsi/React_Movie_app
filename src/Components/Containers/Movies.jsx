import  React,{ Fragment, useContext, useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet";
import Filter from "../Filter";
import Nav from "./../Common/Nav";
import { Movies, TV, Search, Genres } from "./../../js/MovieApi";
import Context from "./../../context/Context";
import Footer from "../Common/Footer";
import Items from "./Items";

const Movie = (props) => {
  const [items, setItems] = useState();
  const [show, setShow] = useState(false);

  const tvRef = useRef(null);
  const movieRef = useRef(null);
  const genresRef = useRef(null);
  const searchRef = useRef(null);
  const queryRef = useRef(null);

  const context = useContext(Context);

  const collapse = () => {
    var coll = document.getElementsByClassName("collapsible");
    var i;
    for (i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function (e) {
        if (e.target.classList.contains("list-group-item")) {
          this.classList.toggle("active");
          var content = this.children[1];
          if (content.style.maxHeight) {
            content.style.maxHeight = null;
          } else {
            content.style.maxHeight = "200px";
            content.style.height = "200px";
          }
        }
      });
    }
  };

  const pushToDetailes = (data, type) => {
    for (let j = 0; j < data.length; j++) {
      const el = data[j];
      let cards = document.querySelectorAll(".search-card ");
      cards[j].addEventListener("click", () => {
        context.handleid(el.id, type);
      });
    }
  };
  let type = JSON.parse(localStorage.getItem("SearchType"));

  useEffect(async () => {
    let type = JSON.parse(localStorage.getItem("SearchType"));

    if (type.type === "movies") {
      const data = await Movies(type.content);
      setItems(data);
      setShow(true);
      pushToDetailes(data,'movie');
    } else if (type.type === "tv") {
      const data = await TV(type.content);
      setItems(data);
      setShow(true);
      pushToDetailes(data,'series');

    } else if (type.type === "search") {
      const data = await Search(type.content);
      setItems(data);
      setShow(true);
      pushToDetailes(data,'movie');

    } else if (type.type === "genres") {
      const data = await Genres(type.content);
      setItems(data);
      setShow(true);
      pushToDetailes(data,'movie');

    }
    tvRef.current.addEventListener("click", async function (e) {
      if (e.target.tagName === "LI") {
        setShow(false);

        const data = await TV(e.target.getAttribute("data-tv-type"));
        setItems(data);
        setShow(true);

        pushToDetailes(data,'series');

      }
    });
    movieRef.current.addEventListener("click", async function (e) {
      if (e.target.tagName === "LI") {
        setShow(false);

        const data = await Movies(e.target.getAttribute("data-movie-type"));
        setItems(data);
        setShow(true);

        pushToDetailes(data,'movie');

      }
    });
    genresRef.current.addEventListener("click", async function (e) {
      if (e.target.tagName === "LI") {
        setShow(false);
        const data = await Genres(e.target.getAttribute("data-gener-id"));
        setItems(data);
        setShow(true);
        pushToDetailes(data,'movie');

      }
    });
    searchRef.current.addEventListener("click", async () => {
      if (queryRef.current.value !== "" && queryRef.current.value !== " ") {
        setShow(false);
        const data = await Search(queryRef.current.value);
        setItems(data);
        setShow(true);
        pushToDetailes(data,'movie');

      }
    });

    collapse();
  }, []);
  return (
    <Fragment>
      <Helmet>
        <title>Movie</title>
        <link rel="stylesheet" href="css/movie-tv.css" />
        <link rel="stylesheet" href="css/Search.css" />
      </Helmet>
      <Nav
        loc={props.loc}
        tvRef={tvRef}
        movieRef={movieRef}
        serchRef={searchRef}
        queryRef={queryRef}
        genre={genresRef}
      />
      <div className="container-fluid" style={{ paddingTop: 50 }}>
        <div className="row">
          <Filter />
          {show ? <Items items={items} type={type.type} /> : null}
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Movie;
