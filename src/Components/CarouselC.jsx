import Carousel from "react-multi-carousel";
import arrowL from "../assets/carousel-l.svg"
import arrowR from "../assets/carousel-r.svg"
import "react-multi-carousel/lib/styles.css";

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

  const x = [1,2,3,4,5,6,7]

export default function CarouselC(){
    return(
        <div className="carousel-container">
            <Carousel
                responsive={responsive}
                infinite={true}
                customLeftArrow={<PrevArrow />}
                customRightArrow={<NextArrow />}
            >
                {x.map((obj,i)=>{
                    return(
                        <div key={i}>{obj}</div>
                    )
                })}
            </Carousel>
        </div>
    )
}