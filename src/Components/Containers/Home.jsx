import  React,{ useEffect, Fragment, useContext } from "react";
import MainCarusel from "./../Common/Carusel/MainCarusel";
import SliderCarusel from "./../Common/Carusel/SliderCarusel";
import Footer from "./../Common/Footer";
import Nav from "./../Common/Nav";
import Offers from "./../Offers";
import { getinfo, cardinfo } from "./../../js/Api";
import Context from "./../../context/Context";
import { Helmet } from "react-helmet";
import { withRouter } from "react-router";
import SliderItems from "../Common/Carusel/SliderCaruselItems";
import MainCaruselItems from "../Common/Carusel/MainCaruselItems";
import { TVSelector, MovieSelector, Search, Genres } from './../../js/NavFunctions';

const Home = (props) => {
let context=useContext(Context)
/* alert(context.getId) */

  useEffect(() => {
    let imdb = document.querySelectorAll(".carousel-item img[data-imdb-id]");
    getinfo(imdb);


    let cardid = document.querySelectorAll(".overview a[data-imdb-id]");
    cardinfo(cardid);

    MovieSelector(props)
    
  TVSelector(props)
  Search(props)
  Genres(props)
  }, []);
 useEffect(()=>{


 },[context.getId])

  return (
    <Context.Provider>
      <Helmet>
        <title>Home</title>
        <link rel="stylesheet" href="css/Home.css" />
     </Helmet>
      <Fragment>
        <div id="top-area">
         <MainCarusel>
         <MainCaruselItems name='Vikings' imdb='tt2306299' class="active" img='/image/Vikings.jpg'/>
           <MainCaruselItems name='Lucifer' imdb='tt4052886' img='/image/Lucifer.jpg'/>
           <MainCaruselItems name='Avengers' imdb='tt4154796' img='/image/Avengers.jpg'/>
         </MainCarusel>
            

          <Nav  />
        </div>
          <SliderCarusel>
            <SliderItems type='series'  imdb='tt0455275' tmdb='2288' set={context.handleid}/>
            <SliderItems type='series'  imdb='tt1124373' tmdb='1409' set={context.handleid}/>
            <SliderItems type='series'  imdb='tt4052886' tmdb='63174' set={context.handleid}/>
            <SliderItems type='series'  imdb='tt0903747' tmdb='1396' set={context.handleid}/>
            <SliderItems type='series'  imdb='tt2306299' tmdb='44217' set={context.handleid}/>
            <SliderItems type='series'  imdb='tt2442560' tmdb='60574' set={context.handleid}/>
          </SliderCarusel>

          <SliderCarusel>
            <SliderItems  type='movie' imdb='tt4154756' tmdb='299536' set={context.handleid}/>
            <SliderItems  type='movie' imdb='tt6723592' tmdb='577922' set={context.handleid}/>
            <SliderItems  type='movie' imdb='tt0325980' tmdb='22' set={context.handleid}/>
            <SliderItems  type='movie' imdb='tt1201607' tmdb='12445'set={context.handleid}/>
          </SliderCarusel>
        
          <div className="container-fluid" style={{paddingTop:70,backgroundColor:'#292929'}}>
<div className="row" style={{justifyContent:'center'}}>
        <Offers month="1"  price='$ 4.99' exclusive={false} />
        <Offers month="12" price='$ 7.99' exclusive={true} />
        <Offers month="6"  price='$ 9.99' exclusive={false} />
        </div>
</div>


        <Footer />
      </Fragment>
    </Context.Provider>
  );
};

export default withRouter(Home);
