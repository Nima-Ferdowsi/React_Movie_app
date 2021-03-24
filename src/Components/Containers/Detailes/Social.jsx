import  React,{ Fragment} from "react";

const Social = (props) => {
  
 
  
  return (
    <Fragment>
      <div className="tab-cotaieners">
        <ul className="list-unstyled">
          <h5>Social</h5>
          <li className="tab" >Reviews</li>
        </ul>
      
    
        <div className="tab-contents">
        <div className="review-head">
        <img className="profile" src=""></img>
        <h5 className="review-writer">Name</h5>
        </div>
        <p className="review"></p>
      </div>
      </div>
    </Fragment>
  );
};

export default Social;
