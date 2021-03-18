
export  const TVSelector=(props)=>{

    document.querySelector(".seriestype").addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          props.history.push("/Movie-Tv");
  
          localStorage.setItem(
            "SearchType",
            JSON.stringify({
              content: e.target.getAttribute("data-tv-type"),
              type: "tv",
            })
          );
  
        }
      });
}

export  const MovieSelector=(props)=>{

    document.querySelector(".movieType").addEventListener("click", (e) => {
        if (e.target.tagName === "LI") {
          props.history.push("/Movie-Tv");
  
          localStorage.setItem(
            "SearchType",
            JSON.stringify({
              content: e.target.getAttribute("data-movie-type"),
              type: "movies",
            })
          );
        }
      });
}

export const Search=(props)=>{
  document.querySelector(".search-btn").addEventListener("click", (e) => {
    localStorage.setItem(
      "SearchType",
      JSON.stringify({
        content:document.querySelector('.openinput').value,
        type: "search",
      })
    );
      props.history.push("/Movie-Tv");
    
    
  });
}


export const Genres=(props)=>{
  document.querySelector(".gener-column").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
      props.history.push("/Movie-Tv");

      localStorage.setItem(
        "SearchType",
        JSON.stringify({
          content: e.target.getAttribute("data-gener-id"),
          type: "genres",
        })
      );
    }
  });
}
