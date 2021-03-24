import  React,{ Fragment } from "react";

const MainCaruselItems = (props) => {
    return ( 
        <Fragment>
             <div className={`carousel-item  ${props.class}`}>
            <img src={props.img} data-imdb-id={props.imdb}/>
            <div className="carousel-caption topcaptions text-left">
                <span>new release</span>
                <h4>{props.name}</h4>
                <div className="carousrel-features">
                    <div className="Circle-rate">
                        <svg className="circle-chart" viewBox="0 0 30 30" width="40" height="40" fill="transparent">
          <circle className="circle-chart__background" stroke="#eee" strokeWidth="2" fill="none" cx="15" cy="15"
            r="14"></circle>
          <circle className="circle-chart__circle" stroke="#4eb04b" strokeWidth="2" strokeDasharray="70,100"
            cx="15" cy="15" r="14"></circle>
        </svg>
                        <b className="rate-number">5</b>
                    </div>
                    <img className="imdbicon" src="http://digiflex.themezinho.net/wp-content/themes/digiflex/images/imdb-logo.svg" alt="IMDB"/>
                    <div className="carusel-year">
                        <b></b>
                    </div>
                    <div className="quality">
                        <b>4K</b>
                        <b>Ultra HD</b>
                    </div>
                    <div className="run-time">
                        <b className="font-weight-normal"></b>
                    </div>
                    <div className="gener">
                        <b></b>
                    </div>
                </div>

                <p></p>
            </div>
        </div>

        </Fragment>
     );
}
 
export default MainCaruselItems