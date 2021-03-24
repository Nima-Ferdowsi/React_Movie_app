import { Apiurl, ApiKey } from "../services/config.json";
import axios from "../services/Axios.js";

// home page causel info
export const getinfo = (imdbid) => {
  let imdbReview = document.querySelectorAll(".topcaptions p");
  let imdbRate = document.querySelectorAll(".topcaptions .Circle-rate b");
  let carouselRate = document.querySelectorAll(".topcaptions .carusel-year b");
  let carouselRunTime = document.querySelectorAll(".topcaptions .run-time b");
  let carouselgener = document.querySelectorAll(".topcaptions .gener b");

  for (let index = 0; index < imdbid.length; index++) {
    const element = imdbid[index];
    axios
      .get(Apiurl + `i=${element.getAttribute("data-imdb-id")}`)
      .then(({ data }) => {
        const e = imdbReview[index];
        e.textContent = data.Plot;

        const rate = imdbRate[index];
        let subrate = data.Ratings[0].Value.slice(0, 3);
        rate.textContent = subrate;

        const year = carouselRate[index];

        year.textContent = data.Year;
        const run = carouselRunTime[index];
        run.textContent = data.Runtime;
        const gener = carouselgener[index];
        let splitGener = data.Genre.split(",");
        gener.textContent = splitGener[0];
      });
  }
};
//home page card infoes
export const cardinfo = (imdbid) => {
  const releasedate = document.querySelectorAll(".card-release span");
  const cardTitle = document.querySelectorAll(".card-title");
  const cardGener = document.querySelectorAll(".card-gener span");
  const cardDuration = document.querySelectorAll(".card-duration span");
  const cardLanguage = document.querySelectorAll(".card-language span");
  const cardImg = document.querySelectorAll(".item .card-img");

  for (let i = 0; i < imdbid.length; i++) {
    const element = imdbid[i];
    fetch(Apiurl + `i=${element.getAttribute("data-imdb-id")}`)
      .then((data) => data.json())
      .then((json) => {
        cardTitle[i].textContent = json.Title;
        releasedate[i].textContent = "  " + json.Year;
        let splitGener = json.Genre.split(",");
        cardGener[i].textContent = " " + splitGener[0];
        cardDuration[i].textContent = " " + json.Runtime;
        cardLanguage[i].textContent = " " + json.Language;
        cardImg[i].src = json.Poster;
      });
  }
};
//detailes for detail page
export const getDetailes = async (id,type) => {
  const jumborton = document.querySelector(".jumbotron");
  const poster = document.querySelector("#poster");
  const title = document.querySelector(".title");
  const gener = document.querySelector(".gener");
  const runtime = document.querySelector(".runtime");
  const overview = document.querySelector(".overview p");
  const status = document.querySelector(".status");
  const language = document.querySelector(".language");

  const movieApi = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}?api_key=${ApiKey}&language=en-US`
  );
  const movieData = await movieApi.json();
  jumborton.style.cssText = ` background-image: url(  http://image.tmdb.org/t/p/w500/${movieData.backdrop_path} );  `;
  poster.src = "http://image.tmdb.org/t/p/w342" + movieData.poster_path;
  title.innerHTML = movieData.title;
   type=='tv'?  title.innerHTML= movieData.name : title.innerHTML= movieData.title;
 
   type=='tv'?runtime.innerHTML = "RunTime:" + movieData.episode_run_time[0]:  runtime.innerHTML = "RunTime:" + movieData.runtime;
 


 if (movieData.genres.length !== 0) {
    movieData.genres.map((val) => {
      gener.innerHTML += `<li>${val.name}</li>`;
    });
    overview.innerHTML = movieData.overview;
    status.innerHTML = movieData.status;
    language.innerHTML = movieData.spoken_languages[0].english_name;
  } 

  //kewword api
  const keywordApi = await fetch(
    
    `https://api.themoviedb.org/3/${type}/${id}/keywords?api_key=${ApiKey}`
    
  );
  const keywordData = await keywordApi.json();
  var list = document.querySelector(".keyword");
if(type=='tv'){
  var newdata = keywordData.results.slice(0, 6);
  list.innerHTML = "";
  for (let i = 0; i < newdata.length; i++) {
    const element = newdata[i];
    list.innerHTML += `<li>${element.name}</li>`;
  }
}
else{
  var newdata = keywordData.keywords.slice(0, 6);
  list.innerHTML = "";
  for (let i = 0; i < newdata.length; i++) {
    const element = newdata[i];
    list.innerHTML += `<li>${element.name}</li>`;
  }
}
};



export const getReviews = async (type,id) => {
  const writer = document.querySelector(".review-writer");
  const profile = document.querySelector(".profile");
  const review = document.querySelector(".review");
  //reviews api
  const reviewsApi = await fetch(
    `https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=${ApiKey}&language=en-US&page=1`
  );
  const reviewData = await reviewsApi.json();
  const filter = reviewData.results.filter(
    (e) =>
      e.author_details.avatar_path !== null &&
      e.author_details.avatar_path.indexOf("https") == -1
  );
  
  if (filter.length === 0) {
    writer.innerHTML = `no reviews `;

    writer.classList.add("text-center", "text-danger");
    profile.style.display = "none";
  } else {
    writer.classList.remove("text-center", "text-danger");

    writer.innerHTML = `A Review by ${filter[0].author} `;
    profile.style.display = "block";

    const IMGPATH = "https://image.tmdb.org/t/p/w1280";

    var img = filter[0].author_details.avatar_path;
    profile.src = `${IMGPATH}/${img}`;
    review.innerHTML += filter[0].content + filter[0].content;
  }
};

