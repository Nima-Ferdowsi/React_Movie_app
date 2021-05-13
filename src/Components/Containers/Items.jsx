 import  React,{ Fragment } from "react";

const Items = ({items,type}) => {
    const IMGPATH = "https://image.tmdb.org/t/p/w1280";

    return (
      <div className="container-fluid col-lg-9">
      <div className="row main">
    {  items.map(elem=>{
        return <div class="card-deck col-md-4 col-lg-4 col-6">
         <div class="card">
         <img class="search-card rounded card-img-top" src={IMGPATH + elem.poster_path}/>
           <div class="card-footer">
             <h4 class="font-weight-light">{elem.title}</h4>
             <h4 class="font-weight-light">{ elem.name}</h4>

            
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