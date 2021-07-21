import  React,{ Fragment } from "react";


const SliderItems = (props) => {

    return ( 
        <Fragment>
         <div className="item">
          <img src="" className="rounded card-img" alt="pirate-of-carabian" />
          <div className="overview">
            <h5 className="card-title"></h5>
            <label className="card-release">
              Release:<span></span>
            </label>
            <label className="card-gener">
              Gener:<span></span>
            </label>
            <label className="card-duration">
              Duration:<span></span>
            </label>
            <label className="card-language">
              Language:<span></span>
            </label>
            
            <a className="btn btn-info" type={props.type}  data-imdb-id={props.imdb} onClick={()=>{
             props.set(props.tmdb ,props.type  )
            }} >
              info
            </a>
          </div>
        </div>
        </Fragment>
     );
}
 
export default SliderItems;