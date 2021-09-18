import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import data from "../API/Banners.json";
import { useWindowWidth } from "@react-hook/window-size";

function NextBtn({ className, onClick }) {
  return (
    <button
      className="absolute top-1/2 -right-6 -translate-y-1/2"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="#5d3ebc"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </button>
  );
}

function PrevBtn({ className, onClick }) {
  return (
    <button
      className="absolute top-1/2 -left-6 -translate-y-1/2"
      onClick={onClick}
    >
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="#5d3ebc"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}

const Campaigns = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(data);
  }, []);

  const windowWidth = useWindowWidth();

  return (
    <div className="container mx-auto">
      <h6 className="text-sm font-semibold text-getir-categories-title mb-2 md:mt-8 md:block hidden">
        Kampanyalar
      </h6>
      <Slider {...settings} className="md:-mx-2">
        {banners &&
          banners.map((banner, index) => {
            return (
              <div key={banner.id}>
                <figure className="md:px-2 block">
                  <img src={banner.image} alt="" className="md:rounded-xl" />
                </figure>
              </div>
            );
          })}
      </Slider>
    </div>
  );
};

export default Campaigns;
