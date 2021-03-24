import  React,{ Fragment } from "react";


const CastMembers = (props) => {

    return ( 
        <Fragment>
         <div className="item cast-member">
             <div className="card">
             <img src={`http://image.tmdb.org/t/p/w500/${props.val.profile_path}`} className="rounded card-img-top"/>
              <div className='card-footer'>
                  <h5 className="name">{props.val.name}</h5>
                  <span className='char'>{props.val.character}</span>
              </div>
             </div>

        </div>
        </Fragment>
     );
}
 
export default CastMembers;