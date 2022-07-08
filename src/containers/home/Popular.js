import React from "react";
import Slider from "react-slick";
import { PopularCard } from "../../components";
import { PopularDrinks } from "../../app/utils/data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowSize from "../../hooks/useWindowSize";
import { calcPopularSlides } from "../../app/utils/helpers";

const Popular = () => {
  const PopularList = PopularDrinks;
  const size = useWindowSize();

  const settings = {
    infinite: true,
    initialSlide: 0,
    slidesToShow: calcPopularSlides(size.width),
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    swipeToSlide: true,
    cssEase: "linear",
  };

  return (
    <div
      className="bg-image mt-8 lg:mt-10 pt-5 pb-3"
    >
      <div className="px-[28px] md:px-[32px] lg:px-12 py-3">
        <Slider {...settings}>
          {PopularList.map((item) => (
            <div key={item.id}>
              <PopularCard cocktail={item} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Popular;
