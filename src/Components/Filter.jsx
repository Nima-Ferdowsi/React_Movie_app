import  { Fragment } from 'react';
const Filter = () => {
    return ( 
        <Fragment>
               <div className="container-fluid" style={{ paddingTop: 50 }}>
        <div className="row">
          <div className="container-fluid col-lg-3">
            <div className="row">
              <div className="list-group collapsible">
                <a className="list-group-item d-flex justify-content-between align-items-center">
                  First item<span className="dropdown-toggle"></span>
                </a>
                <div className="contentcollapse">
                  <span className="font-weight-light">Sort Result By</span>
                  <select className="custom-select">
                    <option>Popularity Ascending</option>
                    <option>Popularity Descending</option>
                  </select>
                </div>
              </div>

              <div className="list-group collapsible">
                <a className="list-group-item d-flex justify-content-between align-items-center">
                  Filter<span className="dropdown-toggle"></span>
                </a>
                <div className="contentcollapse">
                  <span className="font-weight-light">Release Dates </span>

                  <input type="date" className="form-control" />
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid col-lg-9">
            <div className="row main"></div>
          </div>
        </div>
      </div>
        </Fragment>
     );
}
 
export default Filter;