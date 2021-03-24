import  React,{ Fragment } from 'react'

const Offers = (props) => {
    return (

        <Fragment>


  
    <div className="card-deck col-md-12 col-lg-4 col-sm-12  col-12">
        <div className="card">
            <img className="card-img-top" src="http://digiflex.themezinho.net/wp-content/uploads/2020/11/icon04.png"></img>
            <div className="card-body">
                <p>{`${props.month} month VIP`}</p>
                <b>{props.price}</b>
                <small>per month</small>
                {props.exclusive?  <span className="badge-pill badge-info ">save 68%</span> :null}
              
            </div>
            <div className="card-footer">
                <a className="btn btn-danger"> Purchase</a>
                <p className="font-weight-light"> 30-days money-back guarantee</p>

            </div>
        </div>

    </div>

        </Fragment>
      );
}
 
export default Offers;

