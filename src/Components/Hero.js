import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactFlagsSelect from "react-flags-select";
import { useWindowWidth } from "@react-hook/window-size";

const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  const [selected, setSelected] = useState("TR");
  const phones = {
    US: "+1",
    DE: "+49",
    TR: "+90",
    IT: "+39",
    FR: "+33",
    GB: "+44",
    ESP: "+34",
  };

  const windowWidth = useWindowWidth();

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-getir-secondary before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10">
      {windowWidth >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              src="https://getir.com/_next/static/images/getir-mainpage-3-ffd1e98c5da51809f9adcc3a4a37d751.jpg"
              alt=""
              className="w-full h-getirHero object-cover"
            />
          </div>
          <div>
            <img
              src="https://getir.com/_next/static/images/getir-mainpage-2-7c23764275cdaf14d7b6cf15ebbdd0c1.jpg"
              alt=""
              className="w-full h-getirHero object-cover"
            />
          </div>
          <div>
            <img
              src="https://getir.com/_next/static/images/getir-mainpage-4-1751ad2d8fb42a88742d6751938da7e7.jpg"
              alt=""
              className="w-full h-getirHero object-cover"
            />
          </div>
          <div>
            <img
              src="https://getir.com/_next/static/images/getir-mainpage-1-757eca6a46304def60cabce74d3f20a2.jpg"
              alt=""
              className="w-full h-getirHero object-cover"
            />
          </div>
        </Slider>
      )}
      <div className="md:container relative md:absolute top-0 left:0 md:left-1/2 translate-x-0 md:-translate-x-1/2 h-full z-20 flex items-center justify-between ">
        <div className="hidden md:block">
          <img
            src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg"
            alt=""
          />
          <h1 className="text-4xl font-semibold text-white mt-6">
            Dakikalar içinde <br /> kapınızda
          </h1>
        </div>
        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-100 p-6">
          <h5 className="text-getir-secondary font-semibold text-center mb-4">
            Giriş yap veya kayıt ol
          </h5>
          <div className="flex space-x-2">
            <ReactFlagsSelect
              countries={Object.keys(phones)}
              customLabels={phones}
              placeholder="Select Language"
              selected={selected}
              onSelect={(code) => setSelected(code)}
              className="flag"
            />
            <label className="flex-1 relative block cursor-pointer">
              <input
                required
                type="text"
                className="h-14 px-4 border-2 border-gray-200 rounded w-full focus:border-getir-secondary focus:outline-none peer text-sm pt-1 text-gray-800 cursor-pointer"
              />
              <span
                className="absolute top-0 left-0 h-full px-4 flex items-center
               text-sm text-gray-500 peer-valid:h-6 peer-valid:text-getir-secondary peer-valid:text-xs transition-all duration-200"
              >
                Telefon Numarası
              </span>
            </label>
          </div>
          <button className="bg-getir-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-getir-secondary mt-3 hover:bg-getir-secondary hover:text-getir-yellow transition-colors transfrom duration-200">
            Telefon numarası ile devam et
          </button>
          <hr className="h-[1px] bg-gray-300 my-2" />
          <button className="bg-getir-fb h-12 flex items-center rounded-md w-full text-sm font-semibold text-getir-fb-text mt-3 px-4">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0IDEyQzI0IDUuMzcxODggMTguNjI4MSAwIDEyIDBDNS4zNzE4OCAwIDAgNS4zNzE4OCAwIDEyQzAgMTcuOTkwNiA0LjM4NzUgMjIuOTU0NyAxMC4xMjUgMjMuODU0N1YxNS40Njg4SDcuMDc4MTJWMTJIMTAuMTI1VjkuMzU2MjVDMTAuMTI1IDYuMzQ5MjIgMTEuOTE1NiA0LjY4NzUgMTQuNjU3OCA0LjY4NzVDMTUuOTcwMyA0LjY4NzUgMTcuMzQzOCA0LjkyMTg4IDE3LjM0MzggNC45MjE4OFY3Ljg3NUgxNS44Mjk3QzE0LjMzOTEgNy44NzUgMTMuODc1IDguODAwNzggMTMuODc1IDkuNzVWMTJIMTcuMjAzMUwxNi42NzExIDE1LjQ2ODhIMTMuODc1VjIzLjg1NDdDMTkuNjEyNSAyMi45NTQ3IDI0IDE3Ljk5MDYgMjQgMTJaIiBmaWxsPSIjM0M1QTk5Ii8+Cjwvc3ZnPgo="
              alt=""
              className=""
            />
            <span className="mx-auto">Facebook ile devam et</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
