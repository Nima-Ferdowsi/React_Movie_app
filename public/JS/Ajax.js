const ApiUrl = `http://www.omdbapi.com/?apikey=574a397c&`

//carusel variable
let imdbReview = document.querySelectorAll(".topcaptions p")
let imdbRate = document.querySelectorAll(".topcaptions .Circle-rate b")
let carouselRate = document.querySelectorAll(".topcaptions .carusel-year b")
let carouselRunTime = document.querySelectorAll(".topcaptions .run-time b")
let carouselgener = document.querySelectorAll(".topcaptions .gener b")
//card variables
const releasedate = document.querySelectorAll(".card-release span")
const cardTitle = document.querySelectorAll(".card-title")
const cardGener = document.querySelectorAll(".card-gener span")
const cardDuration = document.querySelectorAll(".card-duration span")
const cardLanguage = document.querySelectorAll(".card-language span")
const cardImg = document.querySelectorAll(".owl-carousel-item .card-img")
// search part
let newjs;

const IMGPATH = "https://image.tmdb.org/t/p/w1280";

class Ajax {
  getinfo(imdbid) {
    for (let index = 0; index < imdbid.length; index++) {
      const element = imdbid[index];
      fetch(ApiUrl + `i=${element.getAttribute("data-imdb-id")}`)
        .then((data) => data.json())
        .then(json => {
          console.log(json);
          const e = imdbReview[index];
          e.textContent = ((json).Plot);

          const rate = imdbRate[index];
          let subrate = ((json).Ratings[0].Value).slice(0, 3)
          rate.textContent = subrate;

          const year = carouselRate[index];

          year.textContent = json.Year;
          const run = carouselRunTime[index]
          run.textContent = json.Runtime
          const gener = carouselgener[index]
          let splitGener = json.Genre.split(",")
          gener.textContent = splitGener[0]

        })


    }
  }

  cardinfo(imdbid) {
    for (let i = 0; i < imdbid.length; i++) {
      const element = imdbid[i];
      fetch(ApiUrl + `i=${element.getAttribute("data-imdb-id")}`)
        .then((data) => data.json())
        .then((json) => {
          console.log(json);
          cardTitle[i].textContent = json.Title
          releasedate[i].textContent = "  " + json.Year
          let splitGener = json.Genre.split(",")
          cardGener[i].textContent = " " + splitGener[0]
          cardDuration[i].textContent = " " + json.Runtime
          cardLanguage[i].textContent = " " + json.Language
          cardImg[i].src = json.Poster



        })

    }

  }
  random() {
    return Math.floor(Math.random() * (10 - 6)) + 5
  }
  search(name) {
    fetch(ApiUrl + `s=${name}`)
      .then((data) => data.json())
      .then((json) => {
        let main = document.querySelector(".main");
        main.innerHTML = "";
        let card;
        console.log(json);
        let newJson = json.Search.slice(0, 10)
        let filterarray = newJson.filter(function (el) {

          return el.Poster != "N/A"
        })
        filterarray.forEach((elem, indx) => {

          /* if(elem.Poster==""||elem.Poster==null ||elem.Poster=="N/A"){
              newjs=newJson.splice(indx,1)

          } */
          var rate = document.querySelectorAll(".rate-number")
          for (let i = 0; i < rate.length; i++) {
            const element = rate[i];
            element.innerHTML = this.random()


          }
          main.innerHTML += ` <div class="card-deck col-md-4 col-lg-3 col-xs-6 col-sm-6 col-6">
                 <div class="card">
                   <div class="overcontainer">
                     <img class="search-card rounded card-img-top" src="${elem.Poster}">
                     <div class="overview">
                       <h5 class="card-title">${elem.Title}</h5>
                       <label class="card-release">Release:<span>${elem.Year}</span></label>
                       <label class="card-gener">Type:<span>${elem.Type}</span></label>
                      
                       <a class="btn btn-info" data-imdb-id="${elem.imdbID}">info</a>
               
                     </div>
               
                   </div>          
                   <div class="card-footer">
                     <h4 class="font-weight-light">${elem.Title}</h4>
                     <div class="Circle-rate">
                       <svg class="circle-chart" viewBox="0 0 30 30" width="40" height="40" fill="transparent">
                         <circle class="circle-chart__background" stroke="#eee" stroke-width="2" fill="none" cx="15" cy="15"
                           r="14"></circle>
                         <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="80,100" cx="15"
                           cy="15" r="14"></circle>
                       </svg>
                 
                   
                            <b class="rate-number">4</b>
                         </div>
                       </div>
                     </div>
                     </div>`









        })

        console.log(newjs);


 



      })


  }

  Movie(type) {
    fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=56ecd3ba9ed01d2b686cf85f49f21d45&language=en-US&page=1`)
      .then((data) => data.json())
      .then((json) => {
        let main = document.querySelector(".main");

        main.innerHTML=""

        json.results.forEach((elem) => {



          main.innerHTML += `<div class="card-deck col-md-4 col-lg-4 col-6">
  <div class="card">
      <img class="search-card rounded card-img-top" src="${IMGPATH+elem.poster_path}">


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
      <span class="font-weigth-light" style="display: block;">${elem.release_date} </span>
    </div>
  </div>
  </div>`;
        })




      })




  }
  TV(type) {
    fetch(`https://api.themoviedb.org/3/tv/${type}?api_key=56ecd3ba9ed01d2b686cf85f49f21d45&language=en-US&page=1`)
      .then((data) => data.json())
      .then((json) => {
        let main = document.querySelector(".main");

        main.innerHTML=""

        json.results.forEach((elem) => {



          main.innerHTML += `<div class="card-deck col-md-4 col-lg-4 col-6">
  <div class="card">
      <img class="search-card rounded card-img-top" src="${IMGPATH+elem.poster_path}">


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
      <span class="font-weigth-light" style="display: block;">${elem.first_air_date} </span>
    </div>
  </div>
  </div>`;
        })




      })




  }
}