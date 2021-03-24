import React , { Fragment, useContext } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Context from './../../../context/Context';
const Recomendation = ({items , change}) => {
const context=useContext(Context)
    return (
        <Fragment>
        <OwlCarousel
          className="owl-theme recommendation"
          margin={10}
         items={4}
        >
            
      
        {items.map((val)=>{
          
        return    <div className='item recommendation-item'>
            <div className="card">
            <img src={'https://image.tmdb.org/t/p/w300'+val.poster_path}className="rounded card-img-top"  />
             <div className='card-footer'>
{/*                  <h5 className="name" >{val.title}</h5>
 */}   {context.getId.type=='series'?    <h5 className="name" >{val.name}</h5> : <h5 className="name" >{val.title}</h5>} 
          </div>
             </div> 
            </div>
       })} 
       </OwlCarousel>
      
      </Fragment> 


    );
}
 
export default Recomendation;