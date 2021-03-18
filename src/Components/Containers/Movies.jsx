import { Fragment ,useContext,useEffect,useRef  } from "react";
import { Helmet } from "react-helmet";
import Filter from "../Filter";
import Nav from './../Common/Nav';
import { Movies, TV, Search, Genres } from './../../js/MovieApi';
import Context from './../../context/Context';
import Footer from "../Common/Footer";

const Movie = (props) => {
    const tvRef=useRef(null)
    const movieRef=useRef(null)
    const genresRef=useRef(null)
    const searchRef=useRef(null)
    const queryRef=useRef(null)

   const context=useContext(Context)

    const collapse=()=> {
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
                        content.style.maxHeight = "200px"
                        content.style.height = "200px"


                    }
                }

            });
        }
    }
    useEffect(()=>{
        let type=JSON.parse(localStorage.getItem('SearchType'))
        if(type.type==='movies'){
            Movies(type.content ,context.handleid) 

        }
        else if(type.type==='tv'){
            TV(type.content ,context.handleid) 

        }
        else if(type.type==='search'){
            Search(type.content , context.handleid)

        }
        else if(type.type==='genres'){
            Genres(type.content , context.handleid)

        }
        tvRef.current.addEventListener('click',function(e){
            if(e.target.tagName==='LI'){
            TV( e.target.getAttribute("data-tv-type"),context.handleid)
            }
        })
        movieRef.current.addEventListener('click',function(e){
            if(e.target.tagName==='LI'){
               
                Movies( e.target.getAttribute("data-movie-type") ,context.handleid)

            }
        })
        genresRef.current.addEventListener('click',function(e){
            if(e.target.tagName==='LI'){
               
                Genres( e.target.getAttribute("data-gener-id") ,context.handleid)

            }
        })
        searchRef.current.addEventListener('click',()=>{
            if(queryRef.current.value!=='' &&queryRef.current.value!==' ' ){
                Search(queryRef.current.value , context.handleid)
            }
        })
        
        
        collapse()
    },[])
  return (
    <Fragment>
      <Helmet>
        <title>Movie</title>
        <link rel="stylesheet" href="css/movie-tv.css"/>
        <link rel="stylesheet" href="css/Search.css"/>

      </Helmet>
         <Nav loc={props.loc} tvRef={tvRef} movieRef={movieRef} serchRef={searchRef} queryRef={queryRef} genre={genresRef}/>
       <Filter/>
       <Footer/>
    </Fragment>
  );
};

export default Movie;
