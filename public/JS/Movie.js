let ajax=new Ajax()
let html=new Html()
document.addEventListener("DOMContentLoaded",function(){

ajax.Movie("popular")

})
document.querySelector("#now-playing").addEventListener("click",function(){
ajax.Movie("now_playing")


})
document.querySelector("#Top-Rated").addEventListener("click",function(){ajax.Movie("top_rated")})
document.querySelector("#Upcoming").addEventListener("click",function(){ajax.Movie("upcoming")})
document.querySelector(".seriestype").addEventListener("click",function(e){
 ajax.TV( e.target.getAttribute("data-tv-type"))
})
html.collapse()



