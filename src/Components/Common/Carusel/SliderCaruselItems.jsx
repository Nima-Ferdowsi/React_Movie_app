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
            <div className="Circle-rate">
              <svg height="100" width="100">
                <circle
                  cx="50"
                  cy="50"
                  r="40"
                  stroke="#4eb04b"
                  strokeWidth="3"
                  fill="none"
                />
                <text
                  x="50%"
                  y="50%"
                  textAnchor="middle"
                  stroke="white"
                  strokeWidth="3px"
                  dy=".3em"
                >
                  5
                </text>
              </svg>
            </div>
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