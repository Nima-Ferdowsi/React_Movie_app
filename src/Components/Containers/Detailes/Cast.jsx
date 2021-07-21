import  React,{ Fragment} from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import CastMembers from "./CastMembers";

const Cast = (props) => {


  const size = {
    responsive: {
      0: {
        margin: 10,
        items:3
      },
      450: {
        margin: 10,
        items:4

      },
      600: {
        margin: 50,
        items:3

      },
      1100: {
        margin: 50,
        items:5

      },
    },
  }; 
  var img=props.items
  var filtered=img.filter(e=>e.profile_path!==null)
  return (
    <Fragment>
      <OwlCarousel
        className={`owl-theme owl-carousel cast ${props.classes}`}
        margin={50}
        items={4}
        responsive={size.responsive}
        dots={false}
        autoplay={true}
        loop={false}
        
      >
  
            {filtered.map((val)=>{
             return <CastMembers val={val}></CastMembers>

         })}
      </OwlCarousel>
    </Fragment>
  );
};

export default Cast;
