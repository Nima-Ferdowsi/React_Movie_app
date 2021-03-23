import { Fragment } from "react";

const Items = ({items,type}) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";
    console.log(items);

    return (
      <div className="container-fluid col-lg-9">
      <div className="row main">
    {  items.map(elem=>{
        return <div class="card-deck col-md-4 col-lg-4 col-6">
         <div class="card">
         <img class="search-card rounded card-img-top" src={IMGPATH + elem.poster_path}/>
           <div class="card-footer">
             <h4 class="font-weight-light">{type=='movies'? elem.title: elem.name}</h4>
             <div class="Circle-rate">
               <svg class="circle-chart" viewBox="0 0 30 30" width="40" height="40" fill="transparent">
                 <circle class="circle-chart__background" stroke="#eee" stroke-width="2" fill="none" cx="15" cy="15"
                   r="14"></circle>
                 <circle class="circle-chart__circle" stroke="#4eb04b" stroke-width="2" stroke-dasharray="80,100" cx="15"
                   cy="15" r="14"></circle>
               </svg>
               <b class="rate-number">{elem.vote_average}</b>
             </div>
             <span class="font-weigth-light" style={{display: 'block'}}>{
               elem.release_date
             } </span>
           </div>
         </div>
         </div>
     })}
</div>
</div>
 
      
      
      )
}
 
export default Items;