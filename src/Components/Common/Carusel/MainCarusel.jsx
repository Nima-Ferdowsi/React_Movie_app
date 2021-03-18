import  { Fragment   } from 'react';


const MainCarusel = (props) => {
    return ( 
        <Fragment>
            
<div id="trend-movies" className="carousel slide" data-ride="carousel">
    <canvas id="canvas"></canvas>

    <div className="carousel-indicators">
        <li data-target="#trend-movies" data-slide-to="0" className="active"></li>
        <li data-target="#trend-movies" data-slide-to="1"></li>
        <li data-target="#trend-movies" data-slide-to="1"></li>
    </div>
    <div className="carousel-inner">
 
  {props.children}
 
    </div>
    <a className="carousel-control-prev" href="#trend-movies" role="button" data-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#trend-movies" role="button" data-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
    </a>
</div>
        </Fragment>
     );
}
 
export default MainCarusel;