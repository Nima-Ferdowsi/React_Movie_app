export const Movies = (type, getMovie) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  fetch(
    `https://api.themoviedb.org/3/movie/${type}?api_key=56ecd3ba9ed01d2b686cf85f49f21d45&language=en-US&page=1`
  )
    .then((data) => data.json())
    .then((json) => {
      let main = document.querySelector(".main");

      main.innerHTML = "";

      json.results.forEach((elem) => {
        main.innerHTML += `<div class="card-deck col-md-4 col-lg-4 col-6">
  <div class="card">
      <img class="search-card rounded card-img-top" src="${
        IMGPATH + elem.poster_path
      }">


    <div class="card-footer">
      <h4 class="font-weight-light">${elem.title}</h4>
      <div class="Circle-rate">
        <svg class="circle-chart" viewBox="0 0 30 30" width="40" height="40" fill="transparent">
          <circle class="circle-chart__background" stroke="#eee" stroke-width="2" fill="none" cx="15" cy="15"
            r="14"></circle>
          <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="80,100" cx="15"
            cy="15" r="14"></circle>
        </svg>
        <b class="rate-number">${elem.vote_average}</b>
      </div>
      <span class="font-weigth-light" style="display: block;">${
        elem.release_date
      } </span>
    </div>
  </div>
  </div>`;


      });
      for (let j = 0; j < json.results.length; j++) {
        const el = json.results[j];
        console.log(el.id);

        let cards = document.querySelectorAll(".search-card ");
        cards[j].addEventListener("click", () => {getMovie(el.id ,'movie')});

     
      }
    });
};
export const TV = (type , getTV) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  fetch(
    `https://api.themoviedb.org/3/tv/${type}?api_key=56ecd3ba9ed01d2b686cf85f49f21d45&language=en-US&page=1`
  )
    .then((data) => data.json())
    .then((json) => {
      let main = document.querySelector(".main");

      main.innerHTML = "";
      console.log(json);
      json.results.forEach((elem) => {
        main.innerHTML += `<div class="card-deck col-md-4 col-lg-4 col-6">
  <div class="card">
      <img class="search-card rounded card-img-top" src="${
        IMGPATH + elem.poster_path
      }">


    <div class="card-footer">
      <h4 class="font-weight-light">${elem.name}</h4>
      <div class="Circle-rate">
        <svg class="circle-chart" viewBox="0 0 30 30" width="40" height="40" fill="transparent">
          <circle class="circle-chart__background" stroke="#eee" stroke-width="2" fill="none" cx="15" cy="15"
            r="14"></circle>
          <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="80,100" cx="15"
            cy="15" r="14"></circle>
        </svg>
        <b class="rate-number">${elem.vote_average}</b>
      </div>
      <span class="font-weigth-light" style="display: block;">${
        elem.first_air_date
      } </span>
    </div>
  </div>
  </div>`;
      });
      for (let j = 0; j < json.results.length; j++) {
        const el = json.results[j];
        console.log(el.id);

        let cards = document.querySelectorAll(".search-card ");
        cards[j].addEventListener("click", () => {getTV(el.id ,'series')});

     
      }
    });
};
export const Search = (query , getMovie) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=56ecd3ba9ed01d2b686cf85f49f21d45&language=en-US&query=${query}&page=1&include_adult=false`
  )
    .then((data) => data.json())
    .then((json) => {
      let main = document.querySelector(".main");

      main.innerHTML = "";
      console.log(json);
      json.results.forEach((elem) => {
        main.innerHTML += `<div class="card-deck col-md-4 col-lg-4 col-6">
  <div class="card">
      <img class="search-card rounded card-img-top" src="${
        IMGPATH + elem.poster_path
      }">


      <div class="card-footer">
      <h4 class="font-weight-light">${elem.title}</h4>
      <div class="Circle-rate">
        <svg class="circle-chart" viewBox="0 0 30 30" width="40" height="40" fill="transparent">
          <circle class="circle-chart__background" stroke="#eee" stroke-width="2" fill="none" cx="15" cy="15"
            r="14"></circle>
          <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="80,100" cx="15"
            cy="15" r="14"></circle>
        </svg>
        <b class="rate-number">${elem.vote_average}</b>
      </div>
      <span class="font-weigth-light" style="display: block;">${
        elem.release_date
      } </span>
    </div>
  </div>
  </div>`;
      });
      for (let j = 0; j < json.results.length; j++) {
        const el = json.results[j];
        console.log(el.id);

        let cards = document.querySelectorAll(".search-card ");
        cards[j].addEventListener("click", () => {getMovie(el.id ,'movie')});

     
      }
    });
};

export const Genres = (genres, getMovie) => {
  const IMGPATH = "https://image.tmdb.org/t/p/w1280";

  fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=56ecd3ba9ed01d2b686cf85f49f21d45&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genres}`
  )
    .then((data) => data.json())
    .then((json) => {
      let main = document.querySelector(".main");

      main.innerHTML = "";

      json.results.forEach((elem) => {
        main.innerHTML += `<div class="card-deck col-md-4 col-lg-4 col-6">
  <div class="card">
      <img class="search-card rounded card-img-top" src="${
        IMGPATH + elem.poster_path
      }">


    <div class="card-footer">
      <h4 class="font-weight-light">${elem.title}</h4>
      <div class="Circle-rate">
        <svg class="circle-chart" viewBox="0 0 30 30" width="40" height="40" fill="transparent">
          <circle class="circle-chart__background" stroke="#eee" stroke-width="2" fill="none" cx="15" cy="15"
            r="14"></circle>
          <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="80,100" cx="15"
            cy="15" r="14"></circle>
        </svg>
        <b class="rate-number">${elem.vote_average}</b>
      </div>
      <span class="font-weigth-light" style="display: block;">${
        elem.release_date
      } </span>
    </div>
  </div>
  </div>`;


      });
      for (let j = 0; j < json.results.length; j++) {
        const el = json.results[j];
        console.log(el.id);

        let cards = document.querySelectorAll(".search-card ");
        cards[j].addEventListener("click", () => {getMovie(el.id ,'movie')});

     
      }
    });
};
