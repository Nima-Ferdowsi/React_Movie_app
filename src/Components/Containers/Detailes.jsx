import  React,{ Fragment, useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Genres, MovieSelector , Search, TVSelector } from "../../js/NavFunctions";
import Nav from "../Common/Nav";
import { getReviews ,getDetailes} from "./../../js/Api";
import Cast from "./Detailes/Cast";
import Jumborton from "./Detailes/jumborton";
import { withRouter } from 'react-router';
import Context from "../../context/Context";
import Footer from "../Common/Footer";
import SidebarDetailes from "./Detailes/sidebarDetailes";
import Social from "./Detailes/Social";
import Recomendation from './Detailes/Recomendation';

const Detailes = (props) => {
  const [getCast, setCast] = useState([]);
  const [show, setsetShow] = useState(false);
  const [getRecomm, setRecomm] = useState([]);
  const [showRecomm, setShowRecomm] = useState(false);

  let context=useContext(Context)


  //get casts
  const getCasts = async (type,id) => {
    const fetchs = await fetch(
      `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=56ecd3ba9ed01d2b686cf85f49f21d45&language=en-US`
    );
    const datas = await fetchs.json();

    setCast(datas.cast);
    setsetShow(true);
  };

  const recommendation=async(type,id)=>{
  const recommResponse=await fetch(`https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=56ecd3ba9ed01d2b686cf85f49f21d45&language=en-US&page=1`)
  const data=await recommResponse.json()
  setRecomm(data.results)
   setShowRecomm(true)
  }
  useEffect(() => {
    if(props.match.params.type=='series'){
      getDetailes(props.match.params.id , 'tv')
      getCasts('tv',props.match.params.id);
      getReviews('tv',props.match.params.id)
      recommendation('tv',props.match.params.id)


    }

    if(props.match.params.type=='movie'){
      getDetailes(props.match.params.id,'movie');
      recommendation('movie',props.match.params.id)
      getCasts('movie',props.match.params.id);
      getReviews('movie',props.match.params.id)



    }
   
   


    MovieSelector(props)
    TVSelector(props)
    Search(props)
    Genres(props)
  }, []);

  return (
    <Fragment>
      <Helmet>
        <title>Detailes</title>
        <link rel="stylesheet" href="/css/detail.css" />
      </Helmet>
      <Nav></Nav>
      <Jumborton />
      <div className="container-fluid">
        <div className='row'>
      {show ? <Cast items={getCast}  classes='col-lg-9 col-md-9 col-sm-12 col-12'></Cast> : null }
      <SidebarDetailes classes='col-lg-3 col-md-3 col-sm-12 col-12' />
      </div>
      </div>
      <Social  />
      {showRecomm ? <Recomendation items={getRecomm} ></Recomendation> : null }
{/*      <Recomendation/>
 */}      <Footer/>
    </Fragment>
  );
};

export default withRouter(Detailes);
