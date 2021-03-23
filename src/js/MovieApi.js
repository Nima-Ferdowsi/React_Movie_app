export const Movies =async (type) => {
const response=await fetch(`https://api.themoviedb.org/3/movie/${type}?api_key=56ecd3ba9ed01d2b686cf85f49f21d45&language=en-US&page=1`)
  const data=await response.json()
   return data.results
};
export const TV = async(type) => {
  const response=await fetch(`https://api.themoviedb.org/3/tv/${type}?api_key=56ecd3ba9ed01d2b686cf85f49f21d45&language=en-US&page=1`)
  const data=await response.json()
   return data.results
};


export const Search = async (query) => {
  const response=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=56ecd3ba9ed01d2b686cf85f49f21d45&language=en-US&query=${query}&page=1&include_adult=false`)
  const data=await response.json()
   return data.results
};

export const Genres =async (genres) => {
  const response=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=56ecd3ba9ed01d2b686cf85f49f21d45&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genres}`)
  const data=await response.json()
   return data.results
};
