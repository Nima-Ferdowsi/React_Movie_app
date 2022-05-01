import  React,{Fragment} from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => {
    return ( <Fragment>

<nav className="navbar navbar-expand-lg navbar-light ">
    <Link className="navbar-brand" to="/">Rise</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
<span className="navbar-toggler-icon" style={{color:"white"}}></span>
</button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
            <li className="nav-item active dropdown">
                <a className="nav-link dropdown-toggle " data-toggle="dropdown" href="#">Movie</a>
                <ul className="dropdown-menu movieType" ref={props.movieRef}>
            
                <li data-movie-type="popular" className="dropdown-item">Popular</li>
                    <li data-movie-type="now_playing" className="dropdown-item">Now Playing</li>
                    <li data-movie-type="upcoming" className="dropdown-item">Upcoming</li>
                </ul>
            </li>
            <li className="nav-item active dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">TV Shows</a>
                <ul className="dropdown-menu seriestype" ref={props.tvRef}>
                       <li data-tv-type="popular" className="dropdown-item">Popular</li>
                        <li data-tv-type="on_the_air" className="dropdown-item">ON TV</li>
                        <li data-tv-type="top_rated" className="dropdown-item">Top Rated</li>
                        <li data-tv-type="airing_today" className="dropdown-item">Airing Today</li>
                </ul>
            </li>
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#">Gener </a>
                <ul className="dropdown-menu gener-column" ref={props.genre}>
                    <li data-gener-id="28" className="dropdown-item">Action</li>
                    <li data-gener-id="12" className="dropdown-item">Adventure</li>
                    <li data-gener-id="16" className="dropdown-item">Animation</li>
                    <li data-gener-id="35" className="dropdown-item">Comedy</li>
                    <li data-gener-id="80" className="dropdown-item">Crime</li>
                    <li data-gener-id="18" className="dropdown-item">Drama</li>
                    <li data-gener-id="10751" className="dropdown-item">Family</li>
                    <li data-gener-id="14" className="dropdown-item">Fantasy</li>
                    <li data-gener-id="36" className="dropdown-item">History</li>
                    <li data-gener-id="27" className="dropdown-item">Horror</li>
                    <li data-gener-id="10402" className="dropdown-item">Music</li>
                    <li data-gener-id="9648" className="dropdown-item">Mystery</li>
                    <li data-gener-id="10749" className="dropdown-item">Romance</li>
                    <li data-gener-id="53" className="dropdown-item">Thriller</li>
                    <li data-gener-id="10752" className="dropdown-item">War</li>
                    <li data-gener-id="37" className="dropdown-item">Western</li>

                </ul>
            </li>
            <li className="nav-item">
                <a id="login-nav" data-toggle="dropdown" className="dropdown-toggle nav-link" href="#"><span
        className="glyphicon glyphicon-log-in"></span> Login</a>
                <ul className="dropdown-menu   form-wrapper">
                    
                    <li>




                        <form className="homelogin" action="/User/User/login" method="post">
                            <p className="hint-text">Sign in with your social media account</p>
                            <div className="form-group social-btn clearfix">
                                <a href="#" className="btn btn-primary pull-left"><i className="fa fa-facebook"></i>
              Facebook</a>
                                <a href="#" className="btn btn-info pull-right"><i className="fa fa-twitter"></i>
              Twitter</a>
                            </div>
                            <div className="or-seperator"><b>or</b></div>
                            <div className="form-group">
                                <input id="userlog" name="UserName" type="text" className="form-control" placeholder="UserName" required="required"/>
                            </div>
                            <div className="form-group">
                                <input id="pass" type="Password" name="Password" className="form-control" placeholder="Password" required="required"/>
                            </div>
                            <div className="checkbox">
                                <input type="checkbox" name="RememberMe" />

                            </div>
                            <span id="notexist" className="text-danger" style={{display:"none"}}>UserName or Passwod
            is not Valid</span>
                            <input id="logbtn" type="submit" className="btn btn-primary btn-block" value="Login"/>
                            <div className="form-footer">
                                <a href="#">Forgot Your password?</a>
                            </div>
                        </form>




                    </li>
                </ul>
            </li>
    
        </ul>
        <form onSubmit={(e)=>e.preventDefault()} className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2 openinput" ref={props.queryRef} type="search" placeholder="Search" aria-label="Search"/>
            <a ref={props.serchRef} className="btn search-btn btn-outline-success my-2 my-sm-0">Search</a>
        </form>
    </div>
</nav>

    </Fragment> );
}
 
export default  Nav;