import  React,{ Fragment, useContext } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Context from "../../../context/Context";

const SliderCarusel = (props) => {
  const context = useContext(Context);

  const bg = {
    backgroundImage: "url(" + "/image/bg2.jpg" + ")",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };
  const size = {
    responsive: {
      0: {
        items: 2,
        margin: 20,
      },
      450: {
        items: 2,
        margin: 20,
      },
      600: {
        items: 3,
        margin: 100,
      },
      1000: {
        items: 4,
        margin: 100,
      },
    },
  };
  return (
    <Fragment>
      <OwlCarousel
        className="owl-theme owl-carousel"
        margin={100}
        style={bg}
        items={4}
        responsive={size.responsive}
      >
        {props.children}
      </OwlCarousel>
    </Fragment>
  );
};

export default SliderCarusel;
