import React from "react";
import Slider from "react-slick";
import { PopularCard } from "../components";
import { PopularDrinks } from "../utils/const-data";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Popular = () => {
  const PopularList = PopularDrinks;

  const settings = {
    infinite: true,
    initialSlide: 0,
    slidesToShow: 4,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    centerMode: true,
    swipeToSlide: true,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <section className="bg-app-cadet">
      <div className="px-12 py-3">
        <Slider {...settings}>
          {PopularList.map((item) => (
            <div key={item.id}>
              <PopularCard cocktail={item} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Popular;
