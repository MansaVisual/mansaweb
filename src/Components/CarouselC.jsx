import Carousel from "react-multi-carousel";
import arrowL from "../assets/carousel-l.svg"
import arrowR from "../assets/carousel-r.svg"
import "react-multi-carousel/lib/styles.css";
import foto1 from "../assets/clients/baterbys.svg"
import foto2 from "../assets/clients/famiq.svg"
import foto3 from "../assets/clients/harebell.svg"
import foto4 from "../assets/clients/mr.svg"
import foto5 from "../assets/clients/patin.svg"
import foto6 from "../assets/clients/remax.svg"
import foto7 from "../assets/clients/swap-logo 1.svg"
import foto8 from "../assets/clients/xirgu.svg"
import { useMediaQuery } from "@mui/material";

const responsive = {
    desktop: {
      breakpoint: { max: 5000, min: 1201 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1200, min: 601 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 600, min: 280 },
      items: 2,
    },
};

const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="buttonSlidePrev">
        <img src={arrowL} alt="" />
      </button>
    );
  };
  
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <button onClick={onClick} className="buttonSlideNext">
        <img src={arrowR} alt="" />
      </button>
    );
  };

  const x = [foto1,foto2,foto3,foto4,foto5,foto6,foto7,foto8]

  
export default function CarouselC(){
  const isDesktop = useMediaQuery("(min-width:1024px")

    return(
      <div className={`carousel-container ${isDesktop&&"desk"}`}>
          <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={1800}
              customLeftArrow={<PrevArrow />}
              customRightArrow={<NextArrow />}
          >
              {x.map((obj,i)=>{
                  return(
                    <img key={i} src={obj} alt="CLIENTES" />
                  )
              })}
          </Carousel>
      </div>
    )
}